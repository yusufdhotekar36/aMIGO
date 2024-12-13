import { initializeNavigation } from './navigation.js';
import { initializeTextGeneration } from './textGeneration.js';
import { initializeMoodDetection } from './moodDetection.js';
import { initializeFaceRecognition } from './faceRecognition.js';
import { createWaveLogo } from './components/WaveLogo.js';
import { animateWaves } from './utils/waveAnimation.js';

document.addEventListener('DOMContentLoaded', () => {
  const { waves } = createWaveLogo();
  animateWaves(waves);
  
  initializeNavigation();
  initializeTextGeneration();
  initializeMoodDetection();
  initializeFaceRecognition();
});