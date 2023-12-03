import { parse } from "url"

const urlString = "https://ww.ejemplo.com:8080/ruta?parametro1=valor1&parametro2=valor2"

const parseUrl = parse(urlString, true)

console.log(parseUrl.protocol);
console.log(parseUrl.hostname);
console.log(parseUrl.pathname);
console.log(parseUrl.query);