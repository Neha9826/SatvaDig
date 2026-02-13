import { removeBackground } from "@imgly/background-removal-node";
import fs from "fs";

async function processImage() {
    const inputPath = "./public/images/Satva_Dig_Logo.jpg";
    const outputPath = "./public/images/logo.png";

    console.log("Removing background... (this downloads the AI model first)");
    const blob = await removeBackground(inputPath);
    const buffer = Buffer.from(await blob.arrayBuffer());

    fs.writeFileSync(outputPath, buffer);
    console.log("Done! Saved to " + outputPath);
}

processImage();