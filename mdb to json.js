const fs = require("fs");
JsonFileData = [];
fs.readFile("Products.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  lineDataArr = data.split("\r\n");
  dataArr = [];
  lineDataArr.forEach((line) => {
    dataArr.push(line.split(","));
  });
  dataArr.pop(dataArr.length - 1);
  dataArr.forEach((item) => {
    JsonFileData = [
      ...JsonFileData,
      { id: item[0], name: item[1], count: item[2], date: item[3] },
    ];
  });

  try {
    const data = fs.writeFileSync(
      "Products.json",
      JSON.stringify(JsonFileData)
    );
    //file written successfully
  } catch (err) {
    console.error(err);
  }
});
