

<script >
    import P5 from 'p5-svelte';
    
    class point {
        constructor(x, y,speed) {
            this.x = x;
            this.y = y;
            this.speed = speed
        }
    }
    
    let width = 55;
    let height = 55;
    
    let p = [];
    p.push(new point(100, 100,0.04), new point(100, 100,0.05), new point(100, -100,0.02),new point(100, -100,0.025),new point(100, -100,0.03));

    let px = 0;
    let py = 0;

    const sketch = (p5) => {
        p5.setup = () => {
            p5.createCanvas(p5.windowWidth,p5.windowHeight);
        };

        p5.draw = () => {
            p5.background(0);
            
            p.forEach(e => {

                if (Math.sqrt( (e.x-p5.mouseX)**2 + (e.y-p5.mouseY)**2) > width/2) {
                e.x -= (e.x-p5.mouseX)*e.speed;
                e.y -= (e.y-p5.mouseY)*e.speed;
            }

                
                p5.ellipse(e.x, e.y, width, height);
                p5.stroke(255);
                p5.line(e.x, e.y, p5.mouseX, p5.mouseY);


            });


        };
    };

</script>
<P5 {sketch} />




