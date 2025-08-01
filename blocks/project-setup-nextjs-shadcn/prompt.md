# GrowthBlock Prompt – Project Setup (Next.js + ShadCN + Tailwind + TypeScript)

## Goal
Ensure the project environment is ready for rendering UI and handling backend logic using Next.js, Tailwind CSS, and ShadCN.

---

## ✅ Behavior Expected from AI Tools (Cursor, etc.)

1. **Check if a Next.js project with `shadcn`, Tailwind and TypeScript exists**
   - If not, create one with:

```bash
npx create-next-app@latest . --typescript --app --tailwind --no-eslint --src-dir
```

2. **Install dependencies:**

```bash
npm install @radix-ui/react-slot @radix-ui/react-label class-variance-authority tailwind-variants
```

3. **Initialize ShadCN:**

```bash
npx shadcn-ui@latest init
```

4. **Ensure `/components/ui/` exists**
   - If not, create it

> ✅ Once this setup is complete, you can run the next GrowthBlock to add business logic and UI components.
