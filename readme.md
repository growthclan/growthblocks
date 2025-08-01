# GrowthBlocks

> Prompt-based building blocks for AI-native development.

This repository contains reusable AI-ready blocks that:
- Are activated by a single natural language prompt
- Generate full UI + backend logic
- Work across environments like Cursor, Replit, Lovable

## 📦 Blocks

Each block lives in `blocks/[id]/prompt.md` and includes:
- What the AI assistant should generate
- Code structure
- ENV requirements
- Setup validation logic

## Examples

### 🔧 Project Setup
Prompt:  
`Set up a project with Next.js, Tailwind CSS, and ShadCN`

➡️ Generates a full working environment if none exists.

### 📨 Newsletter + SendGrid
Prompt:  
`Create a newsletter signup form that integrates with SendGrid using ShadCN UI`

➡️ Creates UI + backend API route ready to deploy.
