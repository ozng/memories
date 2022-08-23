# **Memories**

## Screenshots

### **Home**

---

## Back-end setup

### Install Dependencies

- Go to back-end folder with `cd server` on your terminal.
- Run `npm install`

This will install all dependencies.

### Create Mongo DB Cluster

- Visit [this documentation](https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/) and create a free cluster.

### Connect Your App to Mongo DB Cluster

- Create `.env` file.
- Paste your Mongo DB url and replace `<password>` with your password.

```env
MONGO_URL = ***YOUR MONGODB URL***
PORT = ***5000*** for example ***
```

### Start The Server

- Run `npm start` to start the server.

## Front-End setup

- Go to front-end folder with `cd client` on your terminal.
- Run `npm install`. This will install all dependencies.
- Run `npm start`.

This will start your app on `http://localhost:3000/`.
