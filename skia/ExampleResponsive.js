import React, {useState, useEffect} from "react";
import {
  Canvas,
  Fill,
  Group,
  Rect,
  rect,
  useValue,
  useComputedValue,
  Circle
} from "@shopify/react-native-skia";
const Example = () => {
    const [h, setHeight] = useState()
    const [w, setWidth] = useState()
    const size = useValue({ width: 0, height: 0 });
    const width = useComputedValue(() => {
    // console.log("width", size.current.width)
    setWidth(size.current.width)
    return size.current.width
    }, [size]);
    const height = useComputedValue(() => {
    // console.log("height", size.current.height)
    setHeight(size.current.height)
    return size.current.height
    }, [size]);
    useEffect(() => {
    // setHeight(height)
    console.log('height', h)
    }, [h])
    useEffect(() => {
    // setWidth(size.current.width)
    console.log('width', w)
    }, [w])
  

  return (
    <Canvas style={{ flex: 1 }} onSize={size}>
    <Group>
      <Fill color="magenta" />
      {/* <Rect color="cyan" rect={rct} /> */}
      <Rect
        x={0}
        y={0}
        width={size.current.width}
        height={size.current.height / 2}
        color="red"
      />
      <Circle r={128} cx={w/2} cy={h / 2} color="green" />

    </Group>
    </Canvas>
  );
};

export default Example