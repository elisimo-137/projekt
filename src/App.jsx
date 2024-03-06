import { useEffect } from "react";
import { useState } from "react";
import Quote from "./Quote.jsx";
import { Badge } from "@/components/ui/badge";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [tags, setTags] = useState(["tag1", "tag2", "tag3", "tag4"]);
  const [selectdTag, setSelectedTag] = useState(null);

  async function getQuotes() {
    const request = await fetch("/quotes.json");
    const podatki = await request.json();

    setQuotes(podatki);
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
      // 1. FOR LOOP ZA VSE TAGE OD TISTEGA QUOTA (e["tags"])
      // "tags":["Famous Quotes", "Neki n", "a", "b"]
      quote_tags.forEach((t) => {
        //console.log(t);
        if (tags.includes(t)) {
          console.log("ze vsebuje " + t);
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
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          {quotes.map((quote) => (
            <Quote quote={quote}></Quote>
          ))}
        </div>
      </div>
    </>
  );
}
