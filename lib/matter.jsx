// components/MatterCnvas.js
'use client';
import { useEffect, useRef } from "react";
import Matter from "matter-js";
import $ from "jquery";

const MatterCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    Matter.use("matter-attractors");
    Matter.use("matter-wrap");

    // Create engine
    const engine = Matter.Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engine.world.gravity.scale = 0.1;

    // Create renderer
    const render = Matter.Render.create({
      element: canvas,
      engine: engine,
      options: {
        showVelocity: false,
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "transparent",
      },
    });

    // Create runner
    const runner = Matter.Runner.create();

    // Create a body with an attractor
    const attractiveBody = Matter.Bodies.circle(
      render.options.width / 2,
      render.options.height / 2,
      Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
      {
        render: {
          fillStyle: `#000`,
          strokeStyle: `#000`,
          lineWidth: 0,
        },
        isStatic: true,
        plugin: {
          attractors: [
            function (bodyA, bodyB) {
              return {
                x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                y: (bodyA.position.y - bodyB.position.y) * 1e-6,
              };
            },
          ],
        },
      }
    );

    Matter.World.add(engine.world, attractiveBody);

    // Add bodies to be attracted
    for (let i = 0; i < 60; i += 1) {
      let x = Matter.Common.random(0, render.options.width);
      let y = Matter.Common.random(0, render.options.height);
      let s =
        Matter.Common.random() > 0.6 ? Matter.Common.random(10, 80) : Matter.Common.random(4, 60);
      let polygonNumber = Matter.Common.random(3, 6);

      const body = Matter.Bodies.polygon(x, y, polygonNumber, s, {
        mass: s / 20,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.round(Math.random() * 360),
        render: {
          fillStyle: "#222222",
          strokeStyle: `#000000`,
          lineWidth: 2,
        },
      });

      Matter.World.add(engine.world, body);

      // Create and add circles with varying properties
      for (let radius of [Matter.Common.random(2, 8), Matter.Common.random(2, 20), Matter.Common.random(2, 30)]) {
        const circle = Matter.Bodies.circle(x, y, radius, {
          mass: Math.random() > 0.5 ? 0.1 : 6,
          friction: 0,
          frictionAir: Math.random() > 0.5 ? 0.01 : 0.6,
          render: {
            fillStyle: Math.random() > 0.3 ? `#27292d` : `#444444`,
            strokeStyle: `#000000`,
            lineWidth: 2,
          },
        });

        Matter.World.add(engine.world, circle);
      }
    }

    // Add mouse control
    const mouse = Matter.Mouse.create(render.canvas);

    Matter.Events.on(engine, "afterUpdate", function () {
      if (!mouse.position.x) return;
      // Smoothly move the attractor body towards the mouse
      Matter.Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12,
      });
    });

    // Start the engine and render
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    // Handle window resize
    const setWindowSize = () => {
      const newDimensions = {
        width: $(window).width(),
        height: $(window).height(),
      };

      render.canvas.width = newDimensions.width;
      render.canvas.height = newDimensions.height;
    };

    const debounce = (func, wait) => {
      let timeout;
      return function () {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
      };
    };

    $(window).resize(debounce(setWindowSize, 250));
    setWindowSize();

    return () => {
      // Cleanup on component unmount
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      $(window).off("resize", debounce(setWindowSize, 250));
    };
  }, []);

  return (
    <div id="wrapper-canvas">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default MatterCanvas;
