import { Fighter } from "./Fighter.js";

export class Guile extends Fighter {
  constructor(x, y, velocity) {
    super("Guile", x, y, velocity);
    this.image = document.querySelector('img[alt="guile"]');

    this.frames = new Map([

      // Move Forwards
      ['forwards-1', [[17,553,84,91],[49,91]]],
      ['forwards-2', [[145,551,68,91],[32,91]]],
      ['forwards-3', [[199,645,62,123],[25,123]]],
      ['forwards-4', [[287,644,61,124],[26,124]]],
      ['forwards-5', [[373,645,62,123],[26,124]]],
      ['forwards-6', [[451,646,71,122],[29,122]]],

      // Move Backwards
      ['backwards-1', [[451,646,71,122],[29,122]]],
      ['backwards-2', [[373,645,72,123],[26,124]]],
      ['backwards-3', [[287,644,61,124],[26,124]]],
      ['backwards-4', [[199,645,62,123],[25,123]]],
      ['backwards-5', [[103,646,71,121],[37,121]]],
      ['backwards-6', [[13,647,14,119],[37,19]]],

    ]);

    this.animations = {
      'walkForwards': ['forwards-1','forwards-2','forwards-3','forwards-4','forwards-5','forwards-6',],
      'walkBackwards': ['backwards-1','backwards-2','backwards-3','backwards-4','backwards-5','backwards-6',],
    }
  }
}
