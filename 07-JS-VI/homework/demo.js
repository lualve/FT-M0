function suma(x , y) {
    return r = x+y
}

function multi(x , y) {
    return r = x*y
}

function crearOperacion(x,y,cb){
    
    return  cb(x,y)
}

var array = ['mat', 'luis','ale', 'bon', 'you', 'carl']
var cont = 0
var newarray[cont] = array.map(function(elemento){
    if(elemento[0]==='a'){
        cont++
        return elemento;
        
    }
  })
  
  console.log(newarray)