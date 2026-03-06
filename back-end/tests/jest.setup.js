const mongoose = require("mongoose");

// Use real MongoDB. Docker: 27018, local: 27017. Set TEST_MONGO_URI to override.
const URIS_TO_TRY = process.env.TEST_MONGO_URI
  ? [process.env.TEST_MONGO_URI]
  : [
      "mongodb://127.0.0.1:27018/onlinestore_test", // Docker
      "mongodb://127.0.0.1:27017/onlinestore_test", // Local MongoDB
    ];

beforeAll(async () => {
  process.env.JWT_SECRET = process.env.JWT_SECRET || "test-jwt-secret";
  let lastError;
  for (const uri of URIS_TO_TRY) {
    try {
      await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
      return;
    } catch (err) {
      lastError = err;
      await mongoose.disconnect().catch(() => {});
    }
  }
  throw new Error(
    `MongoDB connection failed. Start MongoDB first:\n` +
      `  Docker: docker compose up -d mongo\n` +
      `  Local:  ensure MongoDB is running on 27017\n` +
      `  Error:  ${lastError?.message}`
  );
}, 30000);

afterAll(async () => {
  await mongoose.disconnect();
});
