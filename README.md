# HEALTH IS LIFE 🌿

A modern, full-stack MERN (MongoDB, Express.js, React, Node.js) web application focused on health and wellness.

## 🚀 Features

- **User Authentication & Profiles**
  - Secure signup/login system
  - Personalized user dashboards
  - Profile customization

- **Health Tracking**
  - Activity monitoring
  - Nutrition logging
  - Progress visualization
  - Goal setting and tracking

- **Community Features**
  - Share health tips
  - Connect with other users
  - Discussion forums
  - Expert advice sections

## 🛠️ Tech Stack

### Frontend
- React.js
- TypeScript
- Tailwind CSS
- Lucide React (for icons)
- Vite (Build tool)

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## 🏃‍♂️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/health-is-life.git
   cd health-is-life
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. **Environment Setup**
   - Create `.env` files in both frontend and backend directories
   - Set up necessary environment variables:
     ```env
     # Backend .env
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     PORT=5000

     # Frontend .env
     VITE_API_URL=http://localhost:5000
     ```

4. **Run the application**
   ```bash
   # Start backend server
   cd backend
   npm run dev

   # Start frontend in another terminal
   cd frontend
   npm run dev
   ```

## 📝 API Documentation

The API endpoints are organized around the following resources:

- `/api/auth` - Authentication routes
- `/api/users` - User management
- `/api/health` - Health tracking
- `/api/community` - Community features

Detailed API documentation is available in the `/docs` directory.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- Tushar Dhingra(https://github.com/tushar-dhingra) - Full Stack Developer

## 🙏 Acknowledgments

- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📧 Contact

For any queries or support, please email us at: support@healthislife.com

---

Made with ❤️ for a healthier world
