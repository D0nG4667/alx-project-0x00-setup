# 🌍 ALX Project 0x00 — Next.js Setup

## 🚀 Overview

This project introduces the foundational setup for building modern web applications using **Next.js**, **TypeScript**, and **Tailwind CSS**.
You’ll explore the core setup process — from initializing a new project and structuring directories to implementing basic routing, reusable components, and understanding configuration files.

---

## 🧩 Project Structure

```bash
alx-project-0x00/
├── components/        # Reusable React components
├── interfaces/        # TypeScript interfaces
├── pages/             # Page-based routing (Next.js Pages Router)
├── public/            # Static assets (images, fonts, etc.)
├── styles/            # Global and Tailwind CSS styles
├── tsconfig.json      # TypeScript configuration
├── tailwind.config.js # Tailwind setup
├── eslint.config.js   # ESLint configuration
├── next.config.ts     # Next.js configuration
├── postcss.config.mjs # PostCSS setup
├── next-env.d.ts      # TypeScript Next.js environment types
└── package.json       # Project dependencies and scripts
```

---

## 🧱 Task 0: Scaffolding a Project

### 🎯 Objective

Understand how to scaffold a new Next.js project using CLI tools like **npx** and **create-next-app**, and initialize it with **TypeScript**, **Tailwind CSS**, and **ESLint**.

### ⚙️ Steps

1. Open VSCode and start a new terminal.
2. Navigate to your preferred project directory.
3. Run the following command:

   ```bash
   npx create-next-app@latest alx-project-0x00 --typescript
   ```

4. Select the following options:

   * ✅ **Yes** for: ESLint, Tailwind CSS, import alias
   * ❌ **No** for: `/src` directory and App Router
5. Start your app:

   ```bash
   npm run dev -- -p 3000
   ```

6. Visit [http://localhost:3000](http://localhost:3000).

---

## 🗂️ Task 1: Setting Up Project Directories

### 🎯 Objective 1

Leverage the Next.js folder structure to create reusable and well-organized components and interfaces.

### 🛠️ Implementation

1. Create the following directories:

   ```bash
   mkdir components interfaces
   ```

2. In `pages/index.tsx`, refactor the component into an arrow function:

   ```tsx
   const Home: React.FC = () => {
     return (
       <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
         <h1>Airbnb Application Clone system</h1>
         <button className="border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full">
           Get Started
         </button>
       </main>
     )
   }

   export default Home
   ```

3. Add the following empty files:

   ```bash
   touch interfaces/index.ts
   touch components/Card.tsx components/Pill.tsx
   ```

4. Run:

   ```bash
   npm run dev -- -p 3000
   ```

5. Open [http://localhost:3000](http://localhost:3000) to confirm the setup.

---

## 🧭 Task 2: Basic Routing

### 🎯 Objective 2

Implement simple, file-based routing using the **Next.js Pages Router** — no configuration required.

### 🛠️ Steps

1. Create two new files:

   ```bash
   pages/
   ├── landing.tsx
   └── about.tsx
   ```

2. Add components:

**`landing.tsx`**

```tsx
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
    </div>
  )
}
export default Landing
```

**`about.tsx`**

```tsx
const About: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">About Page</h1>
    </div>
  )
}
export default About
```

3. Run:

   ```bash
   npm run dev -- -p 3000
   ```

4. Open in browser:

   * [http://localhost:3000/landing](http://localhost:3000/landing)
   * [http://localhost:3000/about](http://localhost:3000/about)

### ✅ Outcome

* Added static routes for `/landing` and `/about`.
* Demonstrated file-based routing behavior.
* Prepared the base for navigation components.

---

## 🧠 Learning Highlights

* Understanding **Next.js CLI** setup with TypeScript.
* Hands-on with **Pages Router** and routing fundamentals.
* Applying **Tailwind CSS** for styling consistency.
* Establishing clean folder structures for scalability.
* Writing accessible, reusable, and typed React components.

---

## ⚡ Quick Commands

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Start development server   |
| `npm run build` | Build production app       |
| `npm start`     | Run production server      |
| `npm run lint`  | Run ESLint for code checks |
