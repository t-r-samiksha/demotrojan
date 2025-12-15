// // "use client";
// // import { useEffect, useRef } from "react";

// // export default function CursorFX() {
// //   const canvasRef = useRef(null);
// //   const mouse = useRef({ x: 0, y: 0 });
// //   const particles = useRef([]);
// //   const pulses = useRef([]);
// //   const bolts = useRef([]);

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     const ctx = canvas.getContext("2d");

// //     const resize = () => {
// //       canvas.width = window.innerWidth;
// //       canvas.height = window.innerHeight;
// //     };

// //     resize();
// //     window.addEventListener("resize", resize);

// //     window.addEventListener("mousemove", (e) => {
// //       mouse.current.x = e.clientX;
// //       mouse.current.y = e.clientY;
// //     });

// //     window.addEventListener("click", () => {
// //       createLightning();
// //       pulses.current.push({ x: mouse.current.x, y: mouse.current.y, r: 0 });
// //     });

// //     const createParticle = () => ({
// //       x: mouse.current.x + Math.random() * 40 - 20,
// //       y: mouse.current.y + Math.random() * 40 - 20,
// //       vx: Math.random() * 0.5 - 0.25,
// //       vy: Math.random() * 0.5 - 0.25,
// //     });

// //     const createLightning = () => {
// //       const segments = [];
// //       let x = mouse.current.x;
// //       let y = mouse.current.y;

// //       for (let i = 0; i < 15; i++) {
// //         x += Math.random() * 30 - 15;
// //         y += Math.random() * 30 - 15;
// //         segments.push({ x, y });
// //       }
// //       bolts.current.push({ life: 10, segments });
// //     };

// //     const animate = () => {
// //       ctx.clearRect(0, 0, canvas.width, canvas.height);

// //       // NETWORK PARTICLES
// //       particles.current.push(createParticle());
// //       if (particles.current.length > 90) particles.current.shift();

// //       particles.current.forEach((p, i) => {
// //         p.x += p.vx;
// //         p.y += p.vy;

// //         ctx.fillStyle = "rgba(0,200,255,0.9)";
// //         ctx.beginPath();
// //         ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
// //         ctx.fill();

// //         for (let j = i + 1; j < particles.current.length; j++) {
// //           const p2 = particles.current[j];
// //           const d = Math.hypot(p.x - p2.x, p.y - p2.y);
// //           if (d < 100) {
// //             ctx.strokeStyle = `rgba(0,200,255,${1 - d / 100})`;
// //             ctx.lineWidth = 0.6;
// //             ctx.beginPath();
// //             ctx.moveTo(p.x, p.y);
// //             ctx.lineTo(p2.x, p2.y);
// //             ctx.stroke();
// //           }
// //         }
// //       });

// //       // NEURAL PULSE
// //       pulses.current.forEach((p, i) => {
// //         p.r += 3;
// //         ctx.strokeStyle = `rgba(0,200,255,${1 - p.r / 200})`;
// //         ctx.lineWidth = 2;
// //         ctx.beginPath();
// //         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
// //         ctx.stroke();
// //         if (p.r > 200) pulses.current.splice(i, 1);
// //       });

// //       // LIGHTNING BOLTS
// //       bolts.current.forEach((b, i) => {
// //         ctx.strokeStyle = `rgba(0,220,255,${b.life / 10})`;
// //         ctx.lineWidth = 2;
// //         ctx.beginPath();
// //         ctx.moveTo(mouse.current.x, mouse.current.y);
// //         b.segments.forEach((s) => ctx.lineTo(s.x, s.y));
// //         ctx.stroke();
// //         b.life--;
// //         if (b.life <= 0) bolts.current.splice(i, 1);
// //       });

// //       requestAnimationFrame(animate);
// //     };

// //     animate();

// //     return () => window.removeEventListener("resize", resize);
// //   }, []);

// //   return (
// //     <canvas
// //       ref={canvasRef}
// //       className="fixed inset-0 z-[999] pointer-events-none"
// //     />
// //   );
// // }

// "use client";
// import { useEffect, useRef } from "react";

// export default function CursorFX() {
//   const canvasRef = useRef(null);

//   const mouse = useRef({ x: 0, y: 0 });
//   const lastMouse = useRef({ x: 0, y: 0 });
//   const isMoving = useRef(false);

//   const particles = useRef([]);
//   const pulses = useRef([]);
//   const bolts = useRef([]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     window.addEventListener("mousemove", (e) => {
//       mouse.current.x = e.clientX;
//       mouse.current.y = e.clientY;

//       const dx = mouse.current.x - lastMouse.current.x;
//       const dy = mouse.current.y - lastMouse.current.y;

//       isMoving.current = Math.abs(dx) + Math.abs(dy) > 1;

