export function getStorage(key) {
  const data = localStorage.getItem(key);

  if (data && typeof data !== "undefined" && data !== "undefined") {
    return data;
  } else {
    return null;
  }
}

export function storeData(key, value) {
  localStorage.setItem(key, value);
}

export function removeData(key) {
  localStorage.removeItem(key);
}
