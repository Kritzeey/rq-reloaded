export default function Card(props) {
  return (
    <div className="mt-4 h-full overflow-hidden rounded-sm pl-4 pt-4 pr-4 w-full backdrop-blur border-1">
      {props.image !== "noimage" ? (
        <img
          className="w-full h-42 object-cover rounded-xs"
          src={props.image}
        />
      ) : (
        <div className="w-full h-42 rounded-xs dark:bg-[#f2f2f2] light:bg-white border-1">
          <img className="" src={"/notebook-pen.svg"} />
        </div>
      )}
      <div className="mt-4 ml-2">{props.title}</div>
    </div>
  );
}
