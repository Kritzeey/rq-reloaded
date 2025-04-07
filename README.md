<h1 align=center>📝 Quiz App Reloaded</h1>

The previous quiz web app, valhize-ristek-quiz was not well made. The code's structure is a mess and it doesn't have a proper backend. This repo is used to fix those problems.

Fixes
- 🔧 Proper backend
- 🍃 Used MongoDB instead of PostgreSQL + Neon
- 📱 Nicer UI with the help of shadcn/ui
- 🔎 The ability to search and filter quizzes
  
Tech Stack
- React.js
- Express.js
- Node.js
- MongoDB
- Tailwind CSS

Libraries
- shadcn/ui

<br>

<h1 align=center>⬆️ Future Upgrades</h1>

These are things i'd like to add in the future
- Proper quiz environment (questions, timer, accuracy)
- Auth using JWT
- Global quiz browser to browse other users' quizzes

<br>

<h1 align=center>⚙️ Project Setup</h1>

1. Clone this repo.
    ```
    git clone https://github.com/Kritzeey/rq-reloaded.git
    ```
2. cd into the cloned repo and do npm install.
    ```
    cd rq-reloaded/
    npm install
    ```
3. Create .env file at the root of the folder.

    ```
    PORT=<backend_port>
    MONGO_URI=<your_mongo_uri>
    ```
4. Do npm run dev.
    ```
    npm run dev
    ```
5. cd into frontend, do npm isntall, and do npm run dev.
    ```
    cd frontend/
    npm install
    npm run dev
    ```
6. Go to your browser and go to http://localhost:3000/.