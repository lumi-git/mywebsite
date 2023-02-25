

<script lang=ts >
    import P5 from 'p5-svelte';
    
    function addPoint(x,y) {
        p.push(new point(x,y,[Math.random()*255,Math.random()*255,Math.random()*255,80]));
    }

    class point {
        constructor(x, y,color) {
            this.x = x;
            this.y = y;
            this.speed = 2;
            this.velx = 2*(Math.random() - 0.5);
            this.vely = 2*(Math.random() - 0.5);
            this.color = color;

        }
    }
    
    let width = 100;
    let height = 100;
    let p = [];
    let tol = 200;

    const sketch = (p5) => {
        p5.setup = () => {
            p5.createCanvas(p5.windowWidth,p5.windowHeight);

            let button = p5.createButton('Click Here to add more points ! ',["btaddpounts"]);
            button.style('background-color', 'rgba(0,0,0,0)');
            button.mousePressed(addRandomPoint);

            for(let i = 0; i < 50; i++){
                addRandomPoint();
            }

        };

        p5.draw = () => {
        
            p5.background(0);
            p5.stroke(255,255,255);
            p5.ellipse(p5.mouseX, p5.mouseY, 5, 5);


            p.forEach(e => {
                p5.stroke(255);

                let d = Math.sqrt((e.x-p5.mouseX)**2 + (e.y-p5.mouseY)**2) ;
                        if (d < tol){
                            p5.stroke(255,255,255,200-d);
                            p5.line(e.x, e.y, p5.mouseX, p5.mouseY);
                        }
                
                e.velx += (Math.random() - 0.5)*0.1;
                e.vely += (Math.random() - 0.5)*0.1;

                e.velx = Math.max(-e.speed, Math.min(e.speed, e.velx));
                e.vely = Math.max(-e.speed, Math.min(e.speed, e.vely));
                e.x += e.velx;
                e.y += e.vely;

                
                if (e.x +width/2> p5.windowWidth || e.x -width/2< 0){
                    e.velx = -e.velx;
                }
                if (e.y +height/2> p5.windowHeight || e.y- height/2 < 0){
                    e.vely = -e.vely;
                }

                p.forEach(e2 => {
                    if (e2 != e){
                        let d = Math.sqrt((e.x-e2.x)**2 + (e.y-e2.y)**2) ;
                        if (d < tol){
                            p5.stroke(255,255,255,200-d);
                            p5.line(e.x, e.y, e2.x, e2.y);
                        }
                    }
                });
                p5.stroke(e.color);
                p5.fill(e.color);
                p5.ellipse(e.x, e.y, width, height);
                p5.ellipse(e.x, e.y, width-10, height-10);
            });
        };
  

        function addRandomPoint() {
            if(p.length > 70) return;
            let rx =  p5.windowWidth/2
            let ry = p5.windowHeight/2
                addPoint( rx, ry);
        }

    };

</script>
<div class = "flex items-center m-2">
<P5 {sketch} />
</div>