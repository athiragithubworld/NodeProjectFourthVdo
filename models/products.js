const fs = require("fs");
const path = require("path");
const { fileURLToPath } = require("url");

// Define the file path for product data
// const filePath = path.join(__dirname, "..", "", "product.txt");

 // Define the file path for product data
  const p = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "products.json"
  );

const getProductFromFile = cb =>{
 
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    }else{
    cb(JSON.parse(fileContent));

    }
  });
}



module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {

    getProductFromFile(products=>{
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    })
    // products.push(this);

    // ----- using text file ----------
    //  const message = `${this.title}\n`;

    //  // Append the product title to the file
    //  fs.appendFileSync("product.txt", message, "utf8", (err) => {
    //    if (err) {
    //      console.error("Error writing product to file:", err);
    //    }
    //  });


    // --- using json file ------
   
    // fs.readFile(p,(err,fileContent)=>{
    //   let products = [];
    //   if(!err){
    //     products = JSON.parse(fileContent);
    //   }
    //   products.push(this);
    //   fs.writeFile(p,JSON.stringify(products),(err)=>{
    //     console.log(err)
    //   })
    // })
  }

  // text file 
  // static fetchAll(cb) {
  //   // return products;
  //   fs.readFile("product.txt", "utf8", (err, fileContent) => {
  //     if (err) {
  //       cb([]); // If error (like file not found), return an empty array
  //     } else {
  //       const products = fileContent
  //         .split("\n") // Split the file content by new lines
  //         .filter((product) => product.trim() !== ""); // Filter out empty lines
  //       cb(products); // Pass the products to the callback
  //     }
  //   });
  // }

  // json file 
  static fetchAll(cb) {
   getProductFromFile(cb)
   
  }
};
