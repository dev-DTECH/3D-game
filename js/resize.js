let res =document.getElementById("res");
let Canvas =document.getElementById("display");
Canvas.width=window.innerWidth*(res.value/100);
Canvas.height=window.innerHeight*(res.value/100);

function resize()
{
Canvas.width=window.innerWidth*(res.value/100);
Canvas.height=window.innerHeight*(res.value/100);
camera.aspect = Canvas.width / Canvas.height;
// After making changes to aspect
camera.updateProjectionMatrix();
renderer.setSize(Canvas.width, Canvas.height);
}


window.addEventListener('resize', resize, false);