function saludo(parametro){
    return console.log('hola '+ parametro)
}
function despedida(parametro){
    return console.log('bye ' + parametro)
}

function crearsaludo(usuario, cb){
    return cb(usuario)
}
crearsaludo('carl', despedida)



var array = ['ale','pero','alex','pil','nene','andar'] 
var newarray = []
for (var i = 0; i < array.length; i++) {
   // cb(array[i])
    newarray[i]=array[i]
}
console.log(newarray)

