import {Container, FederatedPointerEvent, Graphics, Sprite, Ticker} from "pixi.js";
import {Group, Tween} from "tweedle.js";

export class PointerEventScene extends Container {
    private readonly clampy: Sprite;
    private readonly rectangle: Graphics;
    private readonly kunai: Sprite;

    constructor(screenWidth: number, screenHeight: number) {
        super();

        this.rectangle = new Graphics();
        this.rectangle.beginFill(0xFF9933);
        this.rectangle.drawRect(0, 0, screenWidth, screenHeight);
        this.rectangle.endFill();
        this.addChild(this.rectangle);

        this.rectangle.on("pointertap", this.onClicky, this);
        this.rectangle.interactive = true;

        this.clampy = Sprite.from("clampy.png");
        this.clampy.anchor.set(0.5);
        this.clampy.x = screenWidth / 2;
        this.clampy.y = screenHeight / 2;
        this.addChild(this.clampy);

        this.kunai = Sprite.from("kunai.png");
        this.kunai.scale.set(0.1)

        Ticker.shared.add(this.update, this);
    }

    private onClicky(e: FederatedPointerEvent): void {
        new Tween(this.clampy.position)
            .to({x: e.global.x, y: e.global.y}, 3000)
            .start();
        this.kunai.x = e.global.x;
        this.kunai.y = e.global.y;
        this.kunai.anchor.set(0.5, 1);
        this.addChild(this.kunai);
        setTimeout(() => this.removeChild(this.kunai), 1000);
    }

    private update(): void {
        Group.shared.update();
    }
}