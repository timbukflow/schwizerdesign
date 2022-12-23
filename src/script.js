import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';

import * as dat from 'lil-gui'

gsap.registerPlugin(ScrollTrigger);

/*********** Basics ***********/

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color('#484848');
scene.background = null;

// Debug
// const gui = new dat.GUI()


/*********** Objects ***********/

// Cube Glas

// const geometry = new THREE.IcosahedronGeometry(1, 15);
// const material = new THREE.MeshPhysicalMaterial({
//     roughness: 0,
//     transmission: 1,
//     thickness: 0.5,
//     envMap: hdrEquirect,
//     envMapIntensity: 0.1,
//   });

// const cube = new THREE.Mesh(geometry, material)
// scene.add(cube);


const geometryt = new THREE.IcosahedronGeometry(1, 15);
const materialt = new THREE.MeshStandardMaterial({
    // color: 0xD59DDD,
    // emissive: 0x0D0324,
    color: 0xd8d8d8,
    emissive: 0x1E242B,
    roughness: 1,
    metalness: 0,
    // transparent: true,
    // opacity: 0.75,
  });

const cube = new THREE.Mesh(geometryt, materialt)
scene.add(cube);



/*********** Lights ***********/

const light02 = new THREE.DirectionalLight(0x0093FC, 0.1);
light02.position.set(5, 5, 5);
scene.add(light02);

const light03 = new THREE.DirectionalLight(0xFCC600, 0.2);
light03.position.set(-5, 5, 5);
scene.add(light03);

const light = new THREE.DirectionalLight( 0xffffff, 0.7 );
light.position.x = -5
light.position.z = 2.5
light.position.y = 5
scene.add( light );



/*********** Size ***********/

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


/*********** Camera ***********/ 

// Base camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 1, 100)
camera.position.set(0, 0, 4.5)
camera.lookAt(cube.position)
scene.add(camera)


/*********** Renderer ***********/ 

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/*********** Curser ***********/

const cursor = {}
    cursor.x = 0
    cursor.y = 0

window.addEventListener('mousemove', (event) =>
{
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
    // console.log(cursor.x, cursor.y)

})


/*********** Animation on Clock ***********/


const clock = new THREE.Clock()
let previosTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previosTime
    previosTime = elapsedTime

    const parallaxX = cursor.x * 20
    const parallaxY = - cursor.y * 20
    light.position.x += (parallaxX - light.position.x - 5) * 5 * deltaTime 
    light.position.y += (parallaxY - light.position.y - 5) * 5 * deltaTime
   

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()



/*********** Animation ***********/

let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".firstheader",
      start: "center 40%",
      end: "80% center",
      ease: "power4.in", 
      scrub: 2.5,
      // markers: true
    }
  });

//   tl.to(cube.scale, {x:-2, z:7})
  tl.to(light.position, {z:-15},0.5)
  tl.to(camera.position, {z:15},0)
 
  
    
//   tl.to(cube.position, {y:3})
