import React from "react";
import { Image, ImageSourcePropType } from "react-native";

import { SvgProps } from "react-native-svg";
import { SvgCss } from 'react-native-svg/css';
import { AdditionalProps } from "react-native-svg/lib/typescript/xml";

import { isValidSvg } from "./utils";

export type SvgUriProps = SvgProps & AdditionalProps & {
  source?: ImageSourcePropType | null;
  xml?: string | null;
  loading?: React.JSX.Element;
};

const SvgUri = (props: SvgUriProps) => {
  const { source, xml } = props;
  const [loading, setLoading] = React.useState<boolean>(true);
  const [xmlData, setXmlData] = React.useState<string | null>(null);

  React.useEffect(() => {
    setLoading(true);
    if (xml) {
      if (isValidSvg(xml)) {
        setXmlData(xml);
      }
      else {
        onError('Please provide a valid svg xml');
      }
      setLoading(false);
    }
    else if (source) {
      const { uri } = Image.resolveAssetSource(source);
      fetchSvg(uri);
    }
    else {
      onError('Please provide a valid svg xml or a source');
      setLoading(false);
    }
  }, [xml, source]);

  const onError = (error: string) => {
    props.onError && props.onError(new Error(error));
  }

  const fetchSvg = async (uri: string) => {
    try {
      const response = await fetch(uri);
      const data = await response.text();
      if (isValidSvg(data)) {
        setXmlData(data);
      }
      else {
        onError('Please provide a valid svg xml');
      }
      setLoading(false);
    } catch (e) {
      onError('Failed to fetch svg: ' + e);
      setLoading(false);
    }
  }

  if (loading) {
    return props.loading ?? null;
  }
  else if (xmlData) {
    return <SvgCss xml={xmlData} {...props} />
  }
  else {
    return props.fallback ?? null;
  }
}

export default SvgUri;
