import { parseXML } from './utils.js';

export const xmlApiFetch = (url) => {
  return fetch(url)
    .then(response => response.text())
    .then((xmlResponse) => {
      return parseXML(xmlResponse);
    });
}
