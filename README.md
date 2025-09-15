# SIH-25013

# 🚍 RideRadar  
**Intelligent Public Transport for Tier-2 Cities and small towns**

## 📌 Problem Statement
Public transport in small cities is unreliable due to:
- Lack of real-time tracking  
- Unpredictable bus schedules and overcrowding  
- Low digital infrastructure for transport management  

# Impacts
👉 This leads to **delays, commuter frustration, and increased private vehicle use**, worsening traffic and pollution.  

## 💡 Our Solution
**RideRadar** is a web platform designed for **tier-2 cities and towns**, providing:  
- ✅ **Real-time GPS Bus Tracking** – Location + ETA updates   
- ✅ **Offline-First Support** – Works even in low network coverage  
- ✅ **Gamification & Rewards** – Points for choosing public transport  
- ✅ **Eco-Friendly Route Suggestions** – Promote green commuting  
- ✅ **Community Alerts** – Commuters report delays/breakdowns  

---

## 🏗️ System Architecture
**Data Flow:**  
1. 🚌 GPS devices on buses send live location → Server  
2. ☁️ Backend stores data in MongoDB  
3. 📱  Web Dashboard show ETA(Estimated Time of Arrival), route map, and occupancy  
4. 🌐 Offline cache ensures access in low bandwidth areas  


## 🛠️ Tech Stack
| Component        | Technology |
|------------------|------------|
| **Frontend**     | React.js (Web) |
| **Backend**      | Node.js + Express |
| **Database**     | MongoDB OR POSTGRESQL with PRISMA ORM|
| **Real-Time**    | Socket.IO, MQTT |
| **Mapping**      | Leaflet.js / Google Maps API |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/shreyansh2005a/SIH-25013
cd RideRadar-Public-Transport
```

### 2️⃣ Install Dependencies
```bash
cd backend
npm install

cd frontend
npm install
```
### 3️⃣ Run the Backend
```bash
npm run dev
```


