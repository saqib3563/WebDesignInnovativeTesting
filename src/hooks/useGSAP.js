import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = (callback, deps = [], selector = null) => {
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    let ctx;
    const timer = setTimeout(() => {
      ctx = gsap.context(callback);
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      if (ctx) {
        ctx.revert();
      }
      if (selector) {
        gsap.killTweensOf(selector);
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger && trigger.trigger.matches && trigger.trigger.matches(selector)) {
            trigger.kill();
          } 
        });
      }
    };
  }, deps);
};