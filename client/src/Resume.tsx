import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  Document,
  Page,
  pdfjs,
  // Page,
  // PDFDownloadLink,
} from "react-pdf/dist/esm/entry.webpack5";
// import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { saveAs } from "file-saver";

// @ts-ignore
import pdf from "./assets/resume.pdf";
import { Hidden } from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "./components/Button";
// import { PDFDownloadLink } from "@react-pdf/renderer";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `pdf.worker.js`;

const ResumeDocument: React.FC<{ width?: number }> = (props) => {
  return (
    <Document
      options={{
        workerSrc: "pdf.worker.js",
      }}
      file={pdf}
      onLoadError={console.error}
    >
      <Page pageNumber={1} width={props.width} />
    </Document>
  );
};

export const Resume: React.FC<{}> = () => {
  const style = useMemo(() => {
    return {
      marginTop: "20px",
      height: "100%",
      maxWidth: "100%",
      display: "flex",
      justifyContent: "center",
      overflow: "auto",
    };
  }, []);

  const downloadFile = (url: string, filename?: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename ?? url.split("/").pop() ?? url;
    link.click();
  };

  const downloadTxtFile = () => {
    // text content
    const texts = ["line 1", "line 2", "line 3"];

    // file object
    // const file = new Blob(texts, { type: "text/plain" });

    // anchor link
    const element = document.createElement("a");
    element.href = URL.createObjectURL(pdf);
    element.download = "100ideas-" + Date.now() + ".txt";

    // simulate link click
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };
  return (
    <>
      <Hidden smUp>
        <div style={style}>
          <ResumeDocument width={350} />
        </div>
      </Hidden>
      <Hidden smDown>
        <div style={style}>
          <ResumeDocument />
        </div>
        <a
          href="/Lydia Cupery - 2023.pdf"
          target={"_blank"}
          // download="thing.pdf"
        >
          <Button label="View as PDF"></Button>
        </a>
      </Hidden>
    </>
  );
};
