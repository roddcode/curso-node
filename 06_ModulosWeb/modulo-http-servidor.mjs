import { createServer } from "http";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
  res.end("Señores y señoras ha comenzado la decima ronda de este ragnarok. OKITAAAAA VS ANUBIIIIS")
})

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running on http://127.0.0.1:3000");
})