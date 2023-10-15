import { Stage } from "./entities/Stage.js";
import { Ken } from "./entities/figthers/ken.js";
import { Ryu } from "./entities/figthers/Ryu.js";
import { FpsCounter } from "./entities/FpsCounter.js";
import { STAGE_FLOOR } from "./constants/stage.js";

const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
};

window.onload = () => {
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');

    canvasEl.width = GameViewport.WIDTH;
    canvasEl.height = GameViewport.HEIGHT;

    let frameTime ={
        previous:0,
        secondsPassed:0,
    };


    const entities = [
        new Stage(),
        new Ken(80, STAGE_FLOOR, 150),
        new Ryu(80, STAGE_FLOOR, -150),
        new FpsCounter(),
    ];


    function frame(time){
        window.requestAnimationFrame(frame);
        
        frameTime ={
            secondsPassed: (time - frameTime.previous) / 1000,
            previous: time,
        };
        
        for(const entity of entities){
            entity.update(frameTime, context);
        }
        
        for(const entity of entities){
            entity.draw(context);
        }
    }
    window.requestAnimationFrame(frame);
}