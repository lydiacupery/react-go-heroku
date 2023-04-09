import React from "react";
import { Grid } from "@mui/material";

type Props = {
  title: string;
  conferences: Array<string>;
  abstract: string;
  slidesUrl?: string;
  recordingIframes?: Array<JSX.Element>;
  talkUrls?: Array<{ conference: string; url?: string }>;
};

export const Talk: React.FC<Props> = (props) => {
  return (
    <div>
      <h3 style={{ textAlign: "left", whiteSpace: "pre-line" }}>
        {props.title}
      </h3>
      {props.talkUrls.map(({ conference, url }) => (
        <div
          style={{
            paddingBottom: "2px",
            display: "flex",
            justifyContent: "start ",
          }}
        >
          <a style={{ color: url ? "#446eac" : "black" }} href={url}>
            {conference}
          </a>
        </div>
      ))}
      {props.slidesUrl && (
        <a style={{ color: "#446eac" }} href={props.slidesUrl}>
          View Slides
        </a>
      )}
      <p style={{ whiteSpace: "pre-line", textAlign: "left" }}>
        {props.abstract}
      </p>
      <Grid container columnSpacing={2}>
        {props.recordingIframes?.map((iframe) => (
          <Grid
            item
            xs={12}
            md={6}
            style={{ paddingBottom: "5px", width: "50%" }}
          >
            {iframe}
          </Grid>
        )) || <></>}
      </Grid>
    </div>
  );
};
