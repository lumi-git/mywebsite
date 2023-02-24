

<script >
    import P5 from 'p5-svelte';
    
    class point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    
    let width = 55;
    let height = 55;
    
    

    let px = 0;
    let py = 0;

    const sketch = (p5) => {
        p5.setup = () => {
            p5.createCanvas(p5.windowWidth,p5.windowHeight);
        };

        p5.draw = () => {
            p5.background(0);
            p5.ellipse(px, py, width, height);

            if (Math.abs( px-p5.mouseX) > 50) {
                px -= (px-p5.mouseX)*0.05;
                py -= (py-p5.mouseY)*0.05;
            }

        };
    };

</script>
<P5 {sketch} />




