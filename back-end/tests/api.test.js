const request = require("supertest");
const app = require("../app");

describe("API general", () => {
  it("should return 404 for unknown route", async () => {
    const res = await request(app).get("/api/unknown-route");

    expect(res.statusCode).toBe(404);
    expect(res.body.success).toBe(false);
    expect(res.body.message).toBe("Route not found");
  });
});
