import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const DevInfinity3DLogo = () => {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 420;
    const height = container.clientHeight || 420;

    // 1. Scene, Camera, Renderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // Group holding the entire 3D Cyber Torus Knot Mesh
    const stageGroup = new THREE.Group();
    scene.add(stageGroup);

    // 2. Dynamic Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 6, 20);
    cyanLight.position.set(4, 5, 5);
    scene.add(cyanLight);

    const blueLight = new THREE.PointLight(0x3b82f6, 5, 20);
    blueLight.position.set(-5, -4, -4);
    scene.add(blueLight);

    const purpleLight = new THREE.PointLight(0x8b5cf6, 4, 20);
    purpleLight.position.set(0, -5, 4);
    scene.add(purpleLight);

    // 3. Outer Wireframe 3D Cyber Torus Knot (Cyan #06b6d4)
    // Geometry args: [radius, tube, tubularSegments, radialSegments, p, q]
    const torusKnotGeo = new THREE.TorusKnotGeometry(1.35, 0.42, 140, 24, 2, 3);
    const torusKnotMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const torusKnotMesh = new THREE.Mesh(torusKnotGeo, torusKnotMat);
    stageGroup.add(torusKnotMesh);

    // 4. Inner Denser 3D Octahedron Crystal Core (Blue #3b82f6)
    const innerCrystalGeo = new THREE.OctahedronGeometry(0.85, 2);
    const innerCrystalMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const innerCrystalMesh = new THREE.Mesh(innerCrystalGeo, innerCrystalMat);
    stageGroup.add(innerCrystalMesh);

    // 5. Back-Side Ambient Glow Core Shell
    const glowGeo = new THREE.SphereGeometry(1.0, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.14,
      side: THREE.BackSide,
    });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    stageGroup.add(glowMesh);

    // 6. Floating Orbital Energy Particles System
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.6 + Math.random() * 1.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI - Math.PI / 2;

      particlePositions[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi);
      particlePositions[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi);

      const mix = Math.random();
      particleColors[i * 3] = 0.02 + mix * 0.2; // R
      particleColors[i * 3 + 1] = 0.7 + mix * 0.25; // G
      particleColors[i * 3 + 2] = 0.95; // B
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    stageGroup.add(particles);

    // 7. Interactive Cursor Listener
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mouseRef.current.targetX = x * 0.35;
      mouseRef.current.targetY = y * 0.35;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // 8. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth cursor tilt interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // ── Outer 3D Torus Knot Ultra-Slow Rotation ──
      torusKnotMesh.rotation.x = elapsedTime * 0.07;
      torusKnotMesh.rotation.y = elapsedTime * 0.10;

      // ── Inner Crystal Counter-Rotation ──
      innerCrystalMesh.rotation.x = -elapsedTime * 0.08;
      innerCrystalMesh.rotation.z = elapsedTime * 0.05;

      // ── Stage Floating Bobbing & Mouse Parallax Tilt ──
      stageGroup.position.y = Math.sin(elapsedTime * 0.5) * 0.08;
      stageGroup.rotation.y = mouseRef.current.x * 0.25;
      stageGroup.rotation.x = -mouseRef.current.y * 0.25;

      // Pulsing Opacity & Glow
      torusKnotMat.opacity = 0.62 + Math.sin(elapsedTime * 0.6) * 0.1;
      innerCrystalMat.opacity = 0.35 + Math.abs(Math.sin(elapsedTime * 0.5)) * 0.1;
      glowMesh.scale.setScalar(0.92 + Math.sin(elapsedTime * 0.5) * 0.04);

      // Ultra-slow particle rotation
      particles.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Responsive Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      torusKnotGeo.dispose();
      torusKnotMat.dispose();
      innerCrystalGeo.dispose();
      innerCrystalMat.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '420px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5,
        cursor: 'grab',
      }}
    />
  );
};

export default DevInfinity3DLogo;
