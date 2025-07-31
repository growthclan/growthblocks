export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { email } = req.body;

  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  const SENDGRID_LIST_ID = process.env.SENDGRID_LIST_ID;

  if (!SENDGRID_API_KEY || !SENDGRID_LIST_ID) {
    return res.status(500).json({ error: "Missing SendGrid configuration." });
  }

  const response = await fetch("https://api.sendgrid.com/v3/marketing/contacts", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      list_ids: [SENDGRID_LIST_ID],
      contacts: [{ email }],
    }),
  });

  if (!response.ok) {
    return res.status(500).json({ error: "SendGrid error" });
  }

  return res.status(200).json({ success: true });
}
