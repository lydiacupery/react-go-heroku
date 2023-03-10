import React, { useState, useRef, useEffect, useCallback } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

export const Resume: React.FC<{}> = () => {
  // const [imgSrc, setSrc] = useState(undefined);

  // const onLoad = useCallback(() => {
  //   setSrc(resume);
  // }, []);

  // useEffect(() => {
  //   const img = new Image();
  //   img.src = resume as string;
  //   img.addEventListener("load", onLoad);

  //   return () => {
  //     img.removeEventListener("load", onLoad);
  //   };
  // }, [onLoad]);
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
        // src={resumePdf}
        src={"./assets/resume.pdf"} 
        allowFullScreen
        frameBorder="1"
        scrolling="auto"
        height="1100"
        width="1100"
        title="Resume"
      /> */}
      <Document
        // file={
        //   "https://drive.google.com/file/d/1oCFPb6SYnweyNR9lk2QcewJvRs9PnczX/view?usp=sharing"
        // }
        // file={{
        //   url: "https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK",
        // }}
        file={"resume.pdf"}
        onLoadError={console.error}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};
