const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth/window.innerHeight,
  0.1,
  1000
);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ----- STARS -----
const starGeometry = new THREE.BufferGeometry();
const starCount = 800;
const starVertices = [];

for(let i=0;i<starCount;i++){
  const x = (Math.random()-0.5)*200;
  const y = (Math.random()-0.5)*200;
  const z = (Math.random()-0.5)*200;
  starVertices.push(x,y,z);
}

starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices,3));
const starMaterial = new THREE.PointsMaterial({
  color:0xffffff,
  size:0.15,
  transparent:true,
  opacity:0.8
});

const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// ----- MOON GROUP -----
const moonGroup = new THREE.Group();
scene.add(moonGroup);

// Moon texture
const textureLoader = new THREE.TextureLoader();
const moonTexture = textureLoader.load(
  'https://threejs.org/examples/textures/planets/moon_1024.jpg'
);

// Moon mesh
const moonGeometry = new THREE.SphereGeometry(2,64,64);
const moonMaterial = new THREE.MeshStandardMaterial({
  map: moonTexture,
  roughness:1,
  metalness:0
});
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
moonGroup.add(moon);

// Sun-like directional light
const sunLight = new THREE.DirectionalLight(0xfff2aa,1.2);
sunLight.position.set(5,5,5);
scene.add(sunLight);

const ambient = new THREE.AmbientLight(0x333333,0.6);
scene.add(ambient);

// Outer orbit for Eid text
const outerOrbit = new THREE.Group();
scene.add(outerOrbit);

let outerText;

// Font loader
const loader = new THREE.FontLoader();
loader.load(
  'https://threejs.org/examples/fonts/optimer_bold.typeface.json',
  function(font){

    // MH HRIDOY on top of moon
    const innerGeo = new THREE.TextGeometry('MH HRIDOY',{
      font:font,
      size:0.22,
      height:0.05
    });
    innerGeo.center();

    const innerMat = new THREE.MeshStandardMaterial({
      color:0x00ffff,
      emissive:0x00ffff,
      emissiveIntensity:0.3
    });

    const innerText = new THREE.Mesh(innerGeo,innerMat);
    innerText.position.y = 2.4;
    moonGroup.add(innerText);

    // EID MUBARAK stylish
    const outerGeo = new THREE.TextGeometry('EID MUBARAK',{
      font:font,
      size:0.45,
      height:0.08,
      curveSegments:12
    });
    outerGeo.center();

    const outerMat = new THREE.MeshStandardMaterial({
      color:0xffdd00,
      emissive:0xffdd00,
      emissiveIntensity:0.3
    });

    outerText = new THREE.Mesh(outerGeo,outerMat);
    outerText.position.x = 5;
    outerOrbit.add(outerText);

  });

// Animation
function animate(){
  requestAnimationFrame(animate);

  // moon + MH HRIDOY rotate
  moonGroup.rotation.y += 0.003;

  // outer Eid orbit
  outerOrbit.rotation.y -= 0.01;

  // twinkle stars
  starMaterial.opacity = 0.5 + Math.random()*0.5;

  renderer.render(scene,camera);
}
animate();

// Resize
window.addEventListener("resize",()=>{
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth,window.innerHeight);
});
