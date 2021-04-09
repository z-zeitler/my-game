const tri = new Triangle();
let pregame = true;

let triangles = [];
let colors = [
    {key: 'turquoise', color: [66, 245, 227]},
    {key: 'orange', color: [227, 117, 0]},
    {key: 'dblue', color: [0, 73, 99]},
    {key: 'beige', color: [217, 212, 186]}
];

function preload() {
    //triangle.preload();

}

function setup() {
    let canvas = createCanvas(800, 1800);
    canvas.parent("canvas");
    tri.setup();

    let i = 0;
    var shade;

    for(let y = 0; y < height; y += 130) {

        var y1 = y;
        var y2 = y + 65;
        var y3 = y + 130;
        //console.log(height);
        //console.log('i top = ' + i);

            for(let x = 0; x < width; x += 80) {
            var x1 = x;
            var x3 = x;
            var x2 = x + 80;

            // if (x == 80 && y == 0) {
            //     console.log('hi');
            //     y += 65;
            // }
            // || x == 240 && y == 0)

            if(pregame) {
                //if statements for the colors - numbered horizontally
                if(i < 10 || (i > 70 && i < 85)) {
                    shade = colors[1].color;
                }

                else if(i > 9 && i < 20) {
                    shade = colors[3].color;
                    //console.log('if i = ' + i)
                }

                else if(i > 21 && i < 50) {
                    shade = colors[0].color;
                }

                else if(i > 50 && i < 70) {
                    shade = colors[2].color;
                }
                
            } 

            //console.log(x1, y1, x2, y2, x3, y3);
            
            //pregame = false;

            let tri = new Triangle(i, x1, y1, x2, y2, x3, y3, shade);
                triangles.push(tri);



            // for (dreieck of triangles) {
            //     dreieck.draw();
            // }

            i++;
            //console.log('i = ' + i);

            }

    }
    console.log(triangles);
}

function draw() {

    // let i = 0;
    // var shade;

    /*
    for(let y = 0; y < height; y += 130) {

        var y1 = y;
        var y2 = y + 65;
        var y3 = y + 130;
        //console.log(height);
        //console.log('i top = ' + i);

            for(let x = 0; x < width; x += 80) {
            var x1 = x;
            var x3 = x;
            var x2 = x + 80;

            // if (x == 80 && y == 0) {
            //     console.log('hi');
            //     y += 65;
            // }
            // || x == 240 && y == 0)

            if(pregame) {
                //if statements for the colors - numbered horizontally
                if(i < 10 || (i > 70 && i < 85)) {
                    shade = colors[1].color;
                }

                else if(i > 9 && i < 20) {
                    shade = colors[3].color;
                    //console.log('if i = ' + i)
                }

                else if(i > 21 && i < 50) {
                    shade = colors[0].color;
                }

                else if(i > 50 && i < 70) {
                    shade = colors[2].color;
                }
                
            } 

            //console.log(x1, y1, x2, y2, x3, y3);
            
            //pregame = false;

            let tri = new Triangle(i, x1, y1, x2, y2, x3, y3, shade);
                triangles.push(tri);


            tri.draw();

            // for (dreieck of triangles) {
            //     dreieck.draw();
            // }

            i++;
            //console.log('i = ' + i);

            }
    }
    */

    //console.log(triangles.length);

    for (let tri of triangles) {
        tri.draw();
    }

    if (winGame() == true) {
            textSize(70);
            fill(0);
            text('You have won!', 153, 600);
        }
}

    function mousePressed() {
        console.log('mouse');

        //console.log(mouseX);
        //console.log(mouseY);
        
        //if (mouseIsPressed) {
            // use array.contains ?

            // get the triangle's index from its coordinates
            
            //var identifier;

            for (tile of triangles) {
                //console.log(tile);
                //console.log(mouseX + ' =? ' + tile.x1 + ' ' + tile.x2);
                //console.log(mouseY + ' =? ' + tile.y1 + ' ' + tile.y3);

                if (mouseX >= tile.x1 && mouseY >= tile.y1 && mouseY <= tile.y3 && mouseX <= tile.x2) {
                    //identifier = tile.index;

                    console.log(tile.index);

                    tile.changeColor('teal');
                    //tile.changeColor('red');

                    tile.draw();

                    console.log(tile.x1);
                    console.log(tile.x2);
                    console.log(tile.y1);
                    console.log(tile.y3);
                }
            }

            // tri.index;

            // change the triangle's color

            // tri.changeColor();
             //}
        }

    
    function winGame() {
        let criteria = triangles[0].color;
        //let hasWon = false;

        for (let tri of triangles) {
            if (criteria !== tri.color) {
                return false
                //hasWon = true;
            }
            
        }

        return true

        // if (winGame() == true) {
        //     textSize(32);
        //     fill(0, 102, 153);
        //     text('word', 10, 30);
        // }
    }
    