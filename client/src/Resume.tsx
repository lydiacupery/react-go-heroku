import React, { useState, useRef, useEffect, useCallback } from "react";
import LazyLoad from "react-lazyload";
import resume from "./assets/resume.png";
// import resumePdf from "./assets/resume.pdf";

export const Resume: React.FC<{}> = () => {
  const [imgSrc, setSrc] = useState(undefined);

  const onLoad = useCallback(() => {
    setSrc(resume);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = resume as string;
    img.addEventListener("load", onLoad);

    return () => {
      img.removeEventListener("load", onLoad);
    };
  }, [onLoad]);
  return (
    <div style={{ marginTop: "20px", height: "100%" }}>
      {/* <img
        src={imgSrc}
        alt="Lydia"
        loading="eager"
        style={{ height: "100%" }}
      /> */}
      {/* <iframe
        id="resume"
        src={resumePdf}
        allowFullScreen
        frameBorder="1"
        scrolling="auto"
        height="1100"
        width="1100"
        title="Resume"
      /> */}
    </div>
  );
};
