

<script lang="ts" >
    import P5 from 'p5-svelte';
    
    function addPoint(x,y) {
        p.push(new point(x,y, (50+(Math.random()*50)),[Math.random()*255,Math.random()*255,Math.random()*255,80]));
    }

    class point {
        constructor(x, y,lineLength,color) {
            this.x = x;
            this.y = y;
            this.lineLength = lineLength;
            this.color = color;
            this.free = false;
        }
    }
    
    let width = 55;
    let height = 55;
    
    let p = [];
    let tol = 80;
    p.push(new point(100, -100,65,[255,0,0,tol]),new point(100, -100,85,[255,0,0,tol]),new point(100, -100,56,[0,255,0,tol]),new point(100, -100,60,[0,0,255,tol]),new point(100, -100,68,[255,255,0,tol]),new point(100, -100,75,[255,0,255,tol]));


    let sini = 0 ;

    let gravity = 2.5;

    let ballonaddcounter = 20 ;

    const sketch = (p5) => {
        p5.setup = () => {
            p5.createCanvas(p5.windowWidth-100,p5.windowHeight-200);
            
            let button = p5.createButton('Click Here to add more ballons ! ',["btaddballons"]);
            button.style('background-color', 'rgba(0,0,0,0)');
            button.mousePressed(changeBG);



        };

        p5.draw = () => {


            if (p5.mouseIsPressed && ballonaddcounter > 0) {
                if (p5.mouseY < p5.windowHeight-200 && p5.mouseX < p5.windowWidth-200){
                    p[Math.random()*p.length|0].free = true;
                    ballonaddcounter-=1;
                }
                

            }
            else if(!p5.mouseIsPressed ){
                ballonaddcounter = 20 ;
            }

            p5.background(0,100,255,255);
            p5.stroke(255,255,255);
            p5.ellipse(p5.mouseX, p5.mouseY, 5, 5);
            let i = 0 
            p.forEach(e => {
                
                if (!e.free){
                    let mutl = e.lineLength/1000;
                e.x -= (e.x-p5.mouseX)*mutl + Math.sin(0.01*(sini-i*100));
                e.y -= (e.y-p5.mouseY)*mutl;

                e.y -= gravity*e.lineLength*0.15;

                p5.stroke(255);
                p5.line(e.x, e.y+height/2, p5.mouseX, p5.mouseY);

                
                }
                else {
                    let mutl = e.lineLength/1000;
                    e.x = (e.x) + Math.sin(0.01*(sini-i*100));
                    e.y -= gravity
                    if (e.y < -height ) {
                        if(p.length > 1){
                        p.splice(i,1);
                    }
                    }  
                }
                p5.stroke(e.color);
                p5.fill(e.color);
                p5.ellipse(e.x, e.y, width, height);


                i+=1;

            });

            sini+=1;
        };
  

        function changeBG() {
            addPoint( Math.random()*p5.windowWidth, Math.random()*p5.windowHeight);
        }

    };

</script>
<div class = "flex items-center">
<P5 {sketch} />
</div>