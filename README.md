# 🚀 Ship API | RESTful API for Ship Management

Welcome to **Ship API** – a secure and efficient RESTful API for managing ship data, built with Node.js, Express, MongoDB, and JWT authentication.

---

## 🔍 Features

- 👨‍✈️ **Ship Management**  
  Create, read, update, and delete ship records with details like name and email.

- 🔒 **Secure Authentication**  
  JWT-based authentication ensures protected endpoints for sensitive operations.

- ⚡ **Fast and Reliable**  
  Built with Express and MongoDB for high performance and scalability.

---

## 🎯 Advantages

- 💻 **Developer-Friendly**  
  Clear endpoints and error handling for seamless integration.

- ✅ **Input Validation**  
  Joi ensures robust data validation with meaningful error messages.

- 📊 **MongoDB Integration**  
  Persistent storage with MongoDB for reliable data management.

---

## 🔧 Tech Stack

- ⚙️ **Backend:** Node.js, Express.js  
- 🗄️ **Database:** MongoDB (Mongoose)  
- 🔐 **Authentication:** JWT, bcrypt  
- ✅ **Validation:** Joi  

---

## 📦 Getting Started

### 1️⃣ Clone the repository
```bash
git clone git@github.com:Rohan-80800/Ship.git
cd Ship
npm install
````

### 2️⃣ Create a `.env` file

```env
PORT=3000
MONGODB_URI=your_mongo_atlas_url
JWT_SECRET=your_super_secret_jwt_key_here
```

### 3️⃣ Setup MongoDB Atlas

Follow these steps to set up MongoDB Atlas and connect it with this project:

### 1. Create a Free Cluster
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas) and log in or sign up.
2. Click **Add New Project** → give your project a name → click **Next** → **Create Project**.
3. Inside your project, click **Build a Cluster**.
4. Choose **Free Tier (M0)** plan → select cloud provider (AWS/GCP/Azure) → select nearest free region.
5. Click **Create Cluster** → wait a few minutes for deployment.

### 2. Create a Database User
1. Go to **Database Access** from the left menu.
2. Click **Add New Database User**.
3. Set:
   - Username: `your-username`
   - Password: `your-password` (or auto-generate)
4. Assign **Read and write to any database** privileges.
5. Click **Add User**.

### 3. Allow Network Access
1. Go to **Network Access** from the left menu.
2. Click **Add IP Address** → select **Allow Access from Anywhere (0.0.0.0/0)**.
3. Click **Confirm**.

### 4. Get Connection String
1. Go to **Clusters → Connect → Connect your application**.
2. Copy the connection string. Example:

### 5. Add Mongo_URL to `.env` File

### 4️⃣ Start the server

```bash
npm run dev
```
---

## 🛠️ API Endpoints

### 🔑 Authentication

#### Register a user

```http
POST /auth/register
```

Request Body:

```json
{ "username": "test", "password": "pass123" }
```

#### Login to get JWT token

```http
POST /auth/login
```

Request Body:

```json
{ "username": "test", "password": "pass123" }
```

---

### 🚢 Ships

#### List all ships

```http
GET /ships
```

#### Create a ship (requires JWT)

```http
POST /ships
```

Request Body:

```json
{ "name": "Titanic", "email": "titanic@example.com" }
```

#### Get a ship by ID

```http
GET /ships/:id
```

#### Update a ship (requires JWT)

```http
PUT /ships/:id
```

#### Delete a ship (requires JWT)

```http
DELETE /ships/:id
```

---

## 🧪 Postman Testing

1. Open Postman and click **Import**.

2. Select **Raw Text** and paste the content of `postman.json`.

3. Run requests in this order:

   * **Register**
   * **Login**
   * **POST /ships**
   * **GET /ships**
   * **GET /ships/\:id**
   * **PUT /ships/\:id**
   * **DELETE /ships/\:id**

---




