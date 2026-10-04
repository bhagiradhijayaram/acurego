import Lenis from "lenis";

let lenis;

export const initSmoothScroll = () => {
  lenis = new Lenis({
    duration: 0.8,
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1,
  });

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);

  return () => {
    lenis.destroy();
  };
};
