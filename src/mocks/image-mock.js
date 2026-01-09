/* eslint-disable @typescript-eslint/no-require-imports */
const { createElement } = require('react');

/**
 * Мокаем next/image как обычный <img>
 * чтобы обходить оптимизацию Next
 */
function NextImage(props) {
  const { src, alt, ...rest } = props;
  return createElement('img', {
    src: typeof src === 'string' ? src : '',
    alt,
    ...rest,
  });
}

module.exports = NextImage;
