# 📊 Feedback Kiosk Management System

A real-world **customer feedback kiosk system** built using **Node.js, Express, MongoDB, and Vanilla JavaScript**.  
Designed for shops, malls, hospitals, and service counters where customers can quickly submit feedback.

---

## ✨ Features

### 👥 Customer (Kiosk) Side
- 😊 Happy / 😐 OK / 😞 Sad feedback options
- Conditional reason input for **Sad** feedback
- Full-screen kiosk-style UI
- Custom **Thank You screen** (no popup, auto reset)
- Mobile & tablet friendly

### 🧑‍💼 Admin Side
- View all feedback
- Filter by mood
- Delete feedback
- Simple analytics (count summary)

---

## 🛠 Tech Stack

| Layer | Technology |
|------|-----------|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express |
| Database | MongoDB |
| Architecture | REST API |
| Deployment | LAN + Cloud-ready |

---

## 🧩 Project Structure

Feedback-Management-System/
├── backend/
│ ├── models/
│ ├── routes/
│ └── server.js
├── frontend/
│ ├── assets/
│ ├── feedback.html
│ ├── admin.html
│ ├── script.js
│ └── style.css
├── .gitignore
└── README.md


---

## ⚙️ Local Setup
 1️⃣ Clone Repository
 
git clone https://github.com/Shivashukla6321/Feedback-Management-System.git
cd Feedback-Management-System

2️⃣ Backend Setup
cd backend
npm install

Create .env file:

MONGO_URI=mongodb://127.0.0.1:27017/feedbackDB
PORT=5000

3️⃣ Access Application

Customer screen:
http://localhost:5000/feedback.html

Admin panel:
http://localhost:5000/admin.html

##🌐 Local Network Access
http://<server-ip>:5000/feedback.html



The project is also cloud-ready and can be deployed using platforms like Render, Netlify, and MongoDB Atlas.

---

## 📌 Use Cases

- Retail stores
- Hospitals and clinics
- Restaurants
- Colleges and institutions
- Customer service desks

---

## 🚀 Future Enhancements

- Admin authentication and role management
- Advanced analytics and charts
- Cloud deployment with public URL
- Multi-language support
- Electron-based kiosk application

---

## 👨‍💻 Author

**Anag Shukla**
