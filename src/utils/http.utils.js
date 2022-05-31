
export function setHeader({ client, key, value }) {
  if (value) client.defaults.headers.common[key] = value;
}

export function removeHeader(client, key) {
  delete client.defaults.headers.common[key];
}
