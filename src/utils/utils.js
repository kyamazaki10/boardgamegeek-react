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

export const filterAndJoinArray = (array, separatorString) => {
  let separator = separatorString ? separatorString : ' ';

  return array.filter(element => element).join(separator);
}

export const truncateText = (html) => {
  return html.split(' ').slice(0, 130).join(' ') + '... ';
};

export const redirectUrl = (path, id) => {
  window.location = `/${path}/${id}`;
}
