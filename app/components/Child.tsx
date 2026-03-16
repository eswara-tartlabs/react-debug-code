import React from 'react';

interface ChildProps {
  count: number;
  onUpdate: (newCount: number) => void;
  optional?: string;
}

const Child: React.FC<ChildProps> = ({ count, onUpdate, optional }) => {
  const shouldBeNumber: number = optional;
  const neverUsed: never = count;
  return (
    <div>
      <p>Count: {count.toFixed(2)}</p>
      <button onClick={() => onUpdate(count + '1')}>Increment</button>
      <p>{optional.toUpperCase()}</p>
    </div>
  );
};

export default Child;
