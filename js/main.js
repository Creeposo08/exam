import * as THREE from 'three';



// Crear la escena
const scene = new THREE.Scene();

// Crear la cámara con perspectiva
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 5); // Posicionar la cámara

// Crear el renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear un cubo
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Crear dos planos de diferentes tamaños
const planeGeometry1 = new THREE.PlaneGeometry(5, 5); // Plano grande
const planeMaterial1 = new THREE.MeshStandardMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
const plane1 = new THREE.Mesh(planeGeometry1, planeMaterial1);
plane1.rotation.x = -Math.PI / 2; // Rotar el plano para que esté horizontal
plane1.position.y = -1.5; // Posicionar el plano
scene.add(plane1);

const planeGeometry2 = new THREE.PlaneGeometry(3, 5); // Plano pequeño
const planeMaterial2 = new THREE.MeshStandardMaterial({ color: 0xff0000, side: THREE.DoubleSide });
const plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
plane2.rotation.z = -Math.PI / 2; // Rotar el plano
plane2.position.set(0, -0.5, -2.5); // Posicionar el plano
scene.add(plane2);

// Añadir luz ambiental
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Color y intensidad
scene.add(ambientLight);

// Añadir luz direccional
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5); // Posicionar la luz
scene.add(directionalLight);

// Función de animación
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01; // Rotar el cubo
    cube.rotation.y += 0.01; // Rotar el cubo
    renderer.render(scene, camera);
}
animate();

// Ajustar el tamaño del renderizador si se cambia el tamaño de la ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});