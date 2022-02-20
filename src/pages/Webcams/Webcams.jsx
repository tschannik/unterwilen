import Webcam from "../../components/Webcam/Webcam";
import "./Webcams.css";

import webcamfile from "./webcamfile.json";

const Webcams = () => {
  return (
    <>
      <h1>Webcams</h1>
      <div class="webcam-container">
        {webcamfile.map((webcam) => {
          return (
            <Webcam
              title={webcam.title}
              url={webcam.url}
              description={webcam.description}
              crediturl={webcam.credit}
              creditname={webcam.creditname}
            />
          );
        })}
      </div>
    </>
  );
};

export default Webcams;
