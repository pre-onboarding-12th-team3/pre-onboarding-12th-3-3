const testByReg = (text: string, pattern: RegExp) => {
  const reg = new RegExp(pattern);
  return reg.test(text);
};

export default testByReg;
