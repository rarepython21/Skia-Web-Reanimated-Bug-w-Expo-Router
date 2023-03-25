# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 About This Repo

I've setup this repo to demonstrate an error I am having setting up a Text object in React Native Skia Web in a project using Expo Router. Would appreciate any and all assistance!

## 📝 Steps To Reproduce

1. `npx create-expo-app@latest -e with-router`
2. skipped `yarn add @shopify/react-native-skia` or `npm install @shopify/react-native-skia`
3. `expo install @shopify/react-native-skia`
4. `yarn setup-skia-web`
5. `npm install copy-webpack-plugin --save-dev`
6. `npm i node-polyfill-webpack-plugin`
7. setup `webpack.config.js` as outlined below
8.` yarn add react-native-level-fs`
9. `yarn add path-browserify`
10. added `"fs": "react-native-level-fs", "path": "path-browserify",` to my dependencies in `package.json`
11. added skia to my `index.js` using [code splitting](https://shopify.github.io/react-native-skia/docs/getting-started/web#using-code-splitting)
12. `yarn add path-browserify` again
13. got this Uncaught Error: `Aborted(CompileError: WebAssembly.instantiate(): expected magic word 00 61 73 6d, found 3c 21 44 4f @+0). Build with -sASSERTIONS for more info.`
14. used [CDN](https://shopify.github.io/react-native-skia/docs/getting-started/web#using-a-cdn)
15. and add a Text object

```
       <Text
          x={100}
          y={100}
          text={"test"}
          font={font}
          size={32}
          opacity={100}
        />
```

```
    //text setup:
    const fontSize = 32;
    const font = useFont(require('../fonts/Roboto-Light.ttf'), fontSize);
```

## ⚠️ The Error

```
Uncaught Error
_Image.default.resolveAssetSource is not a function
```
