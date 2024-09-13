export default class Kartya {
    #objektum = {};
    #szuloElem;

    constructor(obj,szuloElem){
        this.#objektum = obj;
        this.#szuloElem = szuloElem;
        this.kepKiIr();
        this.gombElem = $(".kivalaszt:last");
        console.log(this.gombElem);
        this.esemenyKezelo();
    }

    kepKiIr(){
        let txt = `
        <div class="card col-md m-2 p-3">
          <img src="${this.#objektum.kep}" alt="kep">
          <p>Név: ${this.#objektum.nev}</p>
          <p>Típus: ${this.#objektum.tipus}</p>
          <button type="button" class="kivalaszt">Kiválaszt</button>
        </div>
        `;
        this.#szuloElem.append(txt);
    }

    esemenyKezelo(){
        this.gombElem.on("click", () => {
            console.log(this);
            //saját esemény létrehozása
            const esemeny = new CustomEvent("kivalaszt",{
                //detailben tároljuk az eseményhez kapcsolódó adatokat
                detail: this.#objektum,
            });
            //window objektumra küldjük az eseményt
            window.dispatchEvent(esemeny);
        })
    }
}