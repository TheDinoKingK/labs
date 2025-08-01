import request from "supertest";
import { app } from "../../app";

it("returns a 201 on successful signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);
});

it("returns a 400 with an invalid email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "gibberishIdontlikeemails",
      password: "password",
    })
    .expect(400);
});

it("returns a 400 with an invalid pasword", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test3@tested.com",
      password: "1",
    })
    .expect(400);
});

it("returns a 400 with missing email & password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "tersted@magical.com",
    })
    .expect(400);
  return request(app)
    .post("/api/users/signup")
    .send({ password: "twentyforuty" })
    .expect(400);
});

it("disallows duplicate emails", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(400);
});
it("sets a cookie after successful signup", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});
