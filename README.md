# User-Management-Server
A lightweight server-side application for managing users with full CRUD (Create, Read, Update, Delete) operations. Built to support user data handling, authentication stubs, and role-based logic with RESTful API architecture.

## 🚀 Features
- ✅ Create new users
- 🔍 Retrieve user details (by ID or list all)
- ✏️ Update user information
- ❌ Delete users


## 🛠 Tech Stack

- **Language:** JavaScript
- **Framework:** Express.js
- **Development Tools:** Nodemon (for hot-reloading during development)

## 🔗 API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| POST   | `/add`     | Create a new user |
| GET    | `/viewall`     | Get all users     |
| GET    | `/view/:id` | Get user by ID    |
| PUT    | `/update/:id` | Update user by ID |
| DELETE | `/delete/:id` | Delete user by ID |

## ⚙️ Setup Instructions
1. Clone the Repository
```bash
git clone <repo-url>
cd user_management
```
2. Initialize node project
```bash
npm init
```
 Then provide the required information (name, version, description, entry point, etc.).

3. Install express
```bash
npm install express
```

4. Install Nodemon (for auto reload)
```bash
npm i -D nodemon
```

5. Update package.json scripts
 Replace the "scripts" section in package.json with:
```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```
 note: name must be same as the entry point 

6. Create index.js and add the server code
(You already have this part coded.)

7. Start the Server
For production:
```bash
npm run start
```
for development (auto reload):
```bash
npm run dev
```


## 📌 Notes
- Postman was used to test all endpoints.
- Make sure to set Content-Type: application/json in headers for POST and PUT requests.
- User data is stored in memory (no database used).
- IDs auto-increment.
- Use 127.0.0.1:3000 for local hostname
