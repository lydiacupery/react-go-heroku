import React, { useCallback, useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import "./App.css";
import compressedMe from "./assets/compressed-me.png";
import me3 from "./assets/me3.png";

export const Intro: React.FC<{}> = (props) => {
  const [imgSrc, setSrc] = useState(compressedMe);

  useEffect(() => {
    document.title = "Lydia Cupery";
  }, []);

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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        // backgroundColor: "rgba(68, 110, 172, 0.05)",
        padding: "25px",
        // minHeight: "100%",
        // height: "100%",
        marginTop: "30px",
        marginBottom: "30px",
        // borderLeft: "10px solid #446eac59",
      }}
    >
      <h1 style={{ textAlign: "left" }}>Welcome! I'm Lydia.</h1>
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
      <p style={{ textAlign: "left" }}>
        After taking a college computer science class on a whim, I got hooked on
        building systems from scratch and breaking down a problem to its
        component parts.
      </p>
      <p style={{ textAlign: "left" }}>
        Soon after graduation, I began my career as a full stack developer at
        Atomic, a Grand Rapids-based consultancy where we employ a variety of
        technologies to create customized products for our clients. I have a lot
        of experience with AWS, PSQL, Node, Typescript, Docker, React, and CSS.
        You can find some of my blog posts about those technologies and custom
        software development{" "}
        <a href="https://spin.atomicobject.com/author/lydia-cupery/">here</a>.
      </p>
      <p style={{ textAlign: "left" }}>
        What I find most fulfilling about my work is gaining a deep
        understanding of how all the moving parts of a system work together,
        from backend constraints to frontend animations.
      </p>
    </div>
  );
};
