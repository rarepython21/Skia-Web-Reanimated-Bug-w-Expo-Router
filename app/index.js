import { StyleSheet, Text, View } from "react-native";
import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";
import { version } from 'canvaskit-wasm/package.json';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <View style={{flex:1, backgroundColor:'', width: '100%'}}>
          <WithSkiaWeb
          opts={{ locateFile: (file) => `https://cdn.jsdelivr.net/npm/canvaskit-wasm@${version}/bin/full/${file}` }}
          getComponent={() => import("../skia/ExampleReanimateResizeOnly")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    // width: '100%'
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    width: '100%'
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
