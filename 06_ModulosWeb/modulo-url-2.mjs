import { format } from "url"

const urlObject = {
  protocol: "hhtps",
  hostname: "www.ejemplo.com",
  pathname: "/ruta",
  query: { parametro1: "valor1", parametro2: "valor2 "},
}

const urlString = format(urlObject)

console.log("URL completa: ", urlString);