class Box{


      constructor(x,y,width,height){

            var options = {

                  'restitution': 0.8,
                  'friction':0.3,
                  'density':0.1
            
            }

            this.body= Bodies.rectangle(x,y,width,height,options);
            this.height = height;
            this.width = width;
            World.add(world,this.body);
      }
      
     display(){
           var pos = this.body.position;
           var angle = this.body.angle;

           push(); // starts falling action
           translate(pos.x,pos.y); // shifts the x, y position
           rotate(angle); // rotates the box while falling
          

           
           rectMode(CENTER); // puts x,y of box to center
           fill(255);
           rect(0,0,this.width,this.height);

           pop(); // stops falling action

          
     } 

};