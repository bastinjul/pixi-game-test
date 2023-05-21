import {Container, Sprite, Ticker} from "pixi.js";
import {Group, Tween} from "tweedle.js";

export class TweenScene extends Container {
    private readonly clampy: Sprite;

    constructor(screenWidth: number, screenHeight: number) {
        super();

        this.clampy = Sprite.from("clampy.png");
        this.clampy.anchor.set(0.5);
        this.clampy.x = screenWidth / 2;
        this.clampy.y = screenHeight / 2;
        this.addChild(this.clampy);

        Ticker.shared.add(this.update, this);

        new Tween(this.clampy.position)
            .to({x: 100, y: 100}, 10000)
            .repeat(Infinity)
            .yoyo(true)
            .start();
    }

    private update(): void {
        Group.shared.update();
    }
}