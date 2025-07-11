import { useMemo, useState } from "react";

const Counter = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const countone = () => {
     setCountOne(countOne + 1);
  };

  const counttwo = () => {
    setCountTwo(countTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      <button onClick={countone}>one:{countOne}</button>
      <br />
      <span>{isEven ? "even" : "odd"}</span>
      <button onClick={counttwo}>two:{countTwo}</button>
    </div>
  );
};

export default Counter;
