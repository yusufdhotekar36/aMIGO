export function createWaveLogo() {
  const logo = document.querySelector('.logo');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'waves-logo');
  svg.setAttribute('viewBox', '0 0 100 100');

  // Create circle
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', '50');
  circle.setAttribute('cy', '50');
  circle.setAttribute('r', '20');
  circle.setAttribute('fill', '#9333ea');

  // Create wave groups
  const waves = Array.from({ length: 3 }, (_, i) => {
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.setAttribute('class', `wave-group wave-${i + 1}`);
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', '#9333ea');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('opacity', '0.3');
    
    group.appendChild(path);
    return group;
  });

  // Append elements
  svg.appendChild(circle);
  waves.forEach(wave => svg.appendChild(wave));

  // Replace existing logo
  const existingLogo = logo.querySelector('.waves-logo');
  if (existingLogo) {
    logo.replaceChild(svg, existingLogo);
  }

  return { svg, waves };
}