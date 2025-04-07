export default function Card(props) {
  let src;

  props.image === "noimage" ? (src = "/notebook-pen.svg") : (src = props.image);

  return (
    <div className="h-full overflow-hidden rounded-sm p-4 w-full backdrop-blur border-1 relative">
      <img className="w-full h-42 object-cover rounded-xs" src={src} />
      {props.title}
    </div>
  );
}
