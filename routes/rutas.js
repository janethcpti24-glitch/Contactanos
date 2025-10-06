import { Router } from "express"
const router = Router()

var artistas = ["Taylor Swift", "Doja Cat", "Bad Bunny", "Melanie Martinez"]

router.get("/", function(req, res){
    res.render("home", {artistas})
})

router.get("/info", function(req, res){
    res.render("info", {dato: null})
})

router.get("/info/:dato", function(req, res){
    var dato = req.params.dato
    res.render("info", {dato})
})

router.get("/contacto", function(req, res){
    res.render("contactanos")
})

router.post("/contacto", function(req, res){
    var nombre = req.body.nombre
    var edad = req.body.edad
    console.log("Nombre:" + nombre + " Edad:" + edad)
    res.render("respuesta", {nombre, edad})
})


export default router
