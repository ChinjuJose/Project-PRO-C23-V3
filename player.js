class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        var options = {
            isStatic:true
        }
        this.image = loadImage("player.png");
        this.body = Bodies.rectangle(x,y,100,50,options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image, 0, 0, 80,100);
        pop();
    }
}