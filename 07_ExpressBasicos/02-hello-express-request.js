import express from "express";

const app = express()

// Las peticiones de node tienen param, que son parametros que aparecen en la ruta y query que tambien aparecen en la ruta. Usa uno u otro dependiendo de lo que haga tu pagina, el nombre es descriptivo asi que no mames es obvio.

app.get("/", (req, res) => {
  res.end("<h1>Hola mundo desde Express</h1>")
})

app.get("/user/:id-:name-:age", (req, res) => {
  res.set({ "Content-Type": "text/html; charset=utf-8"})
  res.end(`
    <h1>${req.params.name}, bienvenido a Express.js. Tu id es ${req.params.id} y tienes ${req.params.age} años.
  `)
})

app.get("/search", (req, res) => {
  res.set({ "Content-Type": "text/html; charset=utf-8"})
  res.end(`
  <h1>
    ${req.query.name}, bienvenidos a Express.js. Tu id es ${req.query.id} y tu edad es ${req.query.age} años.
  </h1>
  `)

})

app.listen(3000, () => {
  console.log("Iniciando Express desde http://localhost:3000");
})