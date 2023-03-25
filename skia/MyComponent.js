import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import {Canvas, Image, useCanvasRef, Circle, useValue,} from "@shopify/react-native-skia"

export default function MyComponent() {
  const size = useValue({ width: 0, height: 0 });

  useEffect(() => {
    console.log(size.current.height)
  }, [size])
  

  return (
    <Canvas style={{ flex: 1, backgroundColor:'blue', height: 100 }} onSize={size}>
      <Circle r={128} cx={128} cy={size.current.height / 2} color="red" />
    </Canvas>
  )
}