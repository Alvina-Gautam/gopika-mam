class Boy {
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0,
            friction:5,
            density:7,
    }
    this.x=x;
    this.y=y;
    this.image=loadImage('boy.png');
    this.body= Bodies.rectangle(x,y,width,height);
    World.add(world,this.body);
}

display(){
    var boypos=this.body.position;
    push();
    translate(boypos.x,boypos.y);
    rectMode(CENTER)
    imageMode(CENTER);
    image(this.image,0,0);
    strokeWeight(3);
    fill(255,0,255)
    pop();
}}