import {GameObject} from '@ronantmx/gamescript/src/GameObject';
import {Vector2} from '@ronantmx/gamescript/src/Vector2';
import {DrawRectangleComponent} from '@ronantmx/gamescript/src/Components/DrawRectangleComponent';
import {RigidBodyComponent} from '@ronantmx/gamescript/src/Components/RigidBodyComponent';


export class MyWall extends GameObject{
    spawnPosition:Vector2;
    constructor(spawnPosition:Vector2) {
        super();
        this.spawnPosition = spawnPosition;

        this.setTag("Wall");
    }

    start() {
        console.log("Hello from new enemy GameObject");
        this.getTransform().setPosition(this.spawnPosition);
        this.addDrawComponent(new DrawRectangleComponent(this, "white"));
        const rg = new RigidBodyComponent(this);
        rg.setIsStatic(true)
        this.addColliderComponent(rg);
    }
}