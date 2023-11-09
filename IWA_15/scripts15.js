const data = {
    lists: [
      ["first", [15, 11, 13, 7, 5]],
      ["second", [2, 6, 8, 4, 14, 12, 10]],
      ["third", [9, 3, 1]],
    ],
  };
  
  const result = [];
  
  const extractBiggest = () => {
    const first = data.lists[0][1];
    const second = data.lists[1][1];
    const third = data.lists[2][1];
  
    const firstLast = first[first.length - 1] || -Infinity;
    const secondLast = second[second.length - 1] || -Infinity;
    const thirdLast = third[third.length - 1] || -Infinity;
  
    if (firstLast >= secondLast && firstLast >= thirdLast) {
      return first.pop();
    }
  
    if (secondLast >= firstLast && secondLast >= thirdLast) {
      return second.pop();
    }
  
    if (thirdLast >= firstLast && thirdLast >= secondLast) {
      return third.pop();
    }
  };
  
  for (let i = 0; i < 15; i++) {
    result.push(extractBiggest());
  }
  
  console.log(result);