const testByReg = (text: string, pattern: RegExp) => {
  const reg = new RegExp(pattern);
  const space = text.trim() === '';

  return reg.test(text) || space;
};

export default testByReg;
