import Kartya from "./Kartya.js"

export default class Kartyak {
    #lista = [];
    #TAROLO;
    constructor(lista,TAROLO){
        this.#lista = lista;
        this.#TAROLO = TAROLO;
        this.#TAROLO.empty();
        this.kepKiIr();
    }

    kepKiIr(){
        this.#lista.forEach(element => {
            console.log(element)
            new Kartya(element, this.#TAROLO);
        });
    }
}