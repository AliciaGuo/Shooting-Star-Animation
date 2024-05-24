//star vars

var xPos = 386;
var yPos = 5;
var starRadius = 23;

//sun vars

var sunW = 144;
var sunH = 143;

draw = function() {

background (108, 147, 156);

//shooting star
noStroke ();
    fill(247, 237, 151);
    ellipse(xPos, yPos, starRadius, starRadius);

xPos -= 1;
yPos += 1;
starRadius -= 0.1;

stroke (126, 140, 126);

//sun
fill (250, 236, 175);
ellipse (201,288,sunW,sunH);


sunW -= 0.2;
sunH -= 0.2;


//mountains (numbered from left to right)

//mt 2 (dark grey)
   fill (171, 184, 165);
   quad (388,505,194,244,63,165.3,-104,689);
  
//mt 1 (lighter grey)
fill (192, 201, 191);
quad (580,410,234,411,78,227.0,-2013,265);

//mt 3 (light grey)
fill (203, 214, 201);
quad (1043,232,183,260,-54,423,200,932);


//hill

//grass
    fill (112, 145, 109);
    arc (125,440,795,238,-302,19);

//flowers
   //flower 1
   fill (245, 244, 223);//petals
   ellipse (95,349,8,12);
   ellipse (90,355,12,8);
   ellipse (100,355,12,8);
   ellipse (95,360,8,12);
   fill (247, 227, 161); //pollen
   ellipse (95,355,8,8);
   
   //flower 2
    fill (245, 244, 223);//petals
   ellipse (210,365,8,12);
   ellipse (215,370,12,8);
   ellipse (210,376,8,12);
   ellipse (204,370,12,8);
   fill (247, 227, 161); //pollen
   ellipse (210,370,8,8);
   
   //flower 3
   fill (245, 244, 223);//petals
   ellipse (17,373,8,12);
   ellipse (22,379,12,8);
   ellipse (17,385,8,12);
   ellipse (12,379,12,8);
   fill (247, 227, 161); //pollen
   ellipse (17,379,8,8);

};



