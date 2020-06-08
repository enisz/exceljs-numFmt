console.clear();

const exceljs = require("exceljs");
const fs = require("fs");

const data = [
    "00:20",
    "01:10",
    "00:45"
]

const workbook = new exceljs.Workbook();
const worksheet = workbook.addWorksheet("test worksheet");
worksheet.getColumn(1).values = data;
worksheet.getColumn(1).numFmt = "h:mm";

workbook.xlsx
    .writeFile("output.xlsx")
    .then(
        () => {
            console.log("workbook saved!");
        }
    )
    .catch(
        (error) => {
            console.log("something went wrong!");
            console.log(error.message);
        }
    );