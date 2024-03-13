export default function Quote(props) {
  return (
    <>
      <div className="rounded-lg border-2 border-solid border-blue-500 bg-purple-200 p-1 text-center">
        <p className="font-normal">{props.quote.content}</p>
        <p className="font-bold">{props.quote.author}</p>
      </div>
    </>
  );
}
