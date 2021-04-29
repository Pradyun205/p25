class Stone{
	constructor(x,y,r)
	{
		var options = {
			'density':1,
			'friction': 5,
			'restitution':0.3
		  };
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.rectangle(this.x, this.y, (this.s-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("orange");
			//draw the ellipse here to display the rubber ball
            
			pop()
	}

}