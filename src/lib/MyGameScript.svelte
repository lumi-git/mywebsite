

<script lang="ts" >
    import { Game } from '@ronantmx/gamescript/src/Game';
    import { MyScene } from '$lib/myGame/MyScene';
    import P5 from 'p5-svelte';
        const sketch = (p:any) => {
            
            let game:Game = Game.getInstance();
            game.setScene(new MyScene());
            p.setup = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight-120);
                game.setScreenSize(p.windowWidth, p.windowHeight-40);
                p.windowResized = () => {
                    p.resizeCanvas(p.windowWidth, p.windowHeight-120);
                    game.setScreenSize(p.windowWidth, p.windowHeight-40);
                };
                game.Mstart(p); 
            };

            p.draw = () => {
                p.background("#101010");
                game.runFrame(p);  
            };
        };
</script>
<div class = "overflow-hidden max-h-70% pointer-events-none">
    <div class = "absolute top-1/3 bg-opacity-50 bg-gray-900 rounded-r-xl p-10 space-y-7 border-black border-x-8 border">
        <p class = "text-7xl underline text-white">Infos</p>
        <p class = "text-2xl">Handmade, Object oriented game library</p>
        <p class = "text-2xl">Collision detection algorythme: Spatial hashmap</p>
        <p class = "text-2xl">Left Click to spawn DYNAMIC enemy with rigidbody component</p>
        <p class = "text-2xl">Right Click to spawn STATIC rigidbody</p>
    </div>
    <P5 {sketch}/>
</div>
