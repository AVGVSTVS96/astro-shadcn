import React from 'react';
import Typed from 'react-typed';

const TypingAnimation: React.FC = () => {
  return (
    <Typed
      strings={['Bassim Shahidy']}
      typeSpeed={100}
      cursorChar="|"
    />
  );
};

export default TypingAnimation;