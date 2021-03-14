export const hideLongText = (text = '', maxSize) => {
  if (text.length < maxSize) {
    return text;
  }

  return text.substring(0, maxSize - 1) + '...';
};

export const getSlug = (text) => {
  return text?.split(' ').join('-');
};

export const getIdFromSlug = (text) => {
  return text.split('-')[0];
};
