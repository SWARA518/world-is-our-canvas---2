var database;

var currentPath;

var point;

var drawing = [];

function setup(){
 var canvas = createCanvas(200,200);

}

function draw(){
    background(192,192,192)

    if(mouseIsPressed){
        var point = {
            x:mouseX,
            y:mouseY
        }
        drawing.push(point);
    }
    
    stroke(255);
    
    strokeWeight(4);
    
    noFill();
    
    for(var i = 0;i < drawing.lenght;){
        vertex(drawing[i].x,drawing[i].y)
    }
    
}
//function mouseDragged(){
  //  strokeWeight(18)
//}
//function mouseReleased(){
  //  strokeWeight(0)
//}