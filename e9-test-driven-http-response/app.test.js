const supertest = require("supertest");

const createApp = require("./app.js");

const app = createApp();

const request = supertest(app);

const htmlResponseBody = "Welcome to the World Wide Web!";

test("GET /", async () => {
  const response = await request
    .get("/")
    .expect(200)
    .expect("Content-Type", "text/html");

  expect(
    response.text.includes(
      `<html><body><h1>${htmlResponseBody}</h1></body></html>`
    )
  );
});
