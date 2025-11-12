# 🏗️ ALX Project 0x00 – Next.js Setup

## 📘 Project Overview

This project demonstrates how to scaffold a modern **Next.js** application using **TypeScript**, **Tailwind CSS**, and **ESLint**, following industry-standard best practices.
It serves as the foundation for learning how to build scalable, performant, and maintainable web applications using **Next.js**.

---

## 🎯 Learning Objectives

By completing this project, you will learn to:

* Initialize a **Next.js** project using the `create-next-app` CLI.
* Configure a **TypeScript**-based setup for type-safe React development.
* Integrate **Tailwind CSS** for responsive, utility-first styling.
* Enable **ESLint** for code quality and consistency.
* Understand Next.js folder structure and how to organize your codebase.
* Run and verify your local development environment.

---

## ⚙️ Project Setup Steps

### 1. Create the Project

Use the official **Next.js CLI tool** to scaffold the app:

```bash
npx create-next-app@latest alx-project-0x00 --typescript
```

### 2. CLI Configuration

During setup, select the following options when prompted:

| Option               | Selection |
| -------------------- | --------- |
| **ESLint**           | ✅ Yes     |
| **Tailwind CSS**     | ✅ Yes     |
| **`/src` directory** | ❌ No      |
| **App Router**       | ❌ No      |
| **Import alias**     | ✅ Yes     |

This ensures a clean, conventional **Pages Router** structure suitable for beginners.

---

### 3. Start the Development Server

After installation, navigate to your project directory and start the development server:

```bash
cd alx-project-0x00
npm run dev -- -p 3000
```

The app should now be running at:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🧩 Project Structure

```bash
alx-project-0x00/
├── components/        # Reusable React components
├── pages/             # Page-based routing (Next.js Pages Router)
├── public/            # Static assets (images, fonts, etc.)
├── styles/            # Global and Tailwind CSS styles
├── tsconfig.json      # TypeScript configuration
├── tailwind.config.js # Tailwind setup
├── eslint.config.js   # ESLint configuration
├── next.config.ts     # Next.js configuration
├── next-env.d.ts      # Next.js TypeScript environment types
├── postcss.config.mjs # PostCSS configuration
└── package.json       # Project dependencies and scripts
```

---

## 💡 Key Tools & Technologies

* **Next.js** – React framework for production-grade apps
* **TypeScript** – Type-safe JavaScript for better reliability
* **Tailwind CSS** – Utility-first responsive styling
* **ESLint** – Linting and code quality enforcement

---

## ✅ Verification Checklist

After setup, confirm that:

* `npm run dev` starts successfully on port `3000`.
* ESLint runs without errors.
* Tailwind CSS utilities work within components.
* TypeScript successfully type-checks your code.
