# expo-svg-uri

Render SVG images in Expo app from an URL or a static file

## Install

```bash
npm install --save expo-svg-uri

OR

yarn add expo-svg-uri
```

## Props

| Prop         | Type          | Default                                      | Note                                                      |
| ------------ | ------------- | -------------------------------------------- | --------------------------------------------------------- |
| `source`     | `ImageSource` |                                              | Same kind of `source` prop that `<Image />` component has |
| `svgXmlData` | `String`      |                                              | You can pass the SVG as String directly                   |
| `fill`       | `Color`       |                                              | Overrides all fill attributes of the svg file             |
| `fillAll`    | `Boolean`     | Adds the fill color to the entire svg object |

## Usage

Here's a simple example:

```javascript
import SvgUri from "expo-svg-uri";

const TestSvgUri = () => (
  <View style={styles.container}>
    <SvgUri
      width="200"
      height="200"
      source={{
        uri: "http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
      }}
    />
  </View>
);
```

or a static file

```javascript
<SvgUri width="200" height="200" source={require("./img/homer-simpson.svg")} />
```
