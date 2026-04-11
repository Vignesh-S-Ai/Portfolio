import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function Background() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: '#00f3ff',
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.3,
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.1,
              },
            },
            size: {
              value: { min: 1, max: 3 },
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.5,
              },
            },
            links: {
              enable: true,
              distance: 150,
              color: '#00f3ff',
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: 'none',
              outModes: {
                default: 'bounce',
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'grab',
              },
              onClick: {
                enable: true,
                mode: 'push',
              },
            },
            modes: {
              grab: {
                distance: 200,
                links: {
                  opacity: 0.5,
                },
              },
              push: {
                quantity: 4,
              },
            },
          },
        }}
        className="w-full h-full"
      />
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
}