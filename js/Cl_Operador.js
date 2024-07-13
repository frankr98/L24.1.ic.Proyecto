export default class Cl_Operador {
    constructor(cedula, tipo, horas, precio) {
        this.cedula = cedula;
        this.tipo = tipo;
        this.horas = horas;
        this.precio = precio;
    }

    set cedula(c) {
        this._cedula = +c;
    }

    get cedula() {
        return this._cedula;
    }

    set tipo(t) {
        this._tipo = +t;
    }

    get tipo() {
        return this._tipo;
    }

    set horas(h) {
        this._horas = +h;
    }

    get horas() {
        return this._horas;
    }

    set precio(p) {
        this._precio = +p;
    }

    get precio() {
        return this._precio;
    }

    horasExtra() {
        if (this.horas > 40) 
            return this.horas - 40;
        else
            return 0;
    }
    bono() {
        switch (this.tipo) {
            case 1:
                return this.horasExtra() * this.precio * 0.32;
            case 2:
                return this.horasExtra() * this.precio * 0.23;
            case 3:
                return this.horasExtra() * this.precio * 0.17;
            case 4:
                return this.horasExtra() * this.precio * 0.07;
            case 5:
                return this.horasExtra() * this.precio * 0.05;
        }
    }

    horasTrabajo(){
        return this.horas * this.precio;}

    precioHora(){
            return this.precio * this.bono() / this.horasExtra();
        }

    total(){
        return this.horasTrabajo() + this.bono();

    }
}