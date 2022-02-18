import React from "react"

export default function Main() {

  const [Quotes,setQuotes] = React.useState({
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse"
  });

  const [list,setList] = React.useState([])
  

  function handle() {
    let idx = Math.floor(Math.random() * list.length);
    setQuotes({
      quote: list[idx].quote,
      author: list[idx].author
    });
  }
  
  React.useEffect(() => {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(res => res.json())
      .then(data => {
         setList(data.quotes);
      });
  }, []);

  //console.log(list);
  
  return(
      <div id="quote-box">
            <p id="text">{Quotes.quote}</p>
            <p id="author">{Quotes.author}</p>
            <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank">Tweet</a>
            <button onClick={handle} id="new-quote">New Quote</button>
           
      </div>
  );
}