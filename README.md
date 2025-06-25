# 🌐 Credit Analyst Portal

A simple web portal for Credit Analysts to learn about AML (Anti-Money Laundering), red flags, and global country risk profiles — built using [Next.js](https://nextjs.org/).

🔗 **Live Website:**  
[https://credit-analyst2025-9n6s9g4sk-victorkwongs-projects.vercel.app/](https://credit-analyst2025-9n6s9g4sk-victorkwongs-projects.vercel.app/)

---

## 📅 Development Notes

**Date:** 24-Jun-2025  
This project can be structured using **two valid routing strategies in Next.js**:

### Option 1 – Classic Pages Router

- Uses: `pages/` directory
- File Structure:
/pages
├── index.js → Homepage
├── countries.js → /countries
└── _app.js → Global wrapper (e.g., for CSS)

- Global CSS: Imported in `/pages/_app.js`
- Good for: Simpler sites, static export compatibility (`next export`)

### Option 2 – App Router (Next.js 13+)

- Uses: `src/app/` directory
- File Structure:
- Global CSS: Imported in `/src/app/layout.js`
- Good for: Modern layouts, nested routing, better scalability

---

## 🚀 Getting Started

1. **Install dependencies**
 ```bash
 npm install

2. Run Locally (npm run dev)