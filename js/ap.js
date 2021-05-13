//Funcion para validar si el ususario digitó bien la opcion

function siNo(palabra) {
    palabra = prompt(" escriba S para si o N para no");
    palabra = palabra.toUpperCase();
    var condicion = true;

    while (condicion == true) {
   
    condicion = false;

    
        if (palabra == "S") {
        return palabra
                
        break
    }
        else if(palabra=="N"){
            
            return palabra
        
        break
    }
        else {
        console.log("Error, debes marcar S para dar respuesta Si y N para dar respuesta No")
        condicion=true
        
    }

    palabra = prompt("Escribe S para si o N para no?");
    palabra = palabra.toUpperCase();
    }
    return palabra
}

//para cargar la funcion juego, caragará la funcion juego al puldar cualquier tecla
console.log("Pulsa cualquier tecla para comenzar")

//funcion donde contiene el juego
function juego() {
    
    console.log("¡Hola!");
    console.log("¿Quieres jugar a las adivinanzas mientras aprendes?")
    
    
    var comienzo=siNo(comienzo)
    console.log(comienzo)
    
    if (comienzo == "S") {//para comenzar el juego al usuario que acepto
        console.log("¿Cuál es tu nombre?")//pregunta el nombre para personalizar el juego
        nombre = prompt("Tú nombre")
        nombre=nombre.toUpperCase()
        console.log("Estas preparada",nombre, ". Escoge uno de los animales que se muestran en pantalla pero no me lo digas. Yo te haré unas preguntas para tratar de adivinar cual es.")
        console.log("Lee bien las descripciones de cada uno.")
        console.log(nombre,"¿El animal que escogiste vive unicamente en el agua?")
        var pregunta1 = siNo(pregunta1)
        console.log(pregunta1)
        if (pregunta1 == "S") {
            console.log(nombre, "¿El animal que escogite es mamifero?")
            var pregunta2 = siNo(pregunta2)
            console.log(pregunta2)
            if (pregunta2 == "S") {
                console.log(nombre,"Tú seleccionante la BALLENA")
            }
            else {
                console.log(nombre,"Tú solesccionates el PEZ PAYASO")
            }
        }
        else {
            console.log(nombre, "¿el animal que seleccionaste es reptil?")
            var pregunta3 = siNo(pregunta3)
            console.log(pregunta3)
            if (pregunta3 == "S"){
                console.log(nombre,"Tu seleccionaste la SERPIENTE")
            }
            else {
                console.log(nombre, "¿el animal que seleccionaste pone huevos?")
                var pregunta4 = siNo(pregunta4)
                console.log(pregunta4)
                if (pregunta4 == "S") {
                    console.log(nombre,"Tú seleccionaste el ORNITORRINCO")
                }
                else {
                    console.log(nombre,"Tú seleccionaste la JIRAFA")
                }
                
            }
            
        }
    
    }
    else {//la opcion para el usuario que dijo no queria jugar
        console.log("Ok,no te preocupes hasta otra oportunidad");
    }
}





