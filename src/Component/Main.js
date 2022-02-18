import React from "react"

export default function Main() {

  const [Quotes,setQuotes] = React.useState({
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse"
  });

  const [list,setList] = React.useState([])
  const [counter,setCounter] = React.useState(1)

  function handle() {
    setQuotes({
      quote: list[counter].quote,
      author: list[counter].author
    });
    setCounter((x) => x+1);
}
  
  React.useEffect(() => {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(res => res.json())
      .then(data => {
         setList(data.quotes);
      });
  }, []);

  console.log(list);
  
  return(
      <div id="quote-box">
            <p id="text">{Quotes.quote}</p>
            <p>{Quotes.author}</p>
            <button onClick={handle}>New Quote</button>
      </div>
  );
}