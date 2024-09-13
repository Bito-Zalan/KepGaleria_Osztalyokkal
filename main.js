import { GALERIA } from "./adatok.js";
import Kartyak from "./view/Kartyak.js";

const KIVALASZTOTTKEPEK = [];
const TAROLO = $(".tartalom");
const KIVALASZTOTTKEP = $(".kivalasztott")

new Kartyak(GALERIA,TAROLO);

$(window).on("kivalaszt", (event) => {
    console.log(event.detail);
    KIVALASZTOTTKEPEK.push(event.detail);
    new Kartyak(KIVALASZTOTTKEPEK,KIVALASZTOTTKEP);
})
