import {get} from "https";

const urlSite = {
  hostname: "jonmircha.com",
  port: 443,
  path: "/cursos"
};

get(urlSite, (res) => {
 console.log(`El sitio ${urlSite.hostname} ha respondido. Codigo: ${res.statusCode}, Mensaje: ${res.statusMessage}.`);
}).on("error", (err) => {
  console.error("El sitio no ha respondido");
})