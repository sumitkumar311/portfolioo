import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const circleRef = useRef(null);
  const magnetsRef = useRef([]);

  useEffect(() => {
    const circle = circleRef.current;

    let mouse = { x: 0, y: 0 };
    let circlePos = { x: 0, y: 0 };
    let velocity = { x: 0, y: 0 };
    let xprev = 0;
    let yprev = 0;
    const activationDistance = 30;

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const xdiff = e.clientX - xprev;
      const ydiff = e.clientY - yprev;

      velocity.x = xdiff;
      velocity.y = ydiff;

      xprev = e.clientX;
      yprev = e.clientY;

      let isInsideAnyMagnet = false;
      const resizeCircle = (size) => {
        gsap.to(circle, {
          width: `${size}px`,
          height: `${size}px`,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      let targetSize = 10; // Default size
      magnetsRef.current.forEach((magnet) => {
        const rect = magnet.getBoundingClientRect();
        const magnetCenterX = rect.left + rect.width / 2;
        const magnetCenterY = rect.top + rect.height / 2;

        const distX = e.clientX - magnetCenterX;
        const distY = e.clientY - magnetCenterY;
        const distance = Math.sqrt(distX * distX + distY * distY);

        if (distance < activationDistance) {
          isInsideAnyMagnet = true;

          const moveX = distX * 0.6;
          const moveY = distY * 0.6;

          gsap.to(magnet, {
            x: moveX,
            y: moveY,
            duration: 0.6,
            ease: "elastic.out(1, 0.75)",
          });

          // Calculate size based on distance
          const sizeRange = 50 - 10; // Max size - Min size
          const distanceRatio = 1 - (distance / activationDistance);
          targetSize = Math.max(10, 10 + sizeRange * distanceRatio);
        } else {
          gsap.to(magnet, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          });
        }
      });

      // Smoothly interpolate to the target size
      resizeCircle(targetSize);
    };

    const tick = () => {
      circlePos.x += (mouse.x - circlePos.x) * 0.1;
      circlePos.y += (mouse.y - circlePos.y) * 0.1;

      velocity.x *= 0.9;
      velocity.y *= 0.9;

      const wobbleX = 1 + velocity.x * 0.02;
      const wobbleY = 1 + velocity.y * 0.02;

      gsap.set(circle, {
        x: circlePos.x,
        y: circlePos.y,
        scaleX: gsap.utils.clamp(0.9, 1.6, wobbleX),
        scaleY: gsap.utils.clamp(0.9, 1.6, wobbleY),
      });
    };

    // Delay magnet detection to ensure DOM is loaded
    setTimeout(() => {
      magnetsRef.current = Array.from(document.querySelectorAll(".magnetic"));
    }, 100);

    window.addEventListener("mousemove", handleMouseMove);
    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className="minicircle pointer-events-none w-[10px] h-[10px] bg-white rounded-full mix-blend-difference fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-50"
    />
  );
};

export default CustomCursor;