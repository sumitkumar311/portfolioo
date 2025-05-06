import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RollingText = ({ text, className, triggerSelector }) => {
  useEffect(() => {
    const words = document.querySelectorAll(`${triggerSelector} .word-wrapper`);

    if (words.length) {
      words.forEach((word, wordIndex) => {
        const letters = word.querySelectorAll('.roll-letter');
        
        gsap.set(letters, { 
          yPercent: 100,
          opacity: 0
        });

        gsap.to(letters, {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: triggerSelector,
            start: `top ${80 - wordIndex * 10}%`,
            end: `top ${30 - wordIndex * 10}%`,
            scrub: 1,
          }
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [triggerSelector]);

  return (
    <span className={className}>
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="word-wrapper" style={{display: 'inline-block', overflow: 'hidden', marginRight: '0.5rem'}}>
          {word.split('').map((letter, letterIndex) => (
            <span key={letterIndex} className="roll-letter" style={{display: 'inline-block'}}>
              {letter}
            </span>
          ))}
        </span>
      ))}
    </span>
    
  );
};

export default RollingText;