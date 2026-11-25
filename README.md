# Scalable Backend Architecture

## Directory Structure

```text
src/
├── server.js
├── app.js
├── routes/
│   ├── index.js
│   └── health.route.js
├── controllers/
│   └── health.controller.js
├── services/
│   └── health.service.js
├── daos/
│   └── base.dao.js
├── validations/
│   └── index.js
├── middlewares/
│   └── errorHandler.js
└── utils/
    ├── ApiError.js
    └── ApiResponse.js
```

## Running the Application

```bash
npm run dev
```

## Health Endpoint

`GET http://localhost:5000/api/health`
