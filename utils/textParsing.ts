export const textParser = (text: string) => {
  if (!text.length) {
      return [];
  }
  const lines = text.split("\n");
  return lines.map(lineParse);
};

const lineParse = (line: string) => {
  const lineArr = line.split(";");
  const question = lineArr.splice(0, 1);
  const answer = lineArr.join(";");

  return {
    front: question.join(''),
    back: answer,
  };
};
