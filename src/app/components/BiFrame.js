// components/IframeComponent.js
import React from "react";

const BiFrame = () => {
  return (
    <div className="flex justify-center items-center">
      <iframe
        title="Messi vs Ronaldo"
        width="1200"
        height="700"
        src="https://app.powerbi.com/view?r=eyJrIjoiNWExNjMyZWUtOWVhMy00NjM2LWE3ZTgtOGM2MDc3ZjQzMjNiIiwidCI6IjY0Zjc5OGVhLTdlZTQtNDllOS1iNmM3LTQzODJmYTEyNWQyOCIsImMiOjR9"
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default BiFrame;
