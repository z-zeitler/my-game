class Triangle {

    constructor(index,x1,x2,x3,y1,y2,y3,color) {
        this.index = index;
        this.x1 = x1;
        this.x2 = x2;
        this.x3 = x3;
        this.y1 = y1;
        this.y2 = y2;
        this.y3 = y3;
        this.color = color;
    }

    setup() {
        //this.triangles = [];
    }

    draw() {
        //background(220);

        
        fill(this.color);


        triangle(this.x1, this.x2, this.x3, this.y1, this.y2, this.y3);

        //add color
        //fill method
    }

    /*
    draw2(x1, y1, x2, y2, x3, y3, color) {

    var y;
    var x;
    
    
    for(y = 0; y < height; y += 130) {
        if(y == 1690) {
            console.log('hi');
            y += 65;
        }

        var y1 = y;
        var y2 = y + 65;
        var y3 = y + 130;
        console.log(height);

        for(x = 0; x < width; x += 80) {
        var x1 = x;
        var x3 = x;
        var x2 = x + 80;


        console.log(x1, y1, x2, y2, x3, y3);
        triangle(x1, y1, x2, y2, x3, y3);

        }
        
    }
    */
    
    changeColor(clr) {
        this.color = clr;

    //         
    //                tri.draw();
             }
    //     }

   
}
