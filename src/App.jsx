import { useEffect } from "react";
import { useState } from "react";
import Quote from "./Quote.jsx";
import { Badge } from "@/components/ui/badge";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);

  async function getQuotes() {
    const request = await fetch("/quotes.json");
    const podatki = await request.json();

    setQuotes(podatki);
  }

  function isQuoteSelected(quote) {
    if (!selectedTag) {
      return true;
    }
    return quote.tags.includes(selectedTag);
    quote.tags.forEach((tag) => {
      if (tag == selectedTag) {
        return true;
      }
    });
  }

  useEffect(() => {
    getQuotes();
  }, [quotes]);

  useEffect(() => {
    // Ali qoutes obstaja in ima elemente
    if (!(quotes && quotes.length > 0)) {
      // Ce ne, prenehamo izvajat funkcijo
      return;
    }

    // Ce pridemo do sm, vem da se zgornji if stavek ni izvedel

    let tags = [];
    let quote_tags = [];

    quotes.forEach((e) => {
      quote_tags = e["tags"];
      // 1. for loop za vse tage is tistega quota (e["tags"])
      // "tags":["Famous Quotes", "Neki n", "a", "b"]
      quote_tags.forEach((t) => {
        //console.log(t);
        if (tags.includes(t)) {
          //console.log("ze vsebuje " + t);
        } else {
          tags.push(t);
        }
      });
    });
    // 2. za vsakega preverimo, ce je v seznamu
    //       tags.includes("FamousQuotes")
    // 3. ce tega elementa se ni v seznamu, mu ga dodamo
    //       tags.push("FamousQUotes")

    //console.log(e["tags"]);
    //tags = tags.concat(e["tags"]);

    setTags(tags);
  }, [quotes]);

  return (
    <>
      <div className="p-4">
        <div>
          {tags.map((tag) => (
            <Badge key={tag} onClick={() => setSelectedTag(tag)}>
              {tag}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {quotes
            .filter((q) => isQuoteSelected(q))
            .map((quote) => (
              <Quote quote={quote}></Quote>
            ))}
        </div>
      </div>
    </>
  );
}
