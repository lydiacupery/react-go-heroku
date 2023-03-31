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
        After taking a college computer science class on a whim, I got hooked on
        building systems from scratch and breaking down a problem to its
        component parts.
      </p>
      <p style={{ width: "50%", textAlign: "left" }}>
        I started working at Atomic, a consultancy in Grand Rapids, right after
        graduation. I'm a full stack developer At Atomic. At Atomic, we use a
        wide range of technologies to build custom products for our clients.
        Some technologies I'm most familiar with AWS, PSQL, Node, Typescript,
        Docker, React, and CSS.
      </p>
      <p style={{ width: "50%", textAlign: "left" }}>
        I really enjoy understanding how all parts of a system fit together -
        from database constraints to frontend animations.
      </p>
    </>
  );
};
