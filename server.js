const express = require("express")
const server = express();

server.listen(1234, () => console.log(`server running on port 1234`))

const colors = [
    {
        id: 1,
        name: "white", 
        rgb: "#fff" 
    }, 
    {
        id: 2,
        name: "red", 
        rgb: "#f00" 
    }, 
    {
        id: 3,
        name: "blue", 
        rgb: "#00f" 
    }, 
]
//GET       /products                 201
server.get("/colors", (req, res) =>{
    res.status(201).json(colors)
})

//POST      /products                 201
server.post("/colors", (req, res) => {
    res.status(201).json({
        id: 4,
        name: "green", 
        rgb: "#0f0" 
    });
});


//GET       /products/:productsID     200
server.get("/colors/:colorId", (req, res) =>{
    console.log({raw:req.params.colorId, casted:+req.params.colorId})
    const color = colors.find(color => color.id === +req.params.colorId);
    res.status(200).json(color)
})
//PUT       /products/:productsID     204

server.put("/colors/colorId", (req, res) => {   //not working
    const newColor = colors.find(color => color.id === +req.params.colorId);
    newColor[name] = "black"
    res.status(200).json(newColor)
})
//DELETE    /products/productsID      204

server.delete("/colors/colorId", (req, res) => {
    const removeItem = colors.filter(color => color.id === +req.params.colorId);
    res.status(200).json(removeItem)
});