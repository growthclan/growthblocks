# GrowthBlock Prompt – OpenAI Text Embedding UI

## Goal
Create a minimal interface to embed user input using OpenAI's Embedding API.

---

## ✅ Files to Generate

### 1. `src/components/ui/embed.tsx`

- Textarea input
- Submit button
- Loading state
- Display result in a <pre> block
- Tailwind CSS (no ShadCN)

### 2. `src/app/api/embed/route.ts`

- Accepts POST requests with a `text` payload
- Uses OpenAI API (`text-embedding-ada-002`)
- Returns embedding vector

---

## ✅ Required ENV Variable

```env
OPENAI_API_KEY=sk-your-key-here
```

Ensure this key is set in `.env.local` and `process.env.OPENAI_API_KEY` is accessible inside `route.ts`.

---

## ✅ Tailwind Styling Notes

- Assume Tailwind v3 (not v4)
- Keep layout centered and responsive
- Use simple gray/blue tones and spacing utilities

---

## ✅ Summary

- UI: textarea + button
- API: POST to OpenAI, return vector
- Output: embedding shown in scrollable block
- Setup assumes `src/` folder structure
