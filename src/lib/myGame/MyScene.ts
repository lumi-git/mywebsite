import { MyEnemy } from "./MyEnemy";
import { MyPlayer } from "./MyPlayer";
import type p5 from "p5";
import { terrain } from "./MyTerrain";
import { MyWall } from "./MyWall";
import { Scene } from "@ronantmx/gamescript/src/Scene";
import { Vector2 } from "@ronantmx/gamescript/src/Vector2";
import { Game } from "@ronantmx/gamescript/src/Game";


export class MyScene extends Scene {
    time = 0
    constructor() {
        super();
    }

    start(p: p5) {
        console.log("Hello from default Scene");
        const ter:terrain = new terrain(new Vector2(20000, 20000))
        this.addObject(ter);
        this.addObject(new MyPlayer(ter));
        p.mousePressed = () => {
            if( p.mouseButton === p.RIGHT){
                const w:MyWall = new MyWall(new Vector2(Game.getInstance().getMousePosition().getX(),Game.getInstance().getMousePosition().getY()));
                w.getTransform().setScale(new Vector2(100,100));
                this.addObject(w);
            }
            if (p.mouseButton === p.LEFT){
                const randomVector:Vector2 = new Vector2(Game.getInstance().getMousePosition().getX(),Game.getInstance().getMousePosition().getY());
                this.addObject(new MyEnemy(randomVector));
            }
        }
        for (let i = 0; i < 100; i++){
            const w:MyWall = new MyWall(new Vector2(Math.random()*20000,Math.random()*20000));
            w.getTransform().setScale(new Vector2(100,100));
            this.addObject(w);
        }
    }


    update(p: p5, dt: number): void {
        //spawn a new MyEnemy object every 2 seconds
        this.time += dt;
        if(this.time > 2000 && false){
            this.time = 0;
            const randomVector:Vector2 = new Vector2(Math.random()*20000, Math.random()*20000);
            this.addObject(new MyEnemy(randomVector));
        }

    }

}
