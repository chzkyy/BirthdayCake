import * as THREE from "./three.js-master/build/three.module.js";
import { OrbitControls } from "./three.js-master/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from './three.js-master/examples/jsm/loaders/GLTFLoader.js';
import { TextGeometry } from './three.js-master/examples/jsm/geometries/TextGeometry.js'
import { FontLoader } from './three.js-master/examples/jsm/loaders/FontLoader.js';

const initialize = () => {
  const scene = new THREE.Scene();
  const camera = createCamera();
  const renderer = createRenderer();
  const loader = new THREE.TextureLoader();

  handleResize(renderer, camera);

  //  Orbit Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enabled = true;
  controls.minDistance = -100;
  controls.maxDistance = 800;
  controls.enableDamping = true;
  controls.target.set(0, 0, 0);


  // Lights
  const AmbientLight = createAmbientLight(scene);
  const spotLight = createSpotLight(scene);
  
  // Create Table
  const topPart = createtopPart(scene, loader);
  const legPart = createlegPart(scene, loader);
  const bottomPart = createbottomPart(scene, loader);

  // Create Cake
  const plate = createPlate(scene);
  const topCake = createtopCake(scene, loader);
  const bottomCake = createbottomCake(scene, loader);

  // Create Decoration Cake
  // const chocolateCake = createChocolateBall(scene, loader);
  
  const topCandle = createtopCandle(scene, loader);
  const bodyCandle = createbodyCandle(scene, loader);
  const candleLight = createCandleLight(scene);

  const topCandle2 = createtopCandle2(scene, loader);
  const bodyCandle2 = createbodyCandle2(scene, loader);
  const candleLight2 = createCandleLight2(scene);

  const text = createText(scene);


  // skybox and camera model
  const loader3D = new GLTFLoader();
  const Camera3D = createCamera3D(scene, loader3D);
  const skybox = createSkybox(scene, loader);

  //set position camera
  camera.position.set(16, 12, -8);

  // set position object
  topPart.position.set(0, 0, 0);
  legPart.position.set(0, -8, 0.5);
  bottomPart.position.set(0, -16, 0.5);

  // create render
  const render = () => {
    controls.update();
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }
  
  // create event listener for light and camera
  const keyboard = (e) => {
    const keyCode = e.keyCode;
    
    switch (keyCode) {
      // on/off light with key 'q'
      case 81:
        if (spotLight.intensity === 0) {
          spotLight.intensity = 1; // for light on
        } else {
          spotLight.intensity = 0; // for light off
        }
        break;

      // change camera position with key'w'
      case 87:
        const defaultPosition = camera.position.set(16, 12, -8);
        const defaultTarget = camera.position.set(24, 6, 0);
        if (defaultPosition) {
          defaultTarget;
        }  
        else {
          camera.position.set(16, 12, -8);
        }
        break;   
    
      // turn on candle light with key 's'
      case 83:
        if (candleLight.intensity === 0 && candleLight2.intensity === 0) {
          candleLight.intensity = 1; // for light on
          candleLight2.intensity = 1; // for light on
        } else {
          candleLight.intensity = 0; // for light off
          candleLight2.intensity = 0; // for light off
        }
        break;

      // reset camera position with key 'space'
      case 32:
        camera.position.set(16, 12, -8);
        break;

      // case 65:
      //   break;

      // case 68:
      //   break;

      default:
        break;
    }
  }

  const addkeyboard = _=> {
    document.addEventListener('keydown', keyboard);
  }

  // initilize render and event listener
  addkeyboard();
  render();
}

// for responsive window
const handleResize = (renderer, camera) => {
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
};

// Camera
const createCamera = () => {
  const [fov, aspect] = 
  [75, window.innerWidth / window.innerHeight];
  const camera = new THREE.PerspectiveCamera(fov, aspect);

  camera.lookAt(0, 0, 0);
  return camera;
}

// Renderer
const createRenderer = () => {
  const renderer = new THREE.WebGLRenderer({ 
    antialias: true,
   });
  renderer.setClearColor('#4d2600');
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  renderer.shadowMap.enabled = true;
  renderer.basicShadowMap = true;

  return renderer;
}

// lighting
const createSpotLight = (scene) => {
  const spotLight = new THREE.SpotLight(
    '#E8DC8B', // color
    0, // intensity default for light off
    1000, // distance
    Math.PI / 8 // angle
  );

  spotLight.position.set(20, 30, 0);
  scene.add(spotLight);
  return spotLight;
}

const createAmbientLight = (scene) => {
  const AmbientLight = new THREE.AmbientLight(
    '#E8DC8B', // color
    0.3, // intensity
  );

  scene.add(AmbientLight);
  return AmbientLight;
}


