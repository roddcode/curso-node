import express from "express"
 import {resolve} from "path"
const app = express()

app.get("/", (req, res) => {
  res.set({ "content-type": "text/html; charset=utf-8"})
  res.end("<h1>Hola mundo desde Express con end</h1>")
  //res.send("<h1>Hola mundo desde Express con send</h1>")
})

app.get("/json", (req, res) => {
  res.json({
    name: "Alejandro",
    age: 39,
    youtube: "@roddcode"
  })
})

app.get("/archivo", (req, res) => {
  res.sendFile(resolve("./07_ExpressBasicos/index.html"))
})
// Asi se usan las plantillas con node, con el metodo render
app.get("/plantilla", (req, res) => {
  res.render("plantilla")
})

app.get("/jonmircha", (req, res) => {
  res.redirect(301, "https://jonmircha.com")
})

app.get("/3", (req, res) => {

})

app.listen(3000, () => {
  console.log("Iniciando Express desde http://localhost:3000");
})