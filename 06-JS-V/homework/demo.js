class supermercado {
  constructor(nombre, contenido,code){
      this.nombre = nombre
      this.contenido = contenido
      this.code = code
      this.saludo = function(){return 'hola '+ this.nombre + ' mi codigo es '+ this.code}
  }
  existencia(){
    return console.log('producto '+ this.nombre + ' no hay existencia' )
  }
  retirada(){
    return console.log('producto '+ this.code + ' fue retirado' )
  }
}

let producto1 = new supermercado('jabon accion', '300g', 123)
let producto2= new supermercado( 'leche', '1Lt', 214)

console.log(producto1.saludo())
console.log(producto2.saludo())

producto1.existencia()