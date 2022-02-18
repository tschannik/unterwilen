import "./Webcam.css";

const Webcam = (props) => {
  const url = `${props.crediturl}`;
  return (
    <div class="webcam">
      <h2>{props.title}</h2>
      <img src={props.url} alt={props.description}></img>
      <p>
        Quelle:{" "}
        <a href={url} target="_blank" rel="noopener noreferrer">
          {props.creditname}
        </a>
      </p>
    </div>
  );
};

export default Webcam;
