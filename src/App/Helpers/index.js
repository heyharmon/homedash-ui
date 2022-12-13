export const appendToSet = (str, set) => {
  if (set.trim().length) {
    set += ` ${str}`;
  } else {
    set = `${str}`;
  }
  return set;
};

export const extractObjectKeys = (obj, keys) => {
  const objectEntries = Object.entries(obj);
  const newObject = {};
  for (const [key, value] of objectEntries) {
    if (keys.includes(key)) {
      newObject[key] = value;
    }
  }
  return newObject;
};

export const toTitleCase = (str) => {
  if (!str) return;
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
