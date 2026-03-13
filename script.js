const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("container").appendChild(renderer.domElement);

camera.position.z = 20;


// Create cube grid
const cubes = [];
const size = 6;

for(let x=-size; x<=size; x++){
for(let y=-size; y<=size; y++){

const geometry = new THREE.BoxGeometry(0.8,0.8,0.8);

const material = new THREE.MeshBasicMaterial({
color:0x00ffcc,
wireframe:true
});

const cube = new THREE.Mesh(geometry,material);

cube.position.x = x * 2;
cube.position.y = y * 2;

scene.add(cube);

cubes.push(cube);

}
}


// Animation
function animate(){

requestAnimationFrame(animate);

cubes.forEach(cube=>{
cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
});

scene.rotation.z += 0.002;

renderer.render(scene,camera);

}

animate();