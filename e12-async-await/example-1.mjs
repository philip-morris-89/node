import * as fs from "node:fs/promises";

// Read and output files one after the other
async function outputFiles() {
  try {
    const file1Data = await fs.readFile("file-1.txt", { encoding: "utf-8" });
    console.log("file1Data:", file1Data);

    const file2Data = await fs.readFile("file-2.txt", { encoding: "utf-8" });
    console.log("file2Data:", file2Data);

    const file3Data = await fs.readFile("file-3.txt", { encoding: "utf-8" });
    console.log("file3Data:", file3Data);
  } catch (error) {
    console.error(error);
  }
}

outputFiles();
