# GrowthBlock Prompt – Project Setup (Next.js + Tailwind v3 + TypeScript)

## Goal
Ensure the project is correctly initialized with:
- ✅ Next.js (App Router)
- ✅ Tailwind CSS v3 (not v4, to avoid PostCSS issues)
- ✅ TypeScript
- ✅ Compatible postcss + tailwind config

---

## ✅ Steps to Follow (for Cursor/Replit/etc.)

### 1. Check for existing project
- If `package.json` and `src/app/page.tsx` exist → ✅ skip init
- Else → run:

```bash
npx create-next-app@latest . --typescript --app --tailwind --no-eslint --src-dir
```

### 2. Force install Tailwind v3 (NOT v4)
```bash
npm install -D tailwindcss@3 postcss@8 autoprefixer@10
```

### 3. Create and configure Tailwind config manually
```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 4. Fix PostCSS config for Tailwind v3
```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 5. Ensure Tailwind directives in `src/app/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 6. Create folders (if missing)
- `src/components/ui/`
- `src/app/api/`

---

## ✅ Output

A working Next.js App Router project with Tailwind v3 and proper config, ready to install any GrowthBlock.
