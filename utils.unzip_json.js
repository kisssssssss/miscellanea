/**
 * @file 格式化 json 文件/目录
 * */

function unzipDir(parentPath) {
  const dir = fs.readdirSync(parentPath);

  dir.forEach((item) => {
    let childPath = path.join(parentPath, item);

    let childState = fs.statSync(childPath);

    if (childState.isDirectory()) {
      if (childPath.includes("live2d")) {
        unzip(childPath);
      }
    } else if (item.includes(".json")) {
      try {
        let jsonFile = fs.readFileSync(childPath, { encoding: "utf-8" });

        // Parse the JSON string to an object
        let jsonObject = JSON.parse(jsonFile);

        // Stringify the JSON object with indentation
        let formattedJson = JSON.stringify(jsonObject, null, 2);

        // Write the formatted JSON back to the file
        fs.writeFileSync(childPath, formattedJson, "utf-8");

        console.log("已重新格式化: ", childPath);
      } catch (error) {
        console.log(error);
      }
    }
  });
}