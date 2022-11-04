console.log('Hola mundo')

//variables

// let = permitimos que la variable gurde la info 
// puedo guardar una variable y puedo reasignarle/cambiarle el valor
// no se puede acceder desde afuera desde el scope, dentro/afuera puede tener dif. valores 
let nombVariable =  'soyVariable' //al tener ' ' es string

console.log(nombVariable)
nombVariable = 'soyVariableCambiada'
console.log(nombVariable)

const nombConst = 7 // no le puedo reasignar el valor
// var se puede acceder desde afuera desde el scope 
var nombVar = true 

// tipado debil, a una variable let le puedo reasignar un valor de un tipo de dato diferente al que le asigne inicialmente 
// tipado dinamico: detecta el tipo de dato dinamicamente
//let nombVariable: string  =  'Vitu' -> tipado estatico (typescript)

//Tipos primitivos(no mutables) de datos: numero, "string", bool, undefined, null, BigInt , Symbol
// no cambia el valor original, si lo puedo copiar

//Tipos mutables: array,objetos,funciones
// puedo definir metodos que si modifiquen el valor original

//objeto 

const persona = {  
    nombre: 'Vitu',
    edad: '22',
    estudiante: true,
    colores: ['0bordo','1dorado','2beige','3verde']
}

// acceder a las propiedades del objeto: con "." -> nombreObjeto.keyPropiedad, devuelve valuePropiedad
console.log(persona.nombre) //devuelve 'Vitu'
console.log(persona.colores[1]) // devuelve 'dorado'

// como acceder a una propiedad que es dinamica (con el nombre de la propiedad guardada en una constante)
let prop2 = 'edad'
console.log(persona[prop2]) // seria persona['edad']  y devuelve 22

// distinto! 
//console.log(persona['Vitu']) // intenta acceder a la propiedad que tiene el valor 'Vitu' (que seria 'nombre'), pero da undefined

//Funciones 

// () => { } , esta es la funcion, pero la asigno a una variable 
// variable nombVariable = ( ) => { }

// variable nombVariable = (parametros) => {
//      cuerpo de la funcion
//}


//a una variable le asigno una funcion 
// como expresion 
const sumar = (n1,n2) => {
    console.log(n1)
    console.log(n2)
    return n1 + n2
}

console.log(sumar(5,2)) // los argumentos podrian ser otras variables
//const rta = sumar(5,2) , devuelve n1, n2

// las funciones son como una variable más, se puede utilizar tanto como para pasarlo como parámetro,
// se puede guardar en una variable,  se puede devolver de una función, puede devolver otra función
// son como un objeto,


// como declaracion 
function restar(n1,n2){
    return n1-n2
}