export function animateWaves(waves) {
  let phase = 0;

  function updateWave(wave, index) {
    const amplitude = 15 + index * 10;
    const frequency = 0.02;
    const speed = 0.05;
    const points = [];

    for (let i = 0; i <= 360; i += 5) {
      const angle = (i * Math.PI) / 180;
      const x = 50 + (30 + amplitude * Math.sin(phase + index)) * Math.cos(angle);
      const y = 50 + (30 + amplitude * Math.sin(phase + index)) * Math.sin(angle);
      points.push(`${x},${y}`);
    }

    const path = wave.querySelector('path');
    path.setAttribute('d', `M${points.join('L')}Z`);
  }

  function animate() {
    phase += 0.05;
    waves.forEach((wave, index) => updateWave(wave, index));
    requestAnimationFrame(animate);
  }

  animate();
}