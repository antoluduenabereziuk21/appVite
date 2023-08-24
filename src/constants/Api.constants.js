export const API_CAT = {
  CAT_ENDPOINT_IMAGE_URL: `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`,
  CAT_ENDPOINT__RAMDOM_FACT: `https://catfact.ninja/fact`,
  CAT_PREFIX_IMAGE_URL: "https://cataas.com",

  RAMDOM_FACT: function () {
    return `${this.CAT_ENDPOINT__RAMDOM_FACT}`;
  },
  IMAGE_URL: function () {
    return `${this.CAT_ENDPOINT_IMAGE_URL}`;
  },
  PREFIX_IMAGE_URL: function () {
    return `${this.CAT_ENDPOINT_IMAGE_URL}`;
  },
};
