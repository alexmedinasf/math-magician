import React, { useEffect, useState } from 'react';

const Quote = () => {
  const quoteArray = [
    {
      quote: 'Just because we can’t find a solution, it doesn’t mean there isn’t one.',
      author: 'Andrew Wiles, English mathematician',
    },
    {
      quote: 'Mathematics is a place where you can do things which you can’t do in the real world.',
      author: 'Marcus du Sautoy',
    },
    {
      quote: 'Millions saw the apple fall, but Newton asked why.',
      author: 'Bernard Baruch, American financier, philanthropist and statesman',
    },
  ];

  const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quoteArray.length);
    return quoteArray[randomIndex];
  };

  const [quote, setQuote] = useState(randomQuote);

  useEffect(() => {
    setQuote(randomQuote);
  }, []);

  return (
    <div className="Quote">
      <blockquote>{quote.quote}</blockquote>
      <div>{quote.author}</div>
    </div>
  );
};

export default Quote;