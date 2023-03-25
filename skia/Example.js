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
  Circle,
  runTiming,
  Easing,
  Text,
  useFont,
  useTouchHandler,
} from "@shopify/react-native-skia";

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
    console.log('height', h)
    }, [h])

    useEffect(() => {
    // setWidth(size.current.width)
    console.log('width', w)
    }, [w])

    //path params:
    const radius = w/4
    const strokeWidth = 30
    const innerRadius = radius - strokeWidth / 2;

    const path = Skia.Path.Make();
    path.addCircle(w/2, h/2, innerRadius);


    //animation setup:
    const end = .7
    const r = useValue(0);
    const ani = () => {
      console.log('ani')
      r.current = 0
      runTiming(r, end, {
        duration: 3250,
        easing: Easing.inOut(Easing.cubic),
      });
    }

    useEffect(() => {
        ani()
    }, [r]);
  
    //text setup:
    const fontSize = 32;
    const font = useFont(require('../fonts/Roboto-Light.ttf'), fontSize);

    //touch handle:
    const touch = useTouchHandler({
      onStart: ({ x, y }) => {
        ani()
      },
    });

    //loop:
    // useComputedValue(() => {
    //   console.log(r.current)
    //   if (r.current == end){
    //     ani()
    //   }
    // }, [r]);

    

  return (
    <Canvas style={{ flex: 1 }} onSize={size} onTouch={touch} mode='continuous'>
    <Group>
      <Path
          path={path}
          color="rgba(0, 0, 0, 0.03)"
          style="stroke"
          strokeJoin="round"
          strokeWidth={strokeWidth*1.2}
          strokeCap="round"
          start={0}
          end={1}
          opacity={10}
        />
      <Path
          path={path}
          color="orange"
          style="stroke"
          strokeJoin="round"
          strokeWidth={strokeWidth}
          strokeCap="round"
          start={0}
          end={r}
        />
      <Text
          x={100}
          y={100}
          text={"test"}
          font={font}
          size={32}
          opacity={100}
        />
    </Group>
    </Canvas>
  );
};

export default Example