# 📘 CakraBelajar Backend (`cakrabelajar-be`)

**CakraBelajar Backend** is the REST API server for the CakraBelajar product — a specialized **Learning Management System (LMS)** designed for Indonesian junior and senior high school students.

The primary goal of this application is to help students discover their strengths across different academic subjects by:
- 📊 Analyzing individual learning progress
- 🤖 Providing AI chatbot integration for contextual, chapter-based Q&A
- 🧠 Offering intelligent recommendations to guide students towards their most suitable fields of study

---

## 🔍 Table of Contents

- [Installation & Setup](#-installation--setup)
- [Running Tests](#-running-tests)
- [Folder Structure](#-folder-structure)
- [License](#-license)

---

## ⚙️ Installation & Setup

### Prerequisites:
- **Node.js** v22.16.0 LTS  
- **PostgreSQL** v16.2

### Steps to run the project locally:
```bash
# Clone the repository
git clone https://github.com/your-username/cakrabelajar-be.git
cd cakrabelajar-be

# Install dependencies
npm install

# Run database migration (if available)
npm run migrate

# Start the server
npm start
```

---

## 🧪 Running Tests

To run all backend tests (including end-to-end tests), use:
```bash
npm run test
```

---

## 📁 Folder Structure

```plaintext
├── src/               # Main source code
│   ├── config/        # Environment configuration and connections
│   ├── controllers/   # Request & response handlers
│   ├── db/            # Database connections and query logic
│   ├── exceptions/    # Custom error classes and handlers
│   ├── middlewares/   # Express middlewares
│   ├── repositories/  # Data access layer
│   ├── routes/        # API endpoints
│   ├── services/      # Core business logic
│   ├── utils/         # Utility functions
│   ├── validator/     # Input validation schemas
│
├── seeds/             # Database seeding scripts (dummy data)
├── migrate/           # Database migration scripts
├── tests/             # End-to-end and integration tests
│
├── app.js             # Express app configuration
├── server.js          # Server entry point
```

---

## 📜 License

This project is licensed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for more information.

---

> Built with 💡 and care by the CakraBelajar Team
