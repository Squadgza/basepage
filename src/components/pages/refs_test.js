import { useEffect, useRef, useState } from 'react';

export default function CustomTextInput() {
  const bottomRef = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const myInterval = () => {
      setTimeout(
        () => {
          setMessages([...messages, messages.length]);
        },
        1000,
      );
    }
    if (messages.length < 60) myInterval();

    // scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div style={{
      marginLeft: "30px",
      fontSize: "24px",
      color: 'purple'
    }}>
      <h2>Top of the page</h2>
      <div>
        {messages.map((message, index) => {
          return <p key={index} id={index}>{message}</p>;
        })}

        <div ref={bottomRef} />
      </div>
      <h3>Bottom of a page</h3>
      <button onClick={goToTop}>Go To Top</button>
    </div>
  );
}
