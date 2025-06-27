# 📦 Next.js Inventory Manager

A full-stack **Inventory Management System** built with **Next.js 14 App Router**, **Tailwind CSS**, **MongoDB**, and **Redux Toolkit (RTK Query)**. This app supports both social authentication via **NextAuth.js** (Google, GitHub) and traditional **email/password login** using JWT.

## 👤 Admin Credentials

> Use the following to log in as an **Admin**:

Email: nextAdmin@gmail.com
Password: nextAdmin@gmail.com

## 🔑 Features

- ✅ User registration with email & password (JWT-based)
- ✅ Login via:
  - Email/Password (JWT)
  - Google (OAuth via NextAuth)
  - GitHub (OAuth via NextAuth)
- 🔐 Role-based authentication (`admin`, `user`)
- 🛒 Product management:
  - Add / Edit / Delete / View
  - Protected admin routes (middleware)
- 📦 Inventory dashboard with live product data using **RTK Query**
- 🧾 Clean UI with Tailwind CSS / DaisyUI
- 🌐 MongoDB backend with secure password hashing

---

## 🚀 Tech Stack

- **Frontend:** Next.js (App Router), Tailwind CSS
- **Auth:** NextAuth.js + JWT
- **State Management:** Redux Toolkit + RTK Query
- **Backend:** API Routes (Next.js), MongoDB
- **DB:** MongoDB Atlas (Mongoose / native driver)

---

> ⚠️ You can set these credentials manually in your MongoDB `Users` collection with `role: "admin"`.

---

## 🧪 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/next-inventory-manager.git
cd next-inventory-manager
npm install
npm run dev


MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NEXTAUTH_SECRET=your_nextauth_secret
GITHUB_ID=your_github_oauth_id
GITHUB_SECRET=your_github_oauth_secret
GOOGLE_ID=your_google_oauth_id
GOOGLE_SECRET=your_google_oauth_secret


---

Let me know if you want to:
- Add screenshots or deploy link
- Support dark/light theme toggle in docs
- Generate badges (build status, license, etc.)

I can also convert this into a `README.md` file download if you need.



```
