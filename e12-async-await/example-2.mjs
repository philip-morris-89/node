import * as fs from "node:fs/promises";

// Read and output files in parallel
async function outputFilesTogether() {
  try {
    const data = await Promise.all([
      fs.readFile("file-1.txt", { encoding: "utf-8" }),
      fs.readFile("file-2.txt", { encoding: "utf-8" }),
      fs.readFile("file-3.txt", { encoding: "utf-8" }),
    ]);

    console.log("Data:", data);
  } catch (error) {
    console.error(error);
  }
}

outputFilesTogether();
