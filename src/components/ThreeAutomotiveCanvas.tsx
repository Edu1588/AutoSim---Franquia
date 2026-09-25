import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeAutomotiveCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0f2d, 0.035);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(4, 2.5, 6);
    camera.lookAt(0, 0.2, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for the 3D car silhouette and effects
    const carGroup = new THREE.Group();
    scene.add(carGroup);

    // 1. Aerodynamic Cyber Chassis curves
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xf26522,
      transparent: true,
      opacity: 0.85,
      linewidth: 2,
    });

    const blueLineMaterial = new THREE.LineBasicMaterial({
      color: 0x4a72ff,
      transparent: true,
      opacity: 0.75,
      linewidth: 1.5,
    });

    // Outer roof & body contour curve
    const bodyPoints = [
      new THREE.Vector3(-2.4, 0.25, 0),
      new THREE.Vector3(-2.2, 0.45, 0),
      new THREE.Vector3(-1.3, 0.55, 0),
      new THREE.Vector3(-0.6, 0.95, 0),
      new THREE.Vector3(0.3, 0.98, 0),
      new THREE.Vector3(1.1, 0.7, 0),
      new THREE.Vector3(1.9, 0.55, 0),
      new THREE.Vector3(2.4, 0.45, 0),
      new THREE.Vector3(2.4, 0.2, 0),
      new THREE.Vector3(1.7, 0.2, 0),
      new THREE.Vector3(1.4, 0.45, 0),
      new THREE.Vector3(1.0, 0.2, 0),
      new THREE.Vector3(-1.0, 0.2, 0),
      new THREE.Vector3(-1.4, 0.45, 0),
      new THREE.Vector3(-1.8, 0.2, 0),
      new THREE.Vector3(-2.4, 0.25, 0),
    ];
    const bodyCurve = new THREE.CatmullRomCurve3(bodyPoints);
    const bodyGeo = new THREE.BufferGeometry().setFromPoints(bodyCurve.getPoints(80));
    const mainBodyLine = new THREE.Line(bodyGeo, lineMaterial);
    carGroup.add(mainBodyLine);

    // Left and Right 3D flanks
    [-0.85, 0.85].forEach((zOffset) => {
      const flankPoints = [
        new THREE.Vector3(-2.3, 0.3, zOffset * 0.7),
        new THREE.Vector3(-1.4, 0.48, zOffset * 0.95),
        new THREE.Vector3(-0.5, 0.72, zOffset * 0.75),
        new THREE.Vector3(0.4, 0.74, zOffset * 0.75),
        new THREE.Vector3(1.2, 0.55, zOffset * 0.95),
        new THREE.Vector3(2.3, 0.35, zOffset * 0.7),
      ];
      const curve = new THREE.CatmullRomCurve3(flankPoints);
      const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(50));
      const line = new THREE.Line(geo, blueLineMaterial);
      carGroup.add(line);
    });

    // Cross ribs / wireframe ribs across the cabin
    for (let x = -1.6; x <= 1.8; x += 0.4) {
      const width = Math.sin(((x + 2) / 4) * Math.PI) * 0.9 + 0.15;
      const height =
        x < -0.6
          ? 0.5 + (x + 1.6) * 0.4
          : x > 0.8
          ? 0.95 - (x - 0.8) * 0.45
          : 0.95;
      const ribGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(x, 0.2, -width),
        new THREE.Vector3(x, height * 0.7, -width * 0.9),
        new THREE.Vector3(x, height, 0),
        new THREE.Vector3(x, height * 0.7, width * 0.9),
        new THREE.Vector3(x, 0.2, width),
      ]);
      const ribLine = new THREE.Line(ribGeo, lineMaterial);
      carGroup.add(ribLine);
    }

    // 2. Wheels (glowing neon rings)
    const wheelPositions = [
      new THREE.Vector3(-1.4, 0.32, 0.9),
      new THREE.Vector3(-1.4, 0.32, -0.9),
      new THREE.Vector3(1.35, 0.32, 0.9),
      new THREE.Vector3(1.35, 0.32, -0.9),
    ];
    const wheelMaterial = new THREE.MeshBasicMaterial({
      color: 0xf26522,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const wheelGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.16, 16, 1, true);
    wheelGeo.rotateX(Math.PI / 2);

    const wheels: THREE.Mesh[] = [];
    wheelPositions.forEach((pos) => {
      const wheel = new THREE.Mesh(wheelGeo, wheelMaterial);
      wheel.position.copy(pos);
      carGroup.add(wheel);
      wheels.push(wheel);
    });

    // 3. Ground reflective cyber grid
    const gridHelper = new THREE.GridHelper(16, 24, 0xf26522, 0x1d295f);
    gridHelper.position.y = 0;
    scene.add(gridHelper);

    // 4. Aerodynamic Wind Velocity Particles
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 8;
      particlePositions[i * 3 + 1] = Math.random() * 2.2 + 0.05;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      particleVelocities.push(0.04 + Math.random() * 0.07);
    }

    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      color: 0xffa45c,
      size: 0.055,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Subtle lights
    const pointLight = new THREE.PointLight(0xf26522, 3, 10);
    pointLight.position.set(0, 2.5, 2);
    scene.add(pointLight);

    const blueLight = new THREE.PointLight(0x3861fb, 2, 8);
    blueLight.position.set(-2, 1, -2);
    scene.add(blueLight);

    // Mouse Interaction Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      mouseX = x;
      mouseY = y;
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Gentle floating and mouse rotation
      targetRotationY = mouseX * 0.8 + Math.sin(time * 0.4) * 0.15;
      targetRotationX = mouseY * 0.4;

      carGroup.rotation.y += (targetRotationY - carGroup.rotation.y) * 0.05;
      carGroup.rotation.x += (targetRotationX - carGroup.rotation.x) * 0.05;
      carGroup.position.y = Math.sin(time * 1.5) * 0.04;

      // Spin wheels
      wheels.forEach((w) => {
        w.rotation.z += 0.06;
      });

      // Move particles towards back (simulating wind tunnel)
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += particleVelocities[i];
        if (positions[i * 3] > 4.5) {
          positions[i * 3] = -4.5;
          positions[i * 3 + 1] = Math.random() * 1.8 + 0.1;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 3;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Move grid
      gridHelper.position.x = ((time * 1.5) % 0.67) - 0.33;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 w-full h-full cursor-grab active:cursor-grabbing"
      title="Arraste o cursor para interagir com o showroom 3D"
    />
  );
}
