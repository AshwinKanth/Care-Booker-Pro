# 🩺 Care Booker Pro

A responsive healthcare appointment booking web application that allows users to search for doctors, view profiles, and book appointments. Built using React, TypeScript, Bootstrap, and mock data.

---

## 📌 Features

- 🧑‍⚕️ View list of doctors with specialty, experience, and rating
- 🔍 Search doctors by name or specialization
- 📄 View detailed doctor profiles
- 📅 Book an appointment with selected doctor (with form validation)
- 🧭 Not Found route for invalid paths with bounce icon and pun
- 📱 Responsive design (desktop + mobile friendly)
- 📥 Mock data integrated (easily extensible)

---

## 🚀 Tech Stack

| Technology     | Usage                             |
|----------------|------------------------------------|
| React          | Frontend framework                 |
| TypeScript     | Static typing                      |
| React Router   | Routing between pages              |
| Bootstrap      | Styling & responsive layout        |
| Lucide React   | Icon library (frown, stethoscope)  |

---

## 📁 Folder Structure

```
src/
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── AppointmentForm.tsx
│   └── Success.tsx
│
├── context/
|   └── AppContext.tsx
|
├── data/
|   └── doctors.tsx    # Mock doctor data
|
├── pages/
│   ├── Home.tsx
│   ├── DoctorProfile.tsx
|   ├── BookingSuccess.tsx
|   ├── NotFound.tsx
│
│
├── routes.tsx/        # All defined routes
│       
│
├── App.tsx
├── index.tsx
└── index.css
```

---

## 🧪 Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/AshwinKanth/care-booker-pro.git
cd care-booker-pro
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
