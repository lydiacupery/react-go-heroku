import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// @ts-ignore
import pdf from "./assets/resume.pdf";
import { Hidden } from "@mui/material";
import { PDFDownloadLink } from "@react-pdf/renderer";

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
  return (
    <>
      <Hidden smUp>
        <div style={style}>
          <ResumeDocument width={350} />
        </div>
      </Hidden>
      {/* <Hidden smDown mdUp>
        <div style={style}>
          <ResumeDocument width={450} />
        </div>
      </Hidden> */}
      <Hidden smDown>
        <div style={style}>
          <ResumeDocument />
          {/* <PDFDownloadLink document={Resume} fileName="resume.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink> */}
        </div>
      </Hidden>
    </>
  );
};
