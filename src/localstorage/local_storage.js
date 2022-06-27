export function setItem(key, value) {
  // sessionStorage.setItem(key, JSON.stringify(value))
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key) {
  const value = sessionStorage.getItem(key) || undefined;

  if (value) {
    return JSON.parse(value);
  }
  return null;
}

export function deleteItem(key) {
  sessionStorage.removeItem(key);
}

export function clear() {
  sessionStorage.clear();
  localStorage.clear();
}
