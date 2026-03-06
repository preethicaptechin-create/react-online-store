const request = require("supertest");
const bcrypt = require("bcryptjs");
const app = require("../app");
const Admin = require("../models/admin");

describe("Admin API", () => {
  beforeAll(async () => {
    const hashedPassword = await bcrypt.hash("admin123", 10);
    await Admin.create({
      username: "testadmin",
      password: hashedPassword,
      role: "admin",
    });
  });

  afterAll(async () => {
    await Admin.deleteMany({ username: "testadmin" });
  });

  describe("POST /api/admin/login", () => {
    it("should return 400 when username and password are missing", async () => {
      const res = await request(app).post("/api/admin/login").send({});

      expect(res.statusCode).toBe(400);
      expect(res.body.message).toContain("required");
    });

    it("should return 401 for invalid username", async () => {
      const res = await request(app)
        .post("/api/admin/login")
        .send({ username: "nonexistent", password: "admin123" });

      expect(res.statusCode).toBe(401);
      expect(res.body.message).toBe("Invalid username");
    });

    it("should return 401 for wrong password", async () => {
      const res = await request(app)
        .post("/api/admin/login")
        .send({ username: "testadmin", password: "wrongpassword" });

      expect(res.statusCode).toBe(401);
      expect(res.body.message).toBe("Invalid password");
    });

    it("should return token for valid credentials", async () => {
      const res = await request(app)
        .post("/api/admin/login")
        .send({ username: "testadmin", password: "admin123" });

      expect(res.statusCode).toBe(200);
      expect(res.body.token).toBeDefined();
      expect(typeof res.body.token).toBe("string");
    });
  });
});
