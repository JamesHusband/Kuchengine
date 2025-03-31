export const detachCanvas = (canvas: HTMLCanvasElement, container: HTMLDivElement) => {
  if (container.contains(canvas)) {
    container.removeChild(canvas);
    canvas.style.display = 'none';
  }
};
