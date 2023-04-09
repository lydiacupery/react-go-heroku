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
      minHeight: "80vh",
      maxWidth: "100%",
      display: "flex",
      justifyContent: "center",
      overflow: "auto",
    };
  }, []);

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
      </Hidden>
      <a
        href="/Lydia Cupery - 2023.pdf"
        target={"_blank"}
        // download="thing.pdf"
      >
        <Button label="PDF View"></Button>
      </a>
    </>
  );
};
