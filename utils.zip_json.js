/**
 * @file 压缩 json 文件/目录
 * */

const fs = require("fs");
const path = require("path");

/**
 * @param {String} parentPath - 目录
 * @param {Boolean} recursion - 是否递归
 * */
function zipDir(parentPath, recursion) {
  const dir = fs.readdirSync(parentPath);

  dir.forEach((item) => {
    let childPath = path.join(parentPath, item);

    let childState = fs.statSync(childPath);

    if (childState.isDirectory() && recursion) {
      zip(childPath, recursion);
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

/**
 * @param {String} filePath - 文件路径
 * */
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
