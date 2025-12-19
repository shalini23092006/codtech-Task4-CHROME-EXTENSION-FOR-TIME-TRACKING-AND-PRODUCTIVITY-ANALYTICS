#Chrome Extension for Time Tracking and Productivity Analytics

#CODTECH Internship – Task 4


---

📌 Project Overview

This project is developed as part of CODTECH Internship – Task 4. The objective is to build a Chrome Extension that tracks the time a user spends on different websites and provides productivity analytics. The system classifies websites as productive or unproductive, stores usage data, and generates a weekly productivity report.

The project demonstrates full-stack development skills by combining a Chrome Extension frontend with a Node.js + Express + MongoDB backend.


---

🚀 Features

Automatically tracks time spent on websites

Detects tab switching and records usage duration

Classifies websites as:

Productive (coding, learning, documentation)

Unproductive (social media, entertainment)


Stores usage data in MongoDB

Generates weekly productivity reports via API

Simple Chrome extension popup to view daily usage



---

🛠 Technology Stack

Frontend (Chrome Extension)

HTML

CSS

JavaScript

Chrome Extension Manifest V3


Backend

Node.js

Express.js

MongoDB

Mongoose

REST APIs



---

📂 Project Structure

CODTECH-TASK-4
│
├── extension
│   ├── manifest.json
│   ├── background.js
│   ├── popup.html
│   ├── popup.js
│   └── popup.css
│
├── backend
│   ├── server.js
│   ├── package.json
│   ├── models
│   │   └── Usage.js
│   └── routes
│       └── usageRoutes.js
│
└── README.md


---

📄 File Explanation

🔹 extension/manifest.json

Defines the Chrome extension configuration such as name, permissions, version, background service worker, and popup interface.

🔹 extension/background.js

Runs in the background and:

Detects active tab changes

Calculates time spent on each website

Stores data locally

Sends usage data to the backend server


🔹 extension/popup.html

Provides the user interface shown when the extension icon is clicked.

🔹 extension/popup.js

Fetches website usage data from local storage and displays time spent on each site.

🔹 extension/popup.css

Styles the popup UI for better readability and user experience.


---

🔹 backend/server.js

Main backend entry point:

Sets up Express server

Connects to MongoDB

Registers API routes


🔹 backend/package.json

Manages backend dependencies such as Express, Mongoose, and CORS.

🔹 backend/models/Usage.js

Defines the MongoDB schema for storing:

Website domain

Time spent

Productivity category

Date


🔹 backend/routes/usageRoutes.js

Handles API endpoints:

Saves usage data

Classifies websites

Returns weekly productivity reports



---

📊 Productivity Classification Logic

Productive websites include:

Coding platforms

Learning resources

Documentation sites


All other websites are considered unproductive by default

This logic can be easily extended in the future



---

▶️ How to Run the Project

Backend Setup

cd backend
npm install
node server.js

Backend runs on:

http://localhost:5000


---

Chrome Extension Setup

1. Open Google Chrome


2. Go to chrome://extensions/


3. Enable Developer Mode


4. Click Load unpacked


5. Select the extension folder




---

📈 Output

Tracks browsing time automatically

Displays daily usage in extension popup

Stores productivity data in database

Weekly report available via backend API



---

🎯 Use Cases

Personal productivity tracking

Time management improvement

Internship and portfolio project

Full-stack development demonstration



---

📝 Conclusion

This Chrome Extension for Time Tracking and Productivity Analytics provides a practical solution to monitor and analyze browsing behavior. By combining frontend Chrome extension development with a backend server and database, the project delivers a complete productivity monitoring system. It helps users identify time wastage, improve focus, and build better digital habits.

The project successfully fulfills all the requirements of CODTECH Internship Task 4 and demonstrates real-world skills in browser extensions, backend development, and data analytics.
