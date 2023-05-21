import {AnimatedSprite, Container, Texture} from "pixi.js";

interface JumperSprite {
    file: string,
    height: number,
    width: number
}

export class AnimatedSpriteScene extends Container {

    private readonly animatedJumper: AnimatedSprite;
    private readonly jumperFrames: Array<JumperSprite>;

    constructor() {
        super();

        this.jumperFrames = [
            {file: "jumper/sprite1.png", height: 809, width: 418},
            {file: "jumper/sprite2.png", height: 713, width: 434},
            {file: "jumper/sprite3.png", height: 633, width: 425},
            {file: "jumper/sprite4.png", height: 601, width: 537},
            {file: "jumper/sprite5.png", height: 850, width: 614},
            {file: "jumper/sprite6.png", height: 594, width: 601},
            {file: "jumper/sprite7.png", height: 578, width: 505},
            {file: "jumper/sprite8.png", height: 818, width: 418}
        ];

        this.animatedJumper = new AnimatedSprite(this.jumperFrames.map((jumperFrame) => Texture.from(jumperFrame.file)));

        this.animatedJumper.animationSpeed = 0.1;

        this.addChild(this.animatedJumper);
        this.animatedJumper.play();

        this.animatedJumper.onFrameChange = this.onJumperFrameChange.bind(this);
    }

    private onJumperFrameChange(currentFrame: number): void {
        let jumperSprite: JumperSprite | undefined = this.jumperFrames.at(currentFrame);
        if(jumperSprite) {
            this.animatedJumper.width = jumperSprite.width * 0.75;
            this.animatedJumper.height = jumperSprite.height * 0.75;
            this.animatedJumper.y = (818 - jumperSprite.height) * 0.75;
            if(currentFrame >= 0 && currentFrame <= 4) {
                this.animatedJumper.x = 0;
            } else if(currentFrame == 7) {
                //keep same position
            } else {
                this.animatedJumper.x = this.animatedJumper.x + 200;
            }
        }
    }
}