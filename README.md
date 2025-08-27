# 📝 Blogging Platform

A full-stack **Blogging Platform** built with **MERN stack + Vite + TailwindCSS**, supporting user authentication (JWT), blog management, and a modern responsive UI.

---

## 🚀 Features

- 👤 **User & Admin Authentication** (JWT)
- 📝 Create, Read, Update, Delete **Blog Posts**
- 💬 Comment System
- 📂 Categories & Tags
- 🎨 Responsive UI with TailwindCSS
- 🔐 Secure REST API with Express & MongoDB

---

## 📂 Project Structure
Blogging-Platform/
│── Blogging-web/
│ ├── backend/ # Node.js + Express + MongoDB + JWT
│ │ ├── src/
│ │ ├── .env
│ │ ├── package.json
│ │ └── package-lock.json
│ │
│ ├── blog-client/ # React (Vite) + TailwindCSS + Axios
│ │ ├── public/
│ │ ├── src/
│ │ ├── index.html
│ │ ├── package.json
│ │ └── vite.config.js
│
│── README.md


---

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React (Vite)**
- 🎨 **TailwindCSS**
- 🔗 **Axios**

### Backend
- 🟢 **Node.js**
- 🚀 **Express.js**
- 🍃 **MongoDB**
- 🔑 **JWT Authentication**

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo
```bash
git clone https://github.com/your-username/Blogging-Platform.git
cd Blogging-Platform/Blogging-web


---

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React (Vite)**
- 🎨 **TailwindCSS**
- 🔗 **Axios**

### Backend
- 🟢 **Node.js**
- 🚀 **Express.js**
- 🍃 **MongoDB**
- 🔑 **JWT Authentication**

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo
```bash
git clone https://github.com/your-username/Blogging-Platform.git
cd Blogging-Platform/Blogging-web

2️⃣ Backend Setup
cd backend
npm install

Create a .env file inside backend/:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Run backend:

npm start

3️⃣ Frontend Setup
cd blog-client
npm install


Create a .env file inside blog-client/:
VITE_API_URL=http://localhost:5000


Run frontend:
npm run dev


