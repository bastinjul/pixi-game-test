import {Application, ICanvas} from 'pixi.js';
import {PointerEventScene} from "./scenes/pointer-event.scene";
// import {TickerClampyScene} from "./scenes/ticker-clampy.scene";
// import {AnimatedSpriteScene} from "./scenes/animated-sprite.scene";
// import {TweenScene} from "./scenes/tween.scene";

const app: Application<ICanvas> = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 960,
	height: 720
});

// app.stage.addChild(new AnimatedSpriteScene());
// app.stage.addChild(new TickerClampyScene(app.screen.width, app.screen.height));
// app.stage.addChild(new TweenScene(app.screen.width, app.screen.height));
app.stage.addChild(new PointerEventScene(app.screen.width, app.screen.height));