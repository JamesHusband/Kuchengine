export const attachCanvas = (canvas: HTMLCanvasElement, container: HTMLDivElement) => {
  if (!container.contains(canvas)) {
    canvas.style.display = 'block';
    container.appendChild(canvas);
  }
};
