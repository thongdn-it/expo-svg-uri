import React, { Component } from "react";
import { ImageURISource, StyleProp, ViewStyle } from "react-native";

interface SvgUriProps {
  /**
   * The width of the rendered svg
   */
  width?: number | string;

  /**
   * The height of the rendered svg
   */
  height?: number | string;

  /**
   * Source path for the .svg file
   * Expects a require('path') to the file or object with uri.
   * e.g. source={require('my-path')}
   * e.g. source={{ur: 'my-path'}}
   */
  source?: ImageURISource;

  /**
   * Direct svg code to render. Similar to inline svg
   */
  svgXmlData?: string;

  /**
   * Fill color for the svg object
   */
  fill?: string;

  /**
   * Invoked when load completes successfully.
   */
  onLoad?: Function;

  /**
   * Fill the entire svg element with same color
   */
  fillAll?: boolean;

  /**
   * Style of the view that surrounds the svg.
   */
  style?: StyleProp<ViewStyle>;
}

export default class SvgUri extends Component<SvgUriProps, {}> {}
