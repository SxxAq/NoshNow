# NoshNow

![NoshNow Banner](/home/shxdow/Pictures/Screenshots/240727_20h34m23s_screenshot.png)

## Description

NoshNow is a full-stack online food ordering platform built using the MERN stack (MongoDB, Express, React, Node.js). It enables users to browse restaurants, manage their orders, and make secure payments online. The application features user authentication with JWT, payment integration via Stripe, and file uploads using Multer.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication and authorization
- Restaurant browsing and menu viewing
- Shopping cart functionality
- Order placement and management
- Secure online payments with Stripe
- User profile management
- File uploads for restaurant images and menu items

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/noshnow.git
   cd noshnow
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Set up backend environment variables:
   Create a `.env` file in the `backend` directory with the following content:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

5. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

6. Set up frontend environment variables:
   Create a `.env` file in the `frontend` directory with:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```

7. Start the frontend server:
   ```bash
   npm start
   ```

## Usage

1. Open your web browser and go to `http://localhost:3000`.
2. Register a new account or log in.
3. Browse restaurants, view menus, and add items to your cart.
4. Place orders and manage them from your account dashboard.

## Dependencies

### Backend
- express
- mongoose
- jsonwebtoken
- bcryptjs
- cors
- dotenv
- multer
- stripe

### Frontend
- react
- react-dom
- react-router-dom
- axios
- @stripe/react-stripe-js
- @stripe/stripe-js

For a complete list of dependencies, please refer to the `package.json` files in the `backend` and `frontend` directories.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Submit a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, please open an issue on the GitHub repository.

---

Happy coding!

