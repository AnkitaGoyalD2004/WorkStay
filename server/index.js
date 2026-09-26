  import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

    // 1. Load environment variables from .env
    dotenv.config();

    const app = express();
    const PORT = process.env.PORT || 5000;

    // 2. Middlewares
    // Allows frontend (React) to make API requests to this backend
    app.use(cors());

    // Parses incoming JSON data from request bodies (e.g. POST requests)
    app.use(express.json());

    // 3. Health check route
    // Kubernetes uses routes like this to check if your server is alive and healthy!
    app.get('/api/health', (req, res) => {
      res.json({
        status: 'success',
        message: 'WorkStay API is up and running!',
        timestamp: new Date().toISOString()
      });
    });

    // 4. Start the server
    app.listen(PORT, () => {
      console.log(`WorkStay Server is running on http://localhost:${PORT}`);
    });
