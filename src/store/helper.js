export const promisifyLocalStorage = async (callback, ...args) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(callback(...args));
    }, 1000);
  });
};
