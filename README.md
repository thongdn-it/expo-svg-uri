# expo-svg-uri

## Overview

`SvgUri` is a React Native component that allows rendering SVG images from either a URI source or raw XML data. It uses `react-native-svg` for rendering and supports additional props for customization. Now, this component works for both React Native Bare and Expo client applications.

[![npm][npm_image_url]][npm_url]
[![bundlephobia][bundlephobia_image_url]][bundlephobia_url]

## Features

- Load SVG from a remote URL or local asset
- Parse and validate SVG XML data
- Display a custom loading indicator while fetching
- Provide a fallback component if SVG fails to load
- Supports additional props from `react-native-svg`

## Installation

```bash
npm install --save expo-svg-uri

OR

yarn add expo-svg-uri

OR

pnpm add expo-svg-uri
```

## Usage

### Basic Example

```tsx
import SvgUri from "expo-svg-uri";

export default function Example() {
  return (
    <>
      {/* Load SVG from URL */}
      <SvgUri
        width={200}
        height={200}
        source={{
          uri: "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/heart.svg",
        }}
      />

      {/* Load SVG from local file */}
      <SvgUri
        width={200}
        height={200}
        source={require("@/assets/images/heart.svg")}
      />

      {/* Load SVG from XML string */}
      <SvgUri
        width={200}
        height={200}
        xml='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path d="M50,30c9-22 42-24 48,0c5,40-40,40-48,65c-8-25-54-25-48-65c 6-24 39-22 48,0 z" fill="#F00" stroke="#000"/>
        </svg>
        '
      />
    </>
  );
}
```

### Props

| Prop       | Type                          | Description                                          |
| ---------- | ----------------------------- | ---------------------------------------------------- |
| `source`   | `ImageSourcePropType \| null` | Remote or local source of the SVG file               |
| `xml`      | `string \| null`              | Raw SVG XML string                                   |
| `loading`  | `React.JSX.Element`           | Custom loading indicator while fetching              |
| `fallback` | `React.JSX.Element`           | Component displayed if SVG fails to load             |
| `onError`  | `(error: Error) => void`      | Callback when an error occurs                        |
| `...props` | `SvgProps & AdditionalProps`  | Any additional props for `react-native-svg` elements |

### Handling Errors

If an invalid SVG is provided, the `onError` prop will be triggered:

```tsx
<SvgUri
  source={{ uri: "https://example.com/invalid.svg" }}
  onError={(error) => console.error("SVG Error:", error)}
  fallback={<Text>Error loading SVG</Text>}
  loading={<Text>Loading...</Text>}
/>
```

## Notes

- This component requires `react-native-svg` to be installed.
- If using a remote URI, ensure your app has internet permissions enabled.
- Validate your SVG XML before passing it as a prop.

## License

This component is open-source and available under the MIT license.

## Author

`SvgUri` is developed by Thong Dang. You can contact me at thongdn.it@gmail.com.

If you like my project, you can [support me][buy_me_a_coffee_url] or star (like) for it.

<p align="center">
<img src="https://media.giphy.com/media/hXMGQqJFlIQMOjpsKC/giphy.gif" alt="expo-svg-uri-buy-me-a-coffee" style="aspect-ratio:385/405;" width="200"/>
</p>

[//]: # "reference links"
[buy_me_a_coffee_image_url]: https://media.giphy.com/media/hXMGQqJFlIQMOjpsKC/giphy.gif
[buy_me_a_coffee_url]: https://www.buymeacoffee.com/thongdn.it
[npm_image_url]: https://img.shields.io/npm/v/expo-svg-uri
[npm_url]: https://www.npmjs.com/package/expo-svg-uri
[bundlephobia_image_url]: https://badgen.net/bundlephobia/minzip/expo-svg-uri
[bundlephobia_url]: https://bundlephobia.com/result?p=expo-svg-uri
