# 🚀 GraphQL CRUD API (Node.js + Express + Apollo Server + MongoDB)

A clean and modular **GraphQL API** built with:

- **Node.js + Express**
- **Apollo Server (GraphQL)**
- **MongoDB + Mongoose**
- **JWT Authentication Middleware**

This project demonstrates GraphQL Queries, Mutations, Authentication, and CRUD operations.

---

## 📁 Project Folder Structure

```bash
GRAPHQL-PRO/
│── node_modules/
│── src/
│   ├── config/
│   │     └── db.js
│   ├── graphql/
│   │     ├── resolvers/
│   │     │     └── userResolver.js
│   │     ├── typeDefs/
│   │     │     └── userType.js
│   │     └── schema.js
│   ├── middleware/
│   │     └── authMiddleware.js
│   ├── models/
│   │     └── User.js
│   ├── utils/
│   ├── app.js
│   └── index.js
│── .env
│── package.json
│── package-lock.json
```

## ✅ Features

| Feature | Description |
|--------|-------------|
| User Registration | Creates new user + returns JWT token |
| User Login | Authenticates user + returns JWT token |
| Authentication Middleware | Protects resolvers using JWT |
| CRUD Operations | Create / Read / Update / Delete User |
| Modular Architecture | Clean separation of schema and resolvers |

---

## 🛠 Setup Instructions

### 1️⃣ Clone Repository
```sh
git clone https://github.com/Rashim-Sunar/GraphQL_Basics.git
cd graphql-pro
```

2️⃣ Install Dependencies
```sh
npm install
```
3️⃣ Create .env file in project root
```sh4️⃣ Start Server
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

4️⃣ Start Server
```sh
npm start
```
GraphQL Playground will be available at:

👉 http://localhost:5000/graphql

🧪 GraphQL API Usage

Open Apollo Playground → Enter the following queries:
✅ Register User
```sh
mutation {
  registerUser(name: "Rashim", email: "rashim@example.com", password: "pass123") {
    token
    user {
      id
      name
      email
    }
  }
}
```

✅ Login User
```sh
mutation {
  loginUser(email: "rashim@example.com", password: "pass123") {
    token
    user {
      id
      name
      email
    }
  }
}
```

✅ Get All Users
```sh
query {
  users {
    id
    name
    email
  }
}
```

✅ Update User
```sh
mutation {
  updateUser(id: "USER_ID", name: "New Name") {
    id
    name
    email
  }
}
```

✅ Delete User
```sh
mutation {
  deleteUser(id: "USER_ID")
}
```

🔐 Authentication Header

For secured actions (like fetching users), include JWT token in Headers:
json
```sh
{
  "Authorization": "Bearer <your_token_here>"
}
```


