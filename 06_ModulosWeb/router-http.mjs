import { createServer } from "http";

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
    res.end("<h1>Como dirian los cholos la jouss</h1>")
  } else if (req.url ==="/hola") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"})
    res.end("<h1>Home de la buena casa</h1>")
  } else if (req.url ==="/sexo") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"})
    res.end("<h1>La mejor ruta sin lugar a dudas</h1>")
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8"})
    res.end("<h1>Not Found cara anchoa</h1>")
  }
})

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running on http://127.0.0.1:3000");
})