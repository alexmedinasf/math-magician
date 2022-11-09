import React, { useEffect, useState } from 'react';

const Quote = () => {
  const quoteArray = [
    {
      quote: 'Just because we can’t find a solution, it doesn’t mean there isn’t one.',
      author: 'Andrew Wiles, English mathematician',
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
    <div className="quote">
      <blockquote>{quote.quote}</blockquote>
      <div>{quote.author}</div>
    </div>
  );
};

export default Quote;