//       lastMouse.current.x = mouse.current.x;
//       lastMouse.current.y = mouse.current.y;
//     });

//     window.addEventListener("click", () => {
//       createLightning();
//       pulses.current.push({ x: mouse.current.x, y: mouse.current.y, r: 0 });
//     });

//     const createParticle = () => ({
//       x: mouse.current.x + Math.random() * 40 - 20,
//       y: mouse.current.y + Math.random() * 40 - 20,
//       vx: Math.random() * 0.5 - 0.25,
//       vy: Math.random() * 0.5 - 0.25,
//       life: 60,
//     });

//     const createLightning = () => {
//       let x = mouse.current.x;
//       let y = mouse.current.y;
//       const segments = [];

//       for (let i = 0; i < 14; i++) {
//         x += Math.random() * 30 - 15;
//         y += Math.random() * 30 - 15;
//         segments.push({ x, y });
//       }
//       bolts.current.push({ life: 10, segments });
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       /* 🧠 SPAWN ONLY IF MOVING */
//       if (isMoving.current) {
//         particles.current.push(createParticle());
//         if (particles.current.length > 90) particles.current.shift();
//       }

//       /* 🌐 PARTICLES + NETWORK */
//       particles.current.forEach((p, i) => {
//         p.x += p.vx;
//         p.y += p.vy;
//         p.life--;

//         ctx.fillStyle = `rgba(0,200,255,${p.life / 60})`;
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
//         ctx.fill();

//         for (let j = i + 1; j < particles.current.length; j++) {
//           const p2 = particles.current[j];
//           const d = Math.hypot(p.x - p2.x, p.y - p2.y);
//           if (d < 100) {
//             ctx.strokeStyle = `rgba(0,200,255,${(1 - d / 100) * (p.life / 60)})`;
//             ctx.lineWidth = 0.6;
//             ctx.beginPath();
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(p2.x, p2.y);
//             ctx.stroke();
//           }
//         }
//       });

//       /* 🧹 CLEAN DEAD PARTICLES */
//       particles.current = particles.current.filter(p => p.life > 0);

//       /* 🧠 NEURAL PULSE */
//       pulses.current.forEach((p, i) => {
//         p.r += 3;
//         ctx.strokeStyle = `rgba(0,200,255,${1 - p.r / 200})`;
//         ctx.lineWidth = 2;
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.stroke();
//         if (p.r > 200) pulses.current.splice(i, 1);
//       });

//       /* ⚡ LIGHTNING */
//       bolts.current.forEach((b, i) => {
//         ctx.strokeStyle = `rgba(0,220,255,${b.life / 10})`;
//         ctx.lineWidth = 2;
//         ctx.beginPath();
//         ctx.moveTo(mouse.current.x, mouse.current.y);
//         b.segments.forEach(s => ctx.lineTo(s.x, s.y));
//         ctx.stroke();
//         b.life--;
//         if (b.life <= 0) bolts.current.splice(i, 1);
//       });

//       requestAnimationFrame(animate);
//     };

//     animate();

//     return () => window.removeEventListener("resize", resize);
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 z-[999] pointer-events-none"
//     />
//   );
// }

"use client";
import { useEffect, useRef } from "react";

export default function CursorFX() {
  const canvasRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const last = useRef({ x: 0, y: 0 });
  const moving = useRef(false);

  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    window.addEventListener("mousemove", (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      const dx = mouse.current.x - last.current.x;
      const dy = mouse.current.y - last.current.y;
      moving.current = Math.abs(dx) + Math.abs(dy) > 1;

      last.current.x = mouse.current.x;
      last.current.y = mouse.current.y;
    });

    const spawnParticle = () => ({
      x: mouse.current.x,
      y: mouse.current.y,
      vx: Math.random() * 0.6 - 0.3,
      vy: Math.random() * 0.6 - 0.3,
      life: 40,
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* 🟢 IDLE RETICLE */
      ctx.strokeStyle = "rgba(0,200,255,0.9)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, 10, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = "rgba(0,200,255,0.4)";
      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, 16, 0, Math.PI * 2);
      ctx.stroke();

      /* 🧠 ONLY SPAWN NETWORK WHEN MOVING */
      if (moving.current) {
        particles.current.push(spawnParticle());
        if (particles.current.length > 70) particles.current.shift();
      }

      /* 🌐 NETWORK */
      particles.current.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life--;

        ctx.fillStyle = `rgba(0,200,255,${p.life / 40})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.current.length; j++) {
          const q = particles.current[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 90) {
            ctx.strokeStyle = `rgba(0,200,255,${(1 - d / 90) * (p.life / 40)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      });

      /* 🧹 CLEANUP */
      particles.current = particles.current.filter(p => p.life > 0);

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[999] pointer-events-none"
    />
  );
}
