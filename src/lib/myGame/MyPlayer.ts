import { GameObject } from "@ronantmx/gamescript/src/GameObject";
import { Vector2 } from "@ronantmx/gamescript/src/Vector2";
import { DrawElipseComponent } from "@ronantmx/gamescript/src/Components/DrawElipseComponent";
import { DrawTextComponent } from "@ronantmx/gamescript/src/Components/DrawTextComponent";
import { RigidBodyComponent } from "@ronantmx/gamescript/src/Components/RigidBodyComponent";
import { PlayerMovementComponent } from "@ronantmx/gamescript/src/Components/PlayerMovementComponent";
import { ColliderComponent } from "@ronantmx/gamescript/src/Components/ColliderComponent";

export class MyPlayer extends GameObject{
    tagComponent:DrawTextComponent;
    enemyDefeated:number = 0;
    terrain:GameObject;
    constructor(terrain:GameObject) {
        super();
        this.terrain = terrain;
        this.setTag("Player");
        this.attachCamera();
    }

    start() {
        console.log("Hello from default GameObject");
        this.getTransform().setPosition(new Vector2(1000,1000));
        this.getTransform().setScale(new Vector2(100,100));
        this.addDrawComponent(new DrawElipseComponent(this, "blue"));
        this.tagComponent = new DrawTextComponent(this);
        this.tagComponent.setText("Move with the arrows ! 0 points");
        this.tagComponent.setSize(30);
        this.tagComponent.setColor("white");
        this.addDrawComponent( this.tagComponent)
        this.addColliderComponent(new RigidBodyComponent(this));
        this.addComponent(new PlayerMovementComponent(this, 1));
    }

    onCollision(collider: ColliderComponent): void {
        /*if (collider.getParent().getTag() == "Enemy") {
            this.enemyDefeated++;
            this.tagComponent.setText(this.enemyDefeated+" points");
            collider.getParent().destroy();
        }*/
    }

    update(p: import("p5"), dt: number): void {
        super.update(p, dt);
        if(this.getTransform().getPosition().getX() < 0){
            this.getTransform().setPosition(new Vector2(0, this.getTransform().getPosition().getY()));
        }
        if(this.getTransform().getPosition().getY() < 0){
            this.getTransform().setPosition(new Vector2(this.getTransform().getPosition().getX(), 0));
        }
        if(this.getTransform().getPosition().getX() > this.terrain.getTransform().getScale().getX()){
            this.getTransform().setPosition(new Vector2(this.terrain.getTransform().getScale().getX(), this.getTransform().getPosition().getY()));
        }
        if(this.getTransform().getPosition().getY() > this.terrain.getTransform().getScale().getY()){
            this.getTransform().setPosition(new Vector2(this.getTransform().getPosition().getX(), this.terrain.getTransform().getScale().getY()));
        }
    }

}