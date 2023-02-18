import React, { useCallback, useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import "./App.css";
import compressedMe from "./assets/compressed-me.png";
import me3 from "./assets/me3.png";

export const Intro: React.FC<{}> = (props) => {
  const [imgSrc, setSrc] = useState(compressedMe);

  const onLoad = useCallback(() => {
    setSrc(me3);
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
    <>
      <h1>Welcome! I'm Lydia.</h1>
      <LazyLoad height={200}>
        <img
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            width: 300,
            height: 300,
          }}
          src={imgSrc}
          alt="Lydia"
          loading="eager"
        />
      </LazyLoad>
      <p style={{ width: "50%", textAlign: "left" }}>
        After taking a computer science class on a whim, I got hooked on
        building systems from scratch and breaking down a problem to its
        component parts.
      </p>
      <p style={{ width: "50%", textAlign: "left" }}>
        I started working at Atomic, a consultancy in Grand Rapids, right after
        graduation. At Atomic, I combine my interest in building full-stack
        systems with the more business-focused side building a product that
        makes sense for the problem.
      </p>
      <p style={{ width: "50%", textAlign: "left" }}>
        I enjoy understanding how all parts of a system fit together - from
        database constraints to frontend animations.
      </p>
    </>
  );
};
