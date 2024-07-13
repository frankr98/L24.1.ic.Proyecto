/** análisis
 * De  un  operador  se  tienen  los  siguientes  datos:  cédula  de  identidad,  tipo  de  operador  (1=Supervisor, 
2=Diseñador,  3=Costurera,  4=Bordador,  5=Empacador),  horas  trabajadas  en  la  semana  y  el  precio  de  la  hora 
base.  Si  trabaja  más  de  40  horas  a  la  semana,  el  operador  tendrá  el  beneficio  de  bono  por  horas  extras.  La  hora 
extra se paga de acuerdo a lo siguiente: 1=Supervisor 32 %, 2=Diseñador 23 %,  3=Costurera 17 %,  4=Bordador 7%,  5=Empacador 5%.
Muestre  como  salida  del  programa:  cédula,  precio  de  la  hora  extra,  cantidad  de  horas  extras  trabajadas,  bono  de 
horas extras y total a cobrar.
 */

import Cl_IOperador from "./Cl_IOperador.js";
import Cl_Operador from "./Cl_Operador.js";

let Iope = new Cl_IOperador(),
    c = Iope.leerCedula(),
    t = Iope.leerTipo(),
    h = Iope.leerHoras(),
    p = Iope.leerPrecio();
let ope = new Cl_Operador(c, t, h, p),
salida = document.getElementById("salida")
salida.innerHTML = Iope.pantalla(ope.cedula, ope.horas, ope.horasExtra(), ope.bono(), ope.precioHora(), ope.total());