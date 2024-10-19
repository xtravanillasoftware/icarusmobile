const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

// Function to build the project
function buildProject() {
  console.log("Building the Icarus Mobile project...");

  // Example: Copying files to the `www` directory
  const sourceDir = path.join(__dirname, "../www");
  const outputDir = path.join(__dirname, "../dist");

  // Ensure the output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  // This is where you would add your build logic (e.g., bundling JS, etc.)
  // For now, we'll just copy the content
  fs.readdir(sourceDir, (err, files) => {
    if (err) {
      console.error("Error reading source directory:", err);
      return;
    }
    files.forEach((file) => {
      const sourceFile = path.join(sourceDir, file);
      const destFile = path.join(outputDir, file);
      fs.copyFileSync(sourceFile, destFile);
      console.log(`Copied ${file} to dist/`);
    });
  });

  console.log("Build completed.");
}

// Main execution
buildProject();
