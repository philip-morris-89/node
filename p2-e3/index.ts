import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.post("/planets", async (request, response) => {
  const { name, diameter, moons } = request.body;
  const planets = await prisma.planet.create({
    data: {
      name: name,
      diameter: diameter,
      moons: moons,
    },
  });
  response.json(planets);
});

app.get("/planets", async (request, response) => {
  const planets = await prisma.planet.findMany();
  response.json(planets);
});

app.get("/planets/:id", async (request, response) => {
  const planetId = request.params.id;
  const planet = await prisma.planet.findUnique({
    where: {
      id: Number(planetId),
    },
  });
  response.json(planet);
});

app.put("/planets/:id", async (request, response) => {
  const planetId = request.params.id;
  const { name, diameter, moons } = request.body;
  const planet = await prisma.planet.update({
    where: {
      id: Number(planetId),
    },
    data: {
      name: name,
      diameter: diameter,
      moons: moons,
    },
  });
  response.json(planet);
});

app.delete("/planets/:id", async (request, response) => {
  const planetId = request.params.id;
  const planet = await prisma.planet.delete({
    where: {
      id: Number(planetId),
    },
  });
  response.json(planet);
});

app.listen(3000, () => {
  console.log("Running on port", 3000);
});