/* Create Table */
const createtopPart = (scene, loader) => {
  const geometry = new THREE.CylinderGeometry(12, 12, 1.2, 8);
  const texture = loader.load('./assets/textures/wood_texture.jpg');
  const normal = loader.load('./assets/textures/wood_normal.png');
  const material = new THREE.MeshPhongMaterial({ 
    normalMap: normal,
    map: texture,
  });
  const topPart = new THREE.Mesh(geometry, material);

  topPart.receiveShadow = true;
  topPart.castShadow = true;

  scene.add(topPart);
  return topPart;
}

const createlegPart = (scene, loader) => {
  const geometry = new THREE.CylinderGeometry(1, 1, 16, 64);
  const texture = loader.load('./assets/textures/wood_texture.jpg');
  const normal = loader.load('./assets/textures/wood_normal.png');
  const material = new THREE.MeshPhongMaterial({ 
    normalMap: normal,
    map: texture,
  });
  const legPart = new THREE.Mesh(geometry, material);

  legPart.receiveShadow = true;
  legPart.castShadow = true;

  scene.add(legPart);
  return legPart;
}

const createbottomPart = (scene, loader) => {
  const geometry = new THREE.CylinderGeometry(5, 5, 1, 8);
  const texture = loader.load('./assets/textures/wood_texture.jpg');
  const normal = loader.load('./assets/textures/wood_normal.png');
  const material = new THREE.MeshPhongMaterial({ 
    normalMap: normal,
    map: texture,
  });
  const bottomPart = new THREE.Mesh(geometry, material);

  bottomPart.receiveShadow = true;
  bottomPart.castShadow = true;

  scene.add(bottomPart);
  return bottomPart;
}


/* Create Cake */
const createPlate = (scene) => {
  const geometry = new THREE.CylinderGeometry(7, 7, 0.5, 64);
  const material = new THREE.MeshPhongMaterial({
    Shininess: 64,
    Reflectifity: 0.5,
  });

  const plate = new THREE.Mesh(geometry, material);
  plate.position.set(0, 0.8, 0.6);
  plate.receiveShadow = true;
  plate.castShadow = true;
  scene.add(plate);
  return plate;
}

const createbottomCake = (scene, loader) => {
  const geometry = new THREE.CylinderGeometry(5, 5, 4, 64);
  const texture = loader.load('./assets/textures/frosting_texture.jpg');
  const normal = loader.load('./assets/textures/frosting_normal.png');
  const material = new THREE.MeshPhongMaterial({  
    map: texture,
    normalMap: normal,
  });
  const bottomCake = new THREE.Mesh(geometry, material);
  
  bottomCake.position.set(0, 3, 0.5);
  bottomCake.receiveShadow = true;
  bottomCake.castShadow = true;
  scene.add(bottomCake);
  return bottomCake;
}

const createtopCake = (scene, loader) => {
  const geometry = new THREE.CylinderGeometry(3, 3, 4, 64);
  const texture = loader.load('./assets/textures/frosting_texture.jpg');
  const normal = loader.load('./assets/textures/frosting_normal.png');
  const material = new THREE.MeshPhongMaterial({
    map: texture,
    normalMap: normal,
  });

  const topCake = new THREE.Mesh(geometry, material);
  topCake.position.set(0, 7, 0.5);
  topCake.receiveShadow = true;
  topCake.castShadow = true;
  scene.add(topCake);
  return topCake;
}


/* Create Decoration */

// const createChocolateBall = (scene, loader) => {
//   const geometry = new THREE.SphereGeometry( 0.3, 32, 32);
//   const material = new THREE.MeshPhongMaterial({
//     color: '#5e350c',
//   });
//   const chocolateBall = new THREE.Mesh(geometry, material);

//   chocolateBall.receiveShadow = true;
//   chocolateBall.castShadow = true;
//   scene.add(chocolateBall);
//   return chocolateBall;
// }


/* Create Candle */
const createtopCandle = (scene, loader) => {
  const geometry = new THREE.ConeGeometry(0.05, 0.1, 64);
  const texture = loader.load('./assets/textures/candle_texture.jpg');
  const material = new THREE.MeshPhongMaterial({
    map: texture,
  });
  const topCandle = new THREE.Mesh(geometry, material);
  
  topCandle.position.set(0, 9.5, 0.6);
  topCandle.receiveShadow = true;
  topCandle.castShadow = true;
  scene.add(topCandle);
  return topCandle;
}

