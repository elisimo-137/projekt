export default function Quote(props) {
  return (
    <>
      <div className="border-2 border-indigo-500 p-3">
        <p className="font-bold">{props.quote.content}</p>
        <p>{props.quote.author}</p>
      </div>
    </>
  );
}
