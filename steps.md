# Deployment Steps for Post Composer

This guide will help you deploy the app to Render and MongoDB Atlas step by step.

## 1. Prepare your code

1. Make sure all changes are saved.
2. Open the project folder in VS Code.
3. Confirm the backend starts locally.

Run:

```bash
cd backend
npm install
npm run dev
```

Then test the frontend:

```bash
cd frontend
npm install
npm start
```

## 2. Prepare the backend for Render

1. Open [backend/instagram/config/config.env](backend/instagram/config/config.env).
2. Replace the local Mongo URI with a placeholder for now:

```env
PORT=4000
MONGO_URI=your_mongodb_atlas_uri
NODE_ENV=production
```

3. Make sure the backend uses the production port from Render automatically.
4. The backend entry file already uses process.env.PORT, so Render will handle it.

## 3. Create a MongoDB Atlas database

1. Go to https://cloud.mongodb.com/
2. Create an account or sign in.
3. Create a new project.
4. Create a new cluster.
5. Create a database user with a username and password.
6. Allow access from anywhere:
   - Network Access -> Add IP Address -> Allow Access from Anywhere
7. Get your connection string.
8. Copy the URI and keep it safe.

Example Atlas URI:

```env
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/post-composer?retryWrites=true&w=majority
```

## 4. Deploy the backend to Render

1. Go to https://render.com/
2. Sign in or create an account.
3. Click New + -> Web Service.
4. Connect your GitHub repository.
5. Choose the backend folder or select the repository root if you want to deploy from the monorepo.
6. Set these values:
   - Name: post-composer-backend
   - Runtime: Node
   - Build Command: npm install
   - Start Command: npm start
   - Root Directory: backend
7. Add environment variables:
   - NODE_ENV=production
   - MONGO_URI=your_atlas_uri
   - PORT=4000
8. Click Create Web Service.
9. Wait for the deployment to finish.
10. Copy the Render backend URL.

Example:

```text
https://post-composer-backend.onrender.com
```

## 5. Deploy the frontend to Render

1. Go to Render -> New + -> Static Site.
2. Connect the same GitHub repository.
3. Set the build settings:
   - Root Directory: frontend
   - Build Command: npm install && npm run build
   - Publish Directory: build
4. Add environment variable:
   - REACT_APP_API_URL=https://your-backend-url.onrender.com
5. Click Create Static Site.
6. Wait for the build to complete.
7. Open the deployed frontend URL.

## 6. Update the frontend API base URL

After the backend is deployed, make sure your frontend uses the Render backend URL.

Set this in Render for the Static Site:

```env
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

## 7. Test the deployment

1. Open the frontend URL.
2. Try the Instagram composer flow.
3. Try the Twitter flow.
4. Confirm the app can connect to the backend.
5. Check the Render logs if something fails.

## 8. Common issues

### Backend fails to start

- Check the Render logs.
- Confirm MONGO_URI is correct.
- Confirm the app uses the correct port.

### Frontend cannot reach backend

- Make sure REACT_APP_API_URL is set correctly.
- Make sure the backend CORS settings allow the frontend domain.
- Check browser network requests.

### MongoDB connection fails

- Confirm Atlas allows access from anywhere.
- Confirm the database user exists.
- Confirm the URI has the correct password and cluster name.

## 9. Final checklist

- [ ] Backend deployed on Render
- [ ] Frontend deployed on Render Static Site
- [ ] MongoDB Atlas cluster created
- [ ] MONGO_URI set in backend environment
- [ ] REACT_APP_API_URL set in frontend environment
- [ ] App loads successfully in production

If you want, I can continue with the next step and help you fill in your real Render URLs and Atlas connection string one by one.
