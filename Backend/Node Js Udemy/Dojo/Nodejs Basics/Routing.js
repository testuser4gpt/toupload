// There are two types of url
// Resource based Url and File base Url

// File based url mentions the file and it's path on the url
// https://www.urconsole/home.html

// Resource based url is handled by request handler such as a view function
// https://www.urconsole/home

// query string : after the ? we put the key value pair we want to send
// https://www.urconsole/product?name=switch&id=4563

const { createServer } = require("http");
const { readFileSync, readFile } = require("fs");
const { parse } = require("url");
const replaceHtml = require("./Modules/replaceHtml");

const port = 8000;
const host = "127.0.0.1";

const html = readFileSync("./templates/index2.html", "utf-8");
const products = JSON.parse(readFileSync("./data/products.json", "utf-8"));
// JSON.parse converts the json object into a JavaScript Object

const server = createServer((req, res) => {
  let x = parse(req.url, true);
  console.log(x); // this will return the whole header of url, so let's destruct it
  let { query, pathname: path } = parse(req.url, true);
  //let path = req.url; // .url stores the path we enter on search bar

  if (path === "/" || path.toLocaleLowerCase() === "/home") {
    res.writeHead(200, {
      "Content-type": "Text/html",
      "Custom-header": "nullvalue",
    });

    res.end(html.replace("{{%Content%}}", "Welcome To homepage"));
  } else if (path.toLocaleLowerCase() === "/products") {
    res.writeHead(200, {
      "Content-type": "app-json", // I dont understand the issue here
    });
    if (!query.id) {
      res.end(html.replace("{{%Content%}}", "Products Page"));
      //console.log(products);
    } else {
      res.end(
        `This is the product with id ${query.id} and name = ${query.name}`
      );
    }
    //res.end(JSON.stringify(products));
  } else {
    res.writeHead(404);
    res.end(html.replace("{{%Content%}}", "Page Not Found !"));
  }

  // res.end(path)
});

server.listen(port, host, () => {
  console.log("Server has started");
});
