
//arreglo de objetos
let produtos=[
    {nombre:"Aguardiente tapa roja",tamano:"1/2 Botella", precio:200000, foto:"img/tapaRoja.png"},  
    {nombre:"Aguardiente tapa azul", tamano:"1/2 Botella",precio:220000, foto:"img/tapaAzul.png"},
    {nombre:"Tequila Don Julio", tamano:"1 Botella grande",precio:300000, foto:"img/donjulio.jpg"},
    {nombre:"Cerveza Aguila", tamano:"1 Botella",precio:8000, foto:"img/aguila.jpg"},
    {nombre:"Cerveza Pilsen", tamano:"1 Botella",precio:7000, foto:"img/pilsen.png"},
    {nombre:"Ron Medellin", tamano:"1/2 Botella",precio:220000, foto:"img/ronmedellin.jpg"},
    {nombre:"Ron Añejo 200 años Caldas", tamano:"1/2 Botella",precio:100000, foto:"img/roncaldas.jpg"},
    {nombre:"Agua", tamano:"1 Botella",precio:4000, foto:"img/agua.png"},
    {nombre:"Soda", tamano:"1 Botella",precio:6000, foto:"img/soda.jpg"},
    {nombre:"Gatorade", tamano:"1 Botella",precio:9000, foto:"img/gatorade.jpg"},
]

let productos2=[1,2,3,4,5,6]

//crear una referencia a la etiqueta fila
let fila=document.getElementById("fila")

//recorrer el arreglo y sacarle fotocopia a la información que hay por dentro
produtos.forEach(function(produto){
    
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    let imagen=document.createElement("img")
    imagen.classList.add ("card-img-top")
    imagen.classList.add ("h-50")
    imagen.classList.add("p-3")
    imagen.src=produto.foto

    //PADRES E HIJOS
    tarjeta.appendChild(imagen)

    columna.appendChild(tarjeta)

    fila.appendChild(columna)




})