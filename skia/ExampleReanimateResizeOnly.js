import React, {useState, useEffect} from "react";
import {
  Canvas,
  Skia,
  Fill,
  Group,
  Rect,
  Path,
  rect,
  useValue,
  useComputedValue,
  Circle
} from "@shopify/react-native-skia";
import {
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withRepeat,
    withTiming,
    Easing,
} from "react-native-reanimated";

const Example = () => {

    //responsive setup:
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
    // console.log('height', h)
    }, [h])
    useEffect(() => {
    // setWidth(size.current.width)
    // console.log('width', w)
    }, [w])

    //path params:
    const radius = w/4
    const strokeWidth = 20
    const innerRadius = radius - strokeWidth / 2;

    const path = Skia.Path.Make();
    path.addCircle(w/2, h/2, innerRadius);

    //reanimated setup:
    const end = 1
    const r = useSharedValue(0);
    const ani = () => {
      r.value = withRepeat(withTiming(end, { duration: 10000 }), -1);
    }

    useEffect(() => {
        // ani()
        console.log(r.value)
    }, [r.value]);

    const animate = useComputedValue(() => {
      // console.log("width", size.current.width)
      ani()
    }, [r]);
  

  return (
    <Canvas style={{ flex: 1 }} onSize={size} mode='continuous'>
    <Group>
      
      <Path
          path={path}
          color="orange"
          style="stroke"
          strokeJoin="round"
          strokeWidth={strokeWidth}
          strokeCap="round"
          start={0}
          end={r.value}
        />
    </Group>
    </Canvas>
  );
};

export default Example