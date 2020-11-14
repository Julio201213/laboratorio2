let creditos;
let matricula
let descuento;
let valortotal;
let descuentoestudiante;

document.getElementById('costo').style.display="none"

function Calcular(){
     
    document.getElementById("registro").style.display="none" 
    document.getElementById("costo").style.display="block"

creditos=Number(document.getElementById('creditos').value);
matricula=(900000)
descuentoestudiante=matricula*0.10

document.getElementById('valormatricula').value= matricula;
document.getElementById("descuento").value= descontar(creditos);
document.getElementById('estudiante').value= descuentoestudiante;
document.getElementById('total').value= matricula-descuentoestudiante-descuento;
valortotal=matricula-descuentoestudiante-descuento}



function descontar(creditos){
    if (creditos <6){
        descuento= matricula*0.50
    }
else if(creditos >5 && creditos<10){
descuento= matricula*0.25
}
else{
    descuento=0;
}
return descuento}
function regresar(){
    document.getElementById("costo").style.display="none" 
    document.getElementById("registro").style.display="block"}