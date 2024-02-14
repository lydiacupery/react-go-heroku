import React, { useCallback, useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import "./App.css";
import compressedMe from "./assets/me_cropped-min.png";
import me3 from "./assets/me3.png";
import meCropped from "./assets/me_cropped.png";

export const Intro: React.FC<{}> = (props) => {
  const [imgSrc, setSrc] = useState(compressedMe);

  useEffect(() => {
    document.title = "Lydia Cupery";
  }, []);

  const onLoad = useCallback(() => {
    setSrc(meCropped);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = me3 as string;
    img.addEventListener("load", onLoad);

    return () => {
      img.removeEventListener("load", onLoad);
    };
  }, [onLoad]);
  return (
    <div
      style={{
        textAlign: "center",
        padding: "25px",
        marginTop: "10%",
      }}
    >
      <div>
        <div style={{ float: "right", margin: "20px" }}>
          <LazyLoad height={200}>
            <img
              style={{
                borderRadius: "5%",
                objectFit: "cover",
                width: 300,
                height: 300,
                margin: "10px",
              }}
              src={imgSrc}
              alt="Lydia"
              loading="eager"
            />
          </LazyLoad>
        </div>
        <h1 style={{ textAlign: "left" }}>Hello - I'm Lydia!</h1>
        <p style={{ textAlign: "left" }}>
          After taking a college computer science class on a whim, I got hooked
          on building systems from scratch and breaking down a problem to its
          component parts.
        </p>
        <p style={{ textAlign: "left" }}>
          Soon after graduation, I began my career as a full stack developer at
          Atomic, a Grand Rapids-based consultancy where I created custom
          software products for a wide variety of clients. I have a lot of
          experience with AWS, PSQL, Node, Typescript, Docker, React, and CSS.
          You can find some of my blog posts about those technologies and custom
          software development{" "}
          <a href="https://spin.atomicobject.com/author/lydia-cupery/">here</a>.
        </p>
        <p style={{ textAlign: "left" }}>
          In 2023, I joined HubSpot as a Senior Software Engineer. I'm a
          frontend developer on the documentation & onboarding team where we
          build tools for HubSpot developers.
        </p>
        <p style={{ textAlign: "left" }}>
          What I find most fulfilling about my work is understanding of how all
          the moving parts of a system work together.
        </p>
      </div>
    </div>
  );
};
