import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack5";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// @ts-ignore
import pdf from "./assets/resume.pdf";
import { Button } from "./components/Button";
import "./Resume.css";

pdfjs.GlobalWorkerOptions.workerSrc = `pdf.worker.js`;

const ResumeDocument: React.FC<{ width?: number }> = ({ width }) => {
  return (
    <Document
      options={{ workerSrc: "pdf.worker.js" }}
      file={pdf}
      onLoadError={console.error}
    >
      <Page pageNumber={1} width={width} />
    </Document>
  );
};

export const Resume: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    document.title = "Lydia Cupery | Resume";

    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="resume" aria-label="Resume">
      <div className="resume-document">
        <ResumeDocument width={isMobile ? 340 : undefined} />
      </div>
      <a
        href="/Lydia Cupery - 2023.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-download"
        aria-label="Download resume as PDF"
      >
        <Button label="Download PDF" />
      </a>
    </section>
  );
};
