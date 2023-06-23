//VARIABLES
const selector = document.querySelector("#numeroSeleccionado");
const boxes = document.querySelectorAll('.box');
const enviarMaterias = document.querySelector('#enviarMaterias')
const inputsMaterias = document.querySelectorAll('#boxes .box .materias')
const inputsCalificacion = document.querySelectorAll('#boxes .box .calificacion')
const materias = {};
var total = 0;

//Logica para abrir los inputs
selector.addEventListener('change',e=>{
    e.preventDefault();
    let selectNumber = parseInt(selector.value);
    boxes.forEach((box,index)=>{
        if(index < selectNumber){box.style.display = 'block';}
        else{box.style.display = "none";}
    });
});
//Recibimos el evento de que envio las materias y su calificacion
enviarMaterias.addEventListener('click', e=>{
    e.preventDefault();
    
    inputsMaterias.forEach((materia,index)=>{
        materias[materia.value] = inputsCalificacion[index].value;
    })

    const respuestaMaterias = document.querySelector('#respuestaMaterias');
    respuestaMaterias.innerHTML = '';
    for (materia in materias) {
        respuestaMaterias.innerHTML += `${materia} : ${materias[materia]} <br/>`;
    }
    const respuestaPromedio = document.querySelector('#respuestaPromedio');
    respuestaPromedio.innerHTML='';
    respuestaPromedio.innerHTML += `<br/>Promedio: ${calcularPromedio()}`;
    console.log(calcularPromedio())
});

const calcularPromedio = ()=>{
    for (const key in materias) {
        const valor = parseInt(materias[key]);
        if (!isNaN(valor)) {
            total += valor;
        }
    }
    console.log(total)
    console.log(Object.keys(materias).length-1);
    console.log(materias)
    console.log(total/(Object.keys(materias).length-1))
    return total/(Object.keys(materias).length-1);
      
}


