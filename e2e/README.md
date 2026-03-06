# Full Integration (E2E) Tests

Playwright tests for the full React Online Store stack.

## Prerequisites

The app must be running before tests:

```bash
docker compose up -d
```

- Frontend: http://localhost:3001
- Backend: http://localhost:5000

## Run Tests

From project root:

```bash
npm run test:e2e
```

Or:

```bash
npx playwright test
```

## What's Tested

**App (browser):**
- Home page loads
- Products page loads with product grid
- Admin login page loads
- Admin login with valid credentials redirects to dashboard

**API (direct HTTP):**
- GET /api/products returns 200
- POST /api/admin/login with valid credentials returns token
- POST /api/admin/login with invalid credentials returns 401

## Environment

Override URLs if needed:

- `BASE_URL` – frontend URL (default: http://localhost:3001)
- `API_URL` – backend URL (default: http://localhost:5000)
