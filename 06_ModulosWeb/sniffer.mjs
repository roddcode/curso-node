import { createServer } from "http";
import { get } from "https";
import fs from "fs";

const hostname = "localhost";
const port = 3000;
const options = {
  host: "jonmircha.com",
  port: 443,
  path: "/cursos",
};

let htmlCode = "";

const httpClient = (res) => {
  console.log(`El sitio ${options.host} ha respondido. Codigo: ${res.statusCode}. Mensaje: ${res.statusMessage}`);

  res.on("data", (data) => {
    htmlCode += data;
  });

  res.on("end", () => {

    fs.writeFileSync(`${path}.html`, htmlCode, "utf-8");
    console.log("El HTML ha sido guardado en un archivo html");
  });
};

const httpError = (err) => {
  console.log(`El sitio ${options.host} no ha respondido. Codigo: ${err.code}.`);
};

const webServer = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("HTML guardado en cursos.html");
};

get(options, httpClient).on("error", httpError);

createServer(webServer).listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});
