let fpsTime=0,c=0,fps,avgfps,maxfps=0,minfps=100000,frames=0,Time=0,LastTime=0;

let a=0.000001,vx=0,vz=0.1,x,x1,x2,x3,x4,x5,z,z1,z2,z3,z4,z5;

let renderer,scene,camera;

renderer = new THREE.WebGLRenderer({
    canvas: Canvas, 
    antialias: true
  });
  renderer.setClearColor(0xffffff);
  renderer.setPixelRatio(window.devicePixelRatio);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight,0.1, 1000 );
  let al = new THREE.AmbientLight(0xffffff,0.25);
  scene.add(al);

  let pl = new THREE.PointLight(0xffffff,0.5);
  scene.add(pl);

  let l1 = new THREE.PointLight(0x00ff00,0.5);
  scene.add(l1);
  let l2 = new THREE.PointLight(0x00ff00,0.5);
  scene.add(l2);
  let l3 = new THREE.PointLight(0x00ff00,0.5);
  scene.add(l3);
  let l4 = new THREE.PointLight(0x00ff00,0.5);
  scene.add(l4);
  let l5 = new THREE.PointLight(0x00ff00,0.5);
  scene.add(l5);

  let cylinder = new THREE.CylinderBufferGeometry(5,5,20,100);
  let sphere =new THREE.SphereBufferGeometry( 5, 100, 100 );




  let material = new THREE.MeshStandardMaterial( { 
    color:0xffffff,
    roughness:1,
    metalness:0

   } );
  let ob_material = new THREE.MeshStandardMaterial( { 
    color:0x00ff00,
    roughness:1,
    metalness:0

   } );

  let ob1 = new THREE.Mesh(cylinder,ob_material);
  scene.add(ob1);
  let ob2 = new THREE.Mesh(cylinder,ob_material);
  scene.add(ob2);
  let ob3 = new THREE.Mesh(cylinder,ob_material);
  scene.add(ob3);
  let ob4 = new THREE.Mesh(cylinder,ob_material);
  scene.add(ob4);
  let ob5 = new THREE.Mesh(cylinder,ob_material);
  scene.add(ob5);


  let ball =new THREE.Mesh(sphere,material);
  scene.add(ball);
  let platform = new THREE.PlaneBufferGeometry( 20, 1000, 32 );
  let plane = new THREE.Mesh(platform,material);
  scene.add(plane);

  ball.position.z=900;
  ball.position.y=5;
  ball.position.x=5;



  camera.position.z=1000;
  camera.position.y=20;



  plane.rotation.x=-Math.PI/2;
  plane.position.z=500;
 
  pl.position.y=100;
  pl.position.z=1000;
  //cube.position.y=10;

function update(dt)
{
  dx = vx * dt;
  dz = vz * dt;
  
  vz+=a*dt;
// z+=dz;
z1+=dz;
z2+=dz;
z3+=dz;
z4+=dz;
z5+=dz;

x+=dx;
// x1+=dx;
// x2+=dx;
// x3+=dx;
// x4+=dx;
// x5+=dx;



  ball.position.x=x;
  ob1.position.x=x1;
  ob2.position.x=x2;
  ob3.position.x=x3;
  ob4.position.x=x4;
  ob5.position.x=x5;

  l1.position.x=x1;
  l2.position.x=x2;
  l3.position.x=x3;
  l4.position.x=x4;
  l5.position.x=x5;

  
  ball.position.z=z;
  ob1.position.z=z1;
  ob2.position.z=z2;
  ob3.position.z=z3;
  ob4.position.z=z4;
  ob5.position.z=z5;

  l1.position.z=z1;
  l2.position.z=z2;
  l3.position.z=z3;
  l4.position.z=z4;
  l5.position.z=z5;

}
  function gameloop(TimeStamp){


    let dt = TimeStamp - LastTime;
LastTime = TimeStamp;
Time += dt;

frames++;
fpsTime+=dt;
//console.log(fpsTime);
//fps=1000/dt;

if(fpsTime>=1000){
  c++;
  fps=frames;
if(c<=5)
avgfps=fps;

  avgfps=Math.round((avgfps*c+fps)/(c+1));
if(maxfps<fps)
maxfps=fps;
if(minfps>fps&&c>=5)
minfps=fps;
//console.log(fps);
document.getElementById("fps").innerHTML="FPS : "+fps+"<br>"+"AVGFPS : "+avgfps+"<br>"+"MAXFPS : "+maxfps+"<br>"+"MINFPS : "+minfps;

frames=0;
fpsTime=0;
}



if(z1>=1000)
{
  z1=0;
  if(Math.round(Math.random())==0)
  x1=-5;
  else
  x1=5;
}

if(z2>=1000)
{
  z2=0;
  if(Math.round(Math.random())==0)
  x2=-5;
  else
  x2=5;
}

if(z3>=1000)
{
  z3=0;
  if(Math.round(Math.random())==0)
  x3=-5;
  else
  x3=5;
}

if(z4>=1000)
{
  z4=0;
  if(Math.round(Math.random())==0)
  x4=-5;
  else
  x4=5;
}

if(z5>=1000)
{
  z5=0;
  if(Math.round(Math.random())==0)
  x5=-5;
  else
  x5=5;
}

if(upPressed)
{
  if(x==-5)
  vx=0.1;
  if(x==5)
  vx=-0.1;
}
if(x>5)
{
  x=5;
  vx=0;
}
if(x<-5)
{
  x=-5;
  vx=0;
}
if(Math.sqrt((x-x1)*(x-x1)+(z-z1)*(z-z1))<10||Math.sqrt((x-x2)*(x-x2)+(z-z2)*(z-z2))<10||Math.sqrt((x-x3)*(x-x3)+(z-z3)*(z-z3))<10||Math.sqrt((x-x4)*(x-x4)+(z-z4)*(z-z4))<10||Math.sqrt((x-x5)*(x-x5)+(z-z5)*(z-z5))<10)
paused=true;

 if(!paused)
update(dt);
 //camera.rotation.x+=0.1;
//cube.position.y-=0.1;
renderer.render( scene, camera );
        
window.requestAnimationFrame(gameloop);
    };

window.requestAnimationFrame(gameloop);

