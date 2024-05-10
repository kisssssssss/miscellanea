/**
 * @file 压缩 json 文件
 * */

const fs = require("fs");
const path = require("path");

function zipDir(parentPath) {
  const dir = fs.readdirSync(parentPath);

  dir.forEach((item) => {
    let childPath = path.join(parentPath, item);

    let childState = fs.statSync(childPath);

    if (childState.isDirectory()) {
      zip(childPath);
    } else if (item.includes(".json")) {
      try {
        let beforeSize = (childState.size / 1024).toFixed(2);

        let jsonFile = fs.readFileSync(childPath, { encoding: "utf-8" });

        fs.writeFileSync(childPath, jsonFile.replace(/(\r*\s)/g, ""), "utf-8");

        let afterSize = (fs.statSync(childPath).size / 1024).toFixed(2);

        console.log(
          `size: ${beforeSize}KB -> ${afterSize}KB \t`,
          "已压缩: ",
          childPath
        );
      } catch (error) {
        console.log(error);
      }
    }
  });
}

function zipFile(filePath) {
  let beforeState = fs.statSync(filePath);

  if (!beforeState.isFile()) return;

  let beforeSize = (beforeState.size / 1024).toFixed(2);

  let jsonFile = fs.readFileSync(filePath, { encoding: "utf-8" });
  fs.writeFileSync(filePath, jsonFile.replace(/(\r*\s)/g, ""), "utf-8");

  let afterState = fs.statSync(filePath);
  let afterSize = (afterState.size / 1024).toFixed(2);

  console.log(
    `size: ${beforeSize}KB -> ${afterSize}KB \t`,
    "已压缩: ",
    filePath
  );
}

module.exports = {
  zipDir,
  zipFile,
};
