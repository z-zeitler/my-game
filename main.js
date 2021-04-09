const tri = new Triangle();
let pregame = true;

let triangles = [];
let colors = [
    {key: 'turquoise', color: [66, 245, 227]},
    {key: 'orange', color: [227, 117, 0]},
    {key: 'dblue', color: [0, 73, 99]},
    {key: 'beige', color: [217, 212, 186]}

    // {key: 'turquoise', color: color(66, 245, 227)},
    // {key: 'orange', color: color(227, 117, 0)},
    // {key: 'dblue', color: color(0, 73, 99)},
    // {key: 'beige', color: color(217, 212, 186)}
];

function preload() {
    //triangle.preload();

}

function setup() {
    createCanvas(800, 1800)
    tri.setup();
}

function draw() {
    //tri.draw();
    //tri.draw2();

    let i = 0;
    var shade;

    for(let y = 0; y < height; y += 130) {

        var y1 = y;
        var y2 = y + 65;
        var y3 = y + 130;
        //console.log(height);
        console.log('i top = ' + i);

            for(let x = 0; x < width; x += 80) {
            var x1 = x;
            var x3 = x;
            var x2 = x + 80;

            // if (x == 80 && y == 0) {
            //     console.log('hi');
            //     y += 65;
            // }
            // || x == 240 && y == 0)

            //if(pregame) {
                //if statements for the colors - numbered horizontally
                if(i < 10 || (i > 70 && i < 85)) {
                    shade = colors[1].color;
                }

                else if(i > 9 && i < 20) {
                    shade = colors[3].color;
                    console.log('if i = ' + i)
                }

                else if(i > 21 && i < 50) {
                    shade = colors[0].color;
                }

                else if(i > 50 && i < 70) {
                    shade = colors[2].color;
                }
            //} 

            //console.log(x1, y1, x2, y2, x3, y3);
            
            let tri = new Triangle(i, x1, y1, x2, y2, x3, y3, shade);
            triangles.push(tri);

            tri.draw();

            i++;
            console.log('i = ' + i);


            
            }
        pregame = false;
    }
}

    function mousePressed() {
        if (mouseIsPressed) {
            // use array.contains ?

            // get the triangle's index from its coordinates
            
            var identifier;

            for (tile in triangles) {
                if (mouseX >= tile.x1 && mouseY >= tile.y1 && mouseY <= tile.y3 && mouseX <= tile.x2) {
                    identifier = tile.index;

                    tile.changeColor(colors[1].color);
                }
            }

            
            /*
            if(tri.x1) {

            }

            if(tri.x2) {

            }

            if(tri.x3) {

            }

            if(tri.y1) {

            }

            if(tri.y2) {

            }

            if(tri.y3) {

            }
            */

            // tri.index;

            // change the triangle's color

            // tri.changeColor();
             }
        }