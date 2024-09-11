
const http = require("http");
const fs = require("fs");

let homeContent = "";
let projectContent = "";
let registrationsContent = "";

fs.readFile("home.html", (err, home) => {
    if (err) {
      throw err;
    }
    homeContent = home;
  });

fs.readFile("project.html", (err, project) => {
    if (err) {
      throw err;
    }
    projectContent = project;
  });

fs.readFile("registrations.html", (err, registrations) => {
    if (err) {
      throw err;
    }
    registrationsContent = registrations;
  });

http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      case "/registrations":
        response.write(registrationsContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
