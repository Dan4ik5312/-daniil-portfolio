// Vercel Serverless Function: /api/leadflow
// The real n8n webhook URL stays private in Vercel Environment Variables.

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (!webhookUrl) {
    return res.status(500).json({ success: false, error: 'Backend not configured' });
  }

  try {
    const body = req.body || {};

    const name = String(body.name || '').trim().slice(0, 120);
    const project = String(body.project || '').trim().slice(0, 120);
    const message = String(body.message || '').trim().slice(0, 1500);
    const budget = Number(body.budget || 0);
    const timelineDays = Number(body.timelineDays || 365);

    if (!name || !project) {
      return res.status(400).json({ success: false, error: 'Name und Projekt sind erforderlich' });
    }

    if (!Number.isFinite(budget) || budget < 0 || budget > 10000000) {
      return res.status(400).json({ success: false, error: 'Ungültiges Budget' });
    }

    if (!Number.isFinite(timelineDays) || timelineDays < 0 || timelineDays > 3650) {
      return res.status(400).json({ success: false, error: 'Ungültiger Zeitraum' });
    }

    const upstream = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'LeadFlow-Vercel-Proxy/1.0'
      },
      body: JSON.stringify({ name, project, budget, timelineDays, message })
    });

    const text = await upstream.text();
    let data;

    try {
      data = JSON.parse(text);
    } catch {
      return res.status(502).json({ success: false, error: 'Ungültige Antwort vom Automatisierungs-Backend' });
    }

    if (!upstream.ok) {
      return res.status(502).json({ success: false, error: 'Automatisierungs-Backend nicht erreichbar' });
    }

    return res.status(200).json({
      success: Boolean(data.success),
      lead: {
        name: data.lead?.name || name,
        project: data.lead?.project || project,
        budget: data.lead?.budget ?? budget,
        timelineDays: data.lead?.timelineDays ?? timelineDays
      },
      qualification: {
        score: data.qualification?.score ?? 0,
        priority: data.qualification?.priority || 'COLD',
        nextAction: data.qualification?.nextAction || 'Später erneut prüfen'
      }
    });
  } catch (error) {
    console.error('LeadFlow proxy error:', error);
    return res.status(500).json({ success: false, error: 'Interner Fehler' });
  }
};
