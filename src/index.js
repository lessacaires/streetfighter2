import { Ryu } from "./entities/fighters/Ryu.js";
import { Ken } from "./entities/fighters/Ken.js";
import { Stage } from "./entities/stage.js";
import { FpsCounter } from "./entities/FpsCounter.js";
import { STAGE_FLOOR } from "./constants/stage.js";
import { FighterDirection } from "./constants/fighter.js";

const GameViewport = {
  WIDTH: 384,
  HEIGHT: 224,
};

window.addEventListener("load", () => {
  const canvasEl = document.querySelector("canvas");
  const context = canvasEl.getContext("2d");
  context.imageSmoothingEnabled = false;

  canvasEl.width = GameViewport.WIDTH;
  canvasEl.height = GameViewport.HEIGHT;

  const entities = [
    new Stage(),
    new Ryu(104, STAGE_FLOOR, FighterDirection.LEFT),
    new Ken(280, STAGE_FLOOR, FighterDirection.RIGHT),
    new FpsCounter(),
  ];

  let frameTime = {
    previous: 0,
    secondsPassed: 0,
  };

  function frame(time) {
    window.requestAnimationFrame(frame);

    frameTime = {
      secondsPassed: (time - frameTime.previous) / 1000,
      previous: time,
    };

    for (const entity of entities) {
      entity.update(frameTime, context);
    }

    for (const entity of entities) {
      entity.draw(context);
    }
  }
  window.requestAnimationFrame(frame);
});
