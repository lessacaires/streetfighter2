import { Stage } from "./entities/Stage.js";
import { Ken } from "./entities/figthers/ken.js";
import { Ryu } from "./entities/figthers/Ryu.js";
import { FpsCounter } from "./entities/FpsCounter.js";

const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
};

window.onload = () => {
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');

    canvasEl.width = GameViewport.WIDTH;
    canvasEl.height = GameViewport.HEIGHT;

    let previousTime = 0;
    let secondsPassed = 0;

    const entities = [
        new Stage(),
        new Ken(80, 110, 150),
        new Ryu(80, 110, -150),
        new FpsCounter(),
    ];


    function frame(time){
        window.requestAnimationFrame(frame);
        
        secondsPassed = (time - previousTime) / 1000;
        previousTime = time;
        
        for(const entity of entities){
            entity.update(secondsPassed, context);
        }
        
        for(const entity of entities){
            entity.draw(context);
        }
    }
    window.requestAnimationFrame(frame);
}