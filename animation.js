// ANimation for background image. 
const duration = 4000; // animation duration in ms
const bgLayer = document.querySelector('.bg-fade-layer');
const startTime = performance.now();

function animate(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Linear interpolation for opacity, blur, and scale
    bgLayer.style.opacity = progress;
    bgLayer.style.filter = `blur(${10 * (1 - progress)}px)`;
    const scale = 1.05 - 0.05 * progress;
    bgLayer.style.transform = `scale(${scale})`;

    if (progress < 1) {
        requestAnimationFrame(animate);
    }
}

requestAnimationFrame(animate);

// 