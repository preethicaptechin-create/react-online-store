# React Online Store – Changes & Beginner's Guide

This document explains all changes made to the project and how to use them. Written for freshers (beginners).

---

## Table of Contents

1. [Summary of Changes](#1-summary-of-changes)
2. [Backend Testing (Jest)](#2-backend-testing-jest)
3. [Frontend Testing (Vitest)](#3-frontend-testing-vitest)
4. [Full Integration Testing (Playwright)](#4-full-integration-testing-playwright)
5. [Admin Login Fix](#5-admin-login-fix)
6. [Product Image Size Fix](#6-product-image-size-fix)
7. [All Commands You Need](#7-all-commands-you-need)
8. [Troubleshooting](#8-troubleshooting)

---

## 1. Summary of Changes

| Area | What Was Done |
|------|---------------|
| **Backend** | Added Jest + Supertest for API testing |
| **Frontend** | Added Vitest + React Testing Library for component testing |
| **Integration** | Added Playwright for end-to-end (E2E) tests |
| **Admin Login** | Fixed 401 error – created admin user in Docker |
| **Product Images** | Fixed inconsistent image sizes on product page |

---

## 2. Backend Testing (Jest)

### What Was Added

- **Jest** – test framework
- **Supertest** – for testing HTTP API endpoints
- **Tests** for products API, admin login, and 404 routes

### Files Created/Modified

| File | Purpose |
|------|---------|
| `back-end/app.js` | Express app with all routes (extracted from server.js for testing) |
| `back-end/server.js` | Now imports app from app.js and starts the server |
| `back-end/jest.config.js` | Jest configuration |
| `back-end/tests/jest.setup.js` | Connects to MongoDB before tests run |
| `back-end/tests/product.test.js` | Tests for GET /api/products |
| `back-end/tests/admin.test.js` | Tests for POST /api/admin/login |
| `back-end/tests/api.test.js` | Tests for 404 on unknown routes |
| `back-end/package.json` | Added `jest`, `supertest`, `cross-env` in devDependencies |

### How Backend Tests Work

- Tests use **real MongoDB** (not in-memory)
- Default: `mongodb://127.0.0.1:27018/onlinestore_test` (Docker MongoDB port)
- Admin tests create a temporary admin user (`testadmin` / `admin123`) and clean up after

### Commands

```bash
# Go to backend folder
cd back-end

# Run all backend tests
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch
```

### Prerequisites

**MongoDB must be running** – tests will fail with timeout if it is not.

```bash
# Option 1: Start MongoDB with Docker (port 27018)
docker compose up -d mongo

# Option 2: If you have MongoDB installed locally (port 27017)
# Just ensure the MongoDB service is running
```

Tests try port 27018 (Docker) first, then 27017 (local). To use a different URI:
```bash
set TEST_MONGO_URI=mongodb://127.0.0.1:27017/onlinestore_test
npm test
```

---

## 3. Frontend Testing (Vitest)

### What Was Added

- **Vitest** – test runner (works with Vite)
- **React Testing Library** – for testing React components
- **jsdom** – simulates browser environment
- **@testing-library/jest-dom** – extra matchers like `toBeInTheDocument()`

### Files Created/Modified

| File | Purpose |
|------|---------|
| `frond-end/vite.config.js` | Added `test` block for Vitest |
| `frond-end/src/test/setup.js` | Imports jest-dom for all tests |
| `frond-end/src/utils/config.test.js` | Tests for config (BASE_URL, CURRENCY, etc.) |
| `frond-end/src/utils/productImage.test.js` | Tests for getProductImageUrl function |
| `frond-end/src/Components/ProductCard.test.jsx` | Tests for ProductCard component |
| `frond-end/package.json` | Added Vitest, Testing Library, jsdom; Vite downgraded to 5 for compatibility |

### Commands

```bash
# Go to frontend folder
cd frond-end

# Run all frontend tests once
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch
```

---

## 4. Full Integration Testing (Playwright)

### What Was Added

- **Playwright** – for end-to-end (E2E) tests in a real browser
- Tests that hit both frontend and backend together

### Files Created/Modified

| File | Purpose |
|------|---------|
| `package.json` (root) | Root package.json with test scripts |
| `playwright.config.js` | Playwright configuration |
| `e2e/app.spec.js` | Browser tests (home, products, admin login) |
| `e2e/api.spec.js` | API tests (products, admin login) |
| `e2e/README.md` | Instructions for E2E tests |

### How Integration Tests Work

- **App must be running** (Docker: `docker compose up -d`)
- Frontend: http://localhost:3001
- Backend: http://localhost:5000
- Tests open a real browser and navigate the app
- API tests send HTTP requests directly to the backend

### Commands

```bash
# From project root (react-online-store folder)

# 1. Start the app first
docker compose up -d

# 2. Run integration tests
npm run test:e2e
```

### First-Time Setup

Playwright downloads a browser (Chromium) the first time you run tests:

```bash
npx playwright install chromium
```

---

## 5. Admin Login Fix

### Problem

- Admin login returned **401 Unauthorized**
- Error: "Invalid username"

### Cause

- No admin user existed in the database
- `CreateAdmin.js` script was run from the wrong folder or with wrong command

### Solution

Create the admin user **inside the backend Docker container**:

```bash
docker compose exec back-end node scripts/CreateAdmin.js
```

### Default Admin Credentials

- **Username:** `preethi`
- **Password:** `admin123`
- **Role:** `admin`

### Wrong Command (Do Not Use)

```bash
# WRONG – extra "node" and wrong folder
node node scripts/CreateAdmin.js   # from frond-end folder
```

### Correct Command

```bash
# From project root
docker compose exec back-end node scripts/CreateAdmin.js
```

---

## 6. Product Image Size Fix

### Problem

- Product images had different sizes on the product page
- Some images looked smaller (e.g. Samsung phone)

### Solution

Updated `frond-end/src/Components/ProductCard.css`:

- **`.image-wrap`** – fixed square container (`aspect-ratio: 1/1`)
- **`.product-image-link`** – fills the container (`position: absolute; inset: 0`)
- **`.product-image`** – forced to fill with `object-fit: cover` and `position: absolute`

Now all product images use the same square area and are cropped consistently.

---

## 7. All Commands You Need

### Project Setup

```bash
# Install backend dependencies
cd back-end
npm install

# Install frontend dependencies
cd frond-end
npm install

# Install root dependencies (for E2E)
cd ..
npm install
```

### Running the App

```bash
# Start everything with Docker
docker compose up -d

# Stop everything
docker compose down
```

### Running Tests

```bash
# Backend tests (from project root)
cd back-end
npm test

# Frontend tests (from project root)
cd frond-end
npm test

# Full integration tests (from project root, app must be running)
npm run test:e2e
```

### Create Admin User

```bash
docker compose exec back-end node scripts/CreateAdmin.js
```

### Useful Docker Commands

```bash
# See running containers
docker compose ps

# View backend logs
docker compose logs back-end

# View frontend logs
docker compose logs frond-end

# Restart a service
docker compose restart back-end
```

---

## 8. Troubleshooting

### Backend tests fail: "Exceeded timeout of 15000 ms for a hook"

- **Cause:** MongoDB is not running or not reachable. Tests cannot connect to the database.
- **Fix:**
  1. Start MongoDB: `docker compose up -d mongo` (wait ~10 seconds for it to be ready)
  2. Or use local MongoDB on port 27017
  3. Run tests again: `cd back-end; npm test`

### Backend tests fail: "getaddrinfo ENOTFOUND mongo"

- **Cause:** MongoDB is not running or not reachable
- **Fix:** Run `docker compose up -d mongo` and wait for it to be healthy

### Backend tests fail: connection refused to MongoDB

- **Cause:** MongoDB port might be different
- **Fix:** Set `TEST_MONGO_URI=mongodb://127.0.0.1:27017/onlinestore_test` (or your port) before running tests

### Admin login returns 401

- **Cause:** No admin user in the database
- **Fix:** Run `docker compose exec back-end node scripts/CreateAdmin.js` and use `preethi` / `admin123`

### Frontend tests fail: "__vite_ssr_exportName__ is not defined"

- **Cause:** Vitest + Vite 8 compatibility issue
- **Fix:** Vite was downgraded to 5 in this project. If you upgrade Vite, you may need to update Vitest.

### Integration tests fail: "page.goto: net::ERR_CONNECTION_REFUSED"

- **Cause:** App is not running
- **Fix:** Run `docker compose up -d` and wait for services to start, then run `npm run test:e2e`

### PowerShell: "The token '&&' is not valid"

- **Cause:** PowerShell uses `;` instead of `&&` for chaining commands
- **Fix:** Use `;` e.g. `cd back-end; npm test`

---

## Quick Reference – File Structure

```
react-online-store/
├── back-end/
│   ├── app.js              ← Express app (used by server + tests)
│   ├── server.js           ← Starts server
│   ├── jest.config.js      ← Jest config
│   ├── tests/
│   │   ├── jest.setup.js   ← MongoDB connection for tests
│   │   ├── product.test.js
│   │   ├── admin.test.js
│   │   └── api.test.js
│   └── package.json
├── frond-end/
│   ├── src/
│   │   ├── test/
│   │   │   └── setup.js    ← Vitest setup
│   │   ├── utils/
│   │   │   ├── config.test.js
│   │   │   └── productImage.test.js
│   │   └── Components/
│   │       └── ProductCard.test.jsx
│   ├── vite.config.js      ← Includes test config
│   └── package.json
├── e2e/
│   ├── app.spec.js         ← Browser E2E tests
│   ├── api.spec.js         ← API integration tests
│   └── README.md
├── playwright.config.js    ← Playwright config
├── package.json            ← Root scripts
└── CHANGES_AND_GUIDE.md    ← This file
```

---

*Document created for freshers. Keep this file updated when you make more changes.*
