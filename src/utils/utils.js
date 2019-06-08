import * as xml2js from 'xml2js';

export const parseXML = (xml) => {
  let json = {};

  xml2js.parseString(xml, function (error, result) {
    json = (error) ? {} : result;
  });

  return json;
};

export const decodeHTML = (html) => {
  let text = document.createElement('textarea');
  text.innerHTML = html;

  return text.value;
};

export const truncateText = (html) => {
  return html.split(' ').slice(0, 130).join(' ') + '... ';
};
