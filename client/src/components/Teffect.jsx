import { useState, useEffect } from 'react';

function TypingEffect(prop) {
  const [text, setText] = useState('');
  const originalText = prop.text;

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setText(originalText.slice(0, currentIndex));
      currentIndex++;

      if (currentIndex > originalText.length) {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <h1 className="linear">
      {text}
    </h1>
  );
}

export default TypingEffect;
