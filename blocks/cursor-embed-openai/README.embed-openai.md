# GrowthBlock – OpenAI Embedding

This GrowthBlock provides a minimal frontend and API integration to generate text embeddings using the OpenAI API (`text-embedding-ada-002`).

---

## 🧠 What it does

- Accepts user text input from a simple UI
- Sends the input to OpenAI's Embedding API
- Displays the resulting embedding vector on the screen

---

## 📁 Included Files

```
src/
├── components/
│   └── ui/
│       └── embed.tsx           # Tailwind-based input form
└── app/
    └── api/
        └── embed/
            └── route.ts        # API route to call OpenAI
```

---

## 🧪 How to use

1. Set up your project using our [Tailwind + Next.js Setup Prompt](../project-setup-tailwind/)
2. Add this block to your project
3. Create a `.env.local` file and add:

```bash
OPENAI_API_KEY=your-openai-api-key
```

4. Run your dev server:

```bash
npm run dev
```

5. Visit `/demo` or wherever you mount the `<Embed />` component

---

## 🔧 Requirements

- Tailwind CSS (v3)
- Next.js with App Router
- Node.js ≥ 18
- OpenAI API Key

---

## 📦 Use cases

- Semantic search
- Similarity matching
- Contextual vector storage
- LLM agents or retrieval apps

---

## 🧱 Related Blocks

- [`chat-openai`](../chat-openai)
- [`table-supabase`](../table-supabase)