const createbodyCandle = (scene, loader) => {
  const geometry = new THREE.CylinderGeometry(0.05, 0.05, 0.5, 64);
  const texture = loader.load('./assets/textures/candle_texture.jpg');
  const material = new THREE.MeshPhongMaterial({
    map: texture,
  });
  const bodyCandle = new THREE.Mesh(geometry, material);

  bodyCandle.position.set(0, 9.2 , 0.6);
  bodyCandle.receiveShadow = true;
  bodyCandle.castShadow = true;
  scene.add(bodyCandle);
  return bodyCandle;
}

const createCandleLight = (scene) => {
  const candleLight = new THREE.PointLight(
    '#e65c2c', // color
    0, // intensity default off
    8, // distance
  );

  candleLight.position.set(0, 9.6, 0.6);
  scene.add(candleLight);
  return candleLight;
}

const createtopCandle2 = (scene, loader) => {
  const geometry = new THREE.ConeGeometry(0.05, 0.1, 64);
  const texture = loader.load('./assets/textures/candle_texture.jpg');
  const material = new THREE.MeshPhongMaterial({
    map: texture,
  });
  const topCandle = new THREE.Mesh(geometry, material);
  
  topCandle.position.set(0.3, 9.5, 0.6);
  topCandle.receiveShadow = true;
  topCandle.castShadow = true;
  scene.add(topCandle);
  return topCandle;
}

const createbodyCandle2 = (scene, loader) => {
  const geometry = new THREE.CylinderGeometry(0.05, 0.05, 0.5, 64);
  const texture = loader.load('./assets/textures/candle_texture.jpg');
  const material = new THREE.MeshPhongMaterial({
    map: texture,
  });
  const bodyCandle = new THREE.Mesh(geometry, material);

  bodyCandle.position.set(0.3, 9.2 , 0.6);
  bodyCandle.receiveShadow = true;
  bodyCandle.castShadow = true;
  scene.add(bodyCandle);
  return bodyCandle;
}

const createCandleLight2 = (scene) => {
  const candleLight = new THREE.PointLight(
    '#e65c2c', // color
    0, // intensity default off
    8, // distance
  );

  candleLight.position.set(0.3, 9.6, 0.6);
  scene.add(candleLight);
  return candleLight;
}

/* Create text */
const createText = (scene) => {
  const textLoader = new FontLoader();
  textLoader.load('./assets/fonts/helvetiker_bold.typeface.json', function(font) {
    const geometry = new TextGeometry('Happy Birthday', {
      font: font,
      size: 0.4,
      height: 0.08,
    }
    );
    const material = new THREE.MeshStandardMaterial({
      color: '#d65645',
    });
  
    geometry.computeBoundingBox();
    const textMesh = new THREE.Mesh(geometry, material);
    textMesh.position.set(-0.5, 9.1, 2.4);
    textMesh.rotation.set(-Math.PI/8, Math.PI/2, 0.4);
    textMesh.receiveShadow = true;
    textMesh.castShadow = true;
    scene.add(textMesh);
    return textMesh;
  });
}

/* Create Camera Model */
const createCamera3D = (scene, loader3D) => {
  loader3D.load('./assets/3dmodel/model.gltf', (gltf) => {
    const camera = gltf.scene;

    camera.position.set(20, -2, 0);
    camera.rotation.set(0, -Math.PI/2, 0);

    scene.add(camera);
    return camera;
  });
}

/* Create Sky Box */
const createSkybox = (scene, loader) => {
  const materialArray = [];
  const px = loader.load('./assets/skyboxes/Vasa/px.jpg');
  const nx = loader.load('./assets/skyboxes/Vasa/nx.jpg');
  const py = loader.load('./assets/skyboxes/Vasa/py.jpg');
  const ny = loader.load('./assets/skyboxes/Vasa/ny.jpg');
  const pz = loader.load('./assets/skyboxes/Vasa/pz.jpg');
  const nz = loader.load('./assets/skyboxes/Vasa/nz.jpg');

  materialArray.push(new THREE.MeshPhongMaterial({ map: px }));
  materialArray.push(new THREE.MeshPhongMaterial({ map: nx }));
  materialArray.push(new THREE.MeshPhongMaterial({ map: py }));
  materialArray.push(new THREE.MeshPhongMaterial({ map: ny }));
  materialArray.push(new THREE.MeshPhongMaterial({ map: pz }));
  materialArray.push(new THREE.MeshPhongMaterial({ map: nz }));

  for (var i=0; i<6; i++)
    materialArray[i].side = THREE.BackSide;

  const skyboxGeo = new THREE.BoxGeometry(500, 500, 500);
  const skybox = new THREE.Mesh(skyboxGeo, materialArray);

  scene.add(skybox);
  return skybox;
}

initialize();