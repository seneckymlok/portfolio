import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimatedBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const scene = new THREE.Scene();
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0xffffff, 0);
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Create noise texture
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d')!;
        for (let i = 0; i < 256; i++) {
            for (let j = 0; j < 256; j++) {
                ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.15})`;
                ctx.fillRect(i, j, 1, 1);
            }
        }

        // Particle system
        const particleCount = 200;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 150;
            positions[i + 1] = (Math.random() - 0.5) * 150;
            positions[i + 2] = (Math.random() - 0.5) * 100;

            velocities[i] = (Math.random() - 0.5) * 0.3;
            velocities[i + 1] = (Math.random() - 0.5) * 0.3;
            velocities[i + 2] = (Math.random() - 0.5) * 0.3;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            color: 0x000000,
            size: 0.8,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.2,
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Add animated lines
        const lineGeometry = new THREE.BufferGeometry();
        const linePositions = new Float32Array(6);
        lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x000000,
            transparent: true,
            opacity: 0.1,
        });
        const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
        scene.add(lines);

        let time = 0;
        let animationId: number;

        const animate = () => {
            animationId = requestAnimationFrame(animate);
            time += 0.001;

            const positionsAttr = geometry.getAttribute('position');
            const posArray = positionsAttr.array as Float32Array;

            for (let i = 0; i < particleCount * 3; i += 3) {
                posArray[i] += velocities[i] * 0.5;
                posArray[i + 1] += velocities[i + 1] * 0.5;
                posArray[i + 2] += Math.sin(time + i) * 0.02;

                if (Math.abs(posArray[i]) > 100) {
                    posArray[i] = -posArray[i];
                    velocities[i] *= -1;
                }
                if (Math.abs(posArray[i + 1]) > 100) {
                    posArray[i + 1] = -posArray[i + 1];
                    velocities[i + 1] *= -1;
                }
            }

            positionsAttr.needsUpdate = true;

            particles.rotation.x += 0.00005;
            particles.rotation.y += 0.0001;

            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            if (containerRef.current?.contains(renderer.domElement)) {
                containerRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-10 bg-white"
            style={{ pointerEvents: 'none' }}
        />
    );
};

export default AnimatedBackground;
