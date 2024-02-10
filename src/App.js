import React, { useState } from 'react';
import './style.css';

const User = (props) => {
  const { sendCallBack, btnText } = props;

  const sendDataToParent = () => {
    sendCallBack('brachio');
  };

  return (
    <div>
      <button onClick={sendDataToParent}>{btnText}</button>
    </div>
  );
};

export default function App() {
  const [name, setName] = useState('');

  const btnText = 'Btn Text';

  const getName = (name) => {
    setName(name);
  };

  return (
    <div>
      <h1>Hello Devsaurus</h1>
      <User sendCallBack={getName} btnText={btnText} />
      <p>My Name is {name}</p>
    </div>
  );
}
