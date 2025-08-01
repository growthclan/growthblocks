# GrowthBlock Prompt – Newsletter Form with SendGrid Integration

## Goal
Add a styled newsletter signup form to the project, using ShadCN UI and a backend route that connects to SendGrid.

---

## ✅ Files to Create

### `/components/ui/newsletter-form.tsx`

React component for email input + POST logic to `/api/newsletter`.

### `/app/api/newsletter/route.ts`

POST endpoint to SendGrid Marketing Contacts API using:

```
process.env.SENDGRID_API_KEY
process.env.SENDGRID_LIST_ID
```

### `/app/demo.tsx`

Demo wrapper to render the newsletter form in the UI.

---

## 🧪 ENV Variables Required

```
SENDGRID_API_KEY=
SENDGRID_LIST_ID=
```

---

## ✅ Summary

- Generates newsletter form with success state
- Connects to SendGrid via backend
- Fully styled with ShadCN
- Ready to run in browser with `npm run dev`
