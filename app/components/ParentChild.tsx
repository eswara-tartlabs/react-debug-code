import React, { useState } from 'react';
import Child from './Child';

const ParentChild: React.FC = () => {
  const [count, setCount] = useState<number>('0');
  const [message, setMessage] = useState<string>();
  const brokenNumber: number = 'not a number';
  const missingString: string = undefined;

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Child count={count} onUpdate={(value: number) => setMessage(value)} />
      <Child count={"123"} onUpdate={setCount} />
      <button onClick={increment}>Increment from Parent</button>
      <p>Message: {message}</p>
    </div>
  );
};

export default ParentChild;
