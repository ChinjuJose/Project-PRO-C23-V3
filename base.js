class Base{
    constructor(x,y,image){
        var options = {
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.image = loadImage(image);
        this.body = Bodies.rectangle(x,y,200,150,options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image, 0, 0, 200,150);
        pop();
    }
}