let paused=true;
function play()
{
    paused=false;
    a=0.000001

    ob1.position.x=5;
    ob1.position.z=0;
    l1.position.x=5;
    l1.position.y=10;
    l1.position.z=0;

  
    
    ob2.position.z=-200;
    ob2.position.x=-5;
    l2.position.z=-200;
    l2.position.x=-5;
    l2.position.y=10;
  
    ob3.position.z=-400;
    ob3.position.x=5;
    l3.position.z=-400;
    l3.position.x=5;
    l3.position.y=10;
  
    ob4.position.z=-600;
    ob4.position.x=-5;
    l4.position.z=-600;
    l4.position.x=-5;
    l4.position.y=10;
  
    ob5.position.z=-800;
    ob5.position.x=-5;
    l5.position.z=-800;
    l5.position.x=-5;
    l5.position.y=10;
  
  
  x=ball.position.x;
  x1=ob1.position.x;
  x2=ob2.position.x;
  x3=ob3.position.x;
  x4=ob4.position.x;
  x5=ob5.position.x;
  
  z=ball.position.z;
  z1=ob1.position.z;
  z2=ob2.position.z;
  z3=ob3.position.z;
  z4=ob4.position.z;
  z5=ob5.position.z;
}