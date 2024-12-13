export function initializeFaceRecognition() {
  const video = document.getElementById('face-video');
  const faceResult = document.querySelector('.face-result');
  const nameInput = document.querySelector('.name-input');
  const nameInputField = nameInput.querySelector('input');
  const saveButton = nameInput.querySelector('button');

  const knownFaces = new Map();

  async function setupCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      video.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
      faceResult.textContent = 'Error accessing camera';
    }
  }

  function detectFace() {
    // Simulate face detection
    const isKnownFace = Math.random() > 0.5;
    
    if (isKnownFace) {
      const names = Array.from(knownFaces.keys());
      if (names.length > 0) {
        const name = names[Math.floor(Math.random() * names.length)];
        faceResult.textContent = `Welcome back, ${name}!`;
        nameInput.classList.add('hidden');
      } else {
        handleUnknownFace();
      }
    } else {
      handleUnknownFace();
    }
  }

  function handleUnknownFace() {
    faceResult.textContent = 'Unknown face detected';
    nameInput.classList.remove('hidden');
  }

  saveButton.addEventListener('click', () => {
    const name = nameInputField.value.trim();
    if (name) {
      knownFaces.set(name, Date.now());
      faceResult.textContent = `Nice to meet you, ${name}!`;
      nameInput.classList.add('hidden');
      nameInputField.value = '';
    }
  });

  setupCamera();
  setInterval(detectFace, 3000);
}