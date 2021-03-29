class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.Img1 = loadImage("sprites/sling1.png");
        this.Img2 = loadImage("sprites/sling2.png");
        this.Img3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.Img1, 200,25);
        image(this.Img2, 175,25);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);

            push();
            if(pointA.x<220){
                line(pointA.x-5, pointA.y, pointB.x-5, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x+20, pointB.y);
                image(this.Img3, pointA.x-25,pointA.y-5, 15,30);                
            }
            else {
                line(pointA.x+25, pointA.y, pointB.x+25, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x-20, pointB.y);
                image(this.Img3, pointA.x+25,pointA.y-5, 15,30);
            }
             pop();
        }
    }
    
}