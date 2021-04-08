class Cons 
{
    constructor (bodyA, pointB)
    {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 1,
        }
        this.pointB = pointB;
        this.bodyA= bodyA
        this.con = Constraint.create(options);
        World.add(world, this.con);
    }

fly ()
{
    this.con.bodyA = null;
}

attach(body)
{
this.con.bodyA = body;
}

    display ()
    {
        if (this.con.bodyA)
        
{
        var pointA = this.con.bodyA.position;
        var pointB = this.pointB;
       
        strokeWeight(4);
        line (pointA.x, pointA.y, pointB.x, pointB.y);
    }}
}
