export default class Cl_IOperador{
    leerCedula(){
        return prompt("Cedula");
    }
    leerTipo(){
        return prompt("Tipo");
    }
    leerHoras(){
        return prompt("Horas de Trabajo en la semana");
    }
    leerPrecio(){
        return prompt("Precio de las horas Trabajadas");
    }

    pantalla(c,h,he,b,ph,t){
        return`
        <h1>------OPERADOR----</h1>
        <br> Cedula: ${c}
        <br> Horas de Trabajo en la semana: ${h}
        <br> Horas extras: ${he}
        <br> Bono por horas extras: ${b} $
        <br> Precio por hora extra: ${ph} $
        <h2> Total de Pago: ${t} $ </h2> 
        `
    }

}