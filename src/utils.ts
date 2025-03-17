import { DOMParser } from "@xmldom/xmldom";

export const isValidSvg = (data: string): boolean => {
  try {
    const doc = new DOMParser({
      onError: (level, msg) => {
        console.log(`expo-svg-uri -> isValidSvg -> onError [${level}]:`, msg);
      },
    }).parseFromString(data, "text/xml");
    return !!doc.getElementsByTagName("svg").length;
  } catch (error) {
    return false;
  }
};
