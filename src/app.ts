import express from "express";
import "express-async-errors";

const app = express();

app.get("/planets", (request, response) => {
  //  response.send("Up and running!");
  response.json([{ name: "Jupiter" }, { name: "Mars" }]);
});

export default app;
