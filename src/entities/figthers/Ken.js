import { Fighters } from "./Fighter.js";

export class Ken extends Fighters{
    constructor(x,y,velocity){
        super('Ken', x, y, velocity)
        this.imagem = document.querySelector('img[alt="ken"]');
    }
}