export default function Quote(props) {
  return (
    <>
      <div className=" bg-green- rounded-lg border-2 border-solid border-blue-300 bg-purple-200 p-4 text-center">
        <p className="font-normal">{props.quote.content}</p>
        <p className="font-bold">{props.quote.author}</p>
      </div>
    </>
  );
}
