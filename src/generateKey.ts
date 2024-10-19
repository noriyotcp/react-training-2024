// cf. https://www.codemzy.com/blog/random-unique-id-javascript
export const randomId = (length = 6) => {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};
