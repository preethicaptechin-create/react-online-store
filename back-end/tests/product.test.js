const request = require("supertest");
const app = require("../app");

describe("Products API", () => {
  describe("GET /api/products", () => {
    it("should return products list with success", async () => {
      const res = await request(app).get("/api/products");

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
    });
  });

  describe("GET /api/products/:id", () => {
    it("should return 400 for invalid product ID", async () => {
      const res = await request(app).get("/api/products/invalid-id");

      expect(res.statusCode).toBe(400);
      expect(res.body.success).toBe(false);
    });
  });
});
