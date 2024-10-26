const fs = require("fs-extra");
const path = require("path");
const { exec } = require("child_process");

const buildDirectory = path.join(__dirname, "../dist");
const sourceDirectory = path.join(__dirname, "../www");
const iosProjectPath = path.join(__dirname, "../ios");
const podFilePath = path.join(iosProjectPath, "Podfile");
const workspaceFilePath = path.join(
  iosProjectPath,
  "/IcarusMobileApp/IcarusMobileApp.xcodeproj/project.xcworkspace"
);

async function build() {
  console.log("Building the Icarus Mobile project...");

  try {
    // Remove the existing dist directory if it exists
    await fs.remove(buildDirectory);

    // Copy the entire www directory to the dist directory
    await fs.copy(sourceDirectory, buildDirectory);

    console.log("Build completed.");

    // Log the path for debugging
    console.log(`Checking for Podfile at: ${podFilePath}`);

    // Check if Podfile exists, and install CocoaPods if necessary
    if (await fs.pathExists(podFilePath)) {
      console.log("Podfile exists. Installing CocoaPods...");

      // Run the pod install command
      await new Promise((resolve, reject) => {
        exec(
          "pod install",
          { cwd: iosProjectPath },
          (error, stdout, stderr) => {
            if (error) {
              console.error(`Error during pod install: ${stderr}`);
              reject(error);
            } else {
              console.log(stdout);
              resolve();
            }
          }
        );
      });

      // Check if workspace file exists
      if (!(await fs.pathExists(workspaceFilePath))) {
        console.error(
          "Workspace file does not exist. Please ensure that your Podfile is set up correctly."
        );
        return;
      }
      console.log("Workspace file exists.");
    } else {
      console.warn("Podfile does not exist. Skipping CocoaPods installation.");
    }
  } catch (err) {
    console.error("Error during the build process:", err);
  }
}

build();
