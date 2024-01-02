// KonvaCanvas.jsx
import  { useEffect } from 'react';
import { Stage, Layer, Rect, Circle } from 'react-konva';

const KonvaCanvas = () => {
  useEffect(() => {
    // Konva doesn't automatically redraw when the container resizes,
    // so we manually force a redraw when the component mounts.
    window.dispatchEvent(new Event('resize'));
  }, []);

  return (
    <Stage width={500} height={500} className="mx-auto">
      <Layer>
        {/* Add Konva shapes here */}
        <Rect
          width={100}
          height={50}
          fill="green"
          draggable
        />
        <Circle
          x={300}
          y={300}
          radius={50}
          fill="blue"
          draggable
        />
      </Layer>
    </Stage>
  );
}

export default KonvaCanvas;
