import { Fighters } from "./Fighter.js";

export class Ryu extends Fighters{
    constructor(x, y, velocity){
        super('Ryu', x, y, velocity)
        this.imagem = document.querySelector('img[alt="ryu"]');
    }
}