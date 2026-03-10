## 初始化页面流程
1. 创建场景
2. 创建网格 
   1. 创建几何体
   2. 创建材质
   3. 把几何体和材质合并成网格
3. 创建相机
4. 创建渲染器
5. 渲染场景
1.const scene = new THREE.Scene();
2.1 const geometry = new THREE.BoxGeometry(1, 1, 1);
2.2 const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
2.3 const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
3.const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;
4.const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);

### 创建组 就是一次添加多个物体
1. 创建组
2. 把物体添加到组中
3. 把组添加到场景中

1. const group = new THREE.Group();
2. scene.add(group);
3.  const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      );
      group.add(mesh);
