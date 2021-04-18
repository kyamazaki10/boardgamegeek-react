import * as xml2js from 'xml2js';

export const parseXML = (xml) => {
  let json = {};

  xml2js.parseString(xml, function (error, result) {
    json = (error) ? {} : result;
  });

  return json;
};

export const decodeHTML = (html) => {
  const text = document.createElement('textarea');
  text.innerHTML = html;

  return text.value;
};

export const filterAndJoinArray = (array, separatorString) => {
  const separator = separatorString ? separatorString : ' ';

  return array.filter(element => element).join(separator);
};

export const convertToNumber = (value) => {
  const valueInt = parseInt(value);

  return isNaN(valueInt) ? null : valueInt;
}

export const redirectUrl = (path, id) => {
  window.location = `/${path}/${id}`;
}
