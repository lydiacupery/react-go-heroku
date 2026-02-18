import React, { useCallback, useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import "./Intro.css";
import compressedMe from "./assets/me_cropped-min.png";
import me3 from "./assets/me3.png";
import meCropped from "./assets/me_cropped.png";

export const Intro: React.FC = () => {
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
    <article className="intro">
      <div className="intro-content">
        <div className="intro-image-wrapper">
          <LazyLoad height={200}>
            <img
              className="intro-image"
              src={imgSrc}
              alt="Lydia Cupery, Software Engineer"
              loading="eager"
            />
          </LazyLoad>
        </div>
        <div className="intro-text">
          <h1>Hello - I'm Lydia!</h1>
          <p>
            After taking a college computer science class on a whim, I got hooked
            on building systems from scratch and breaking down a problem to its
            component parts.
          </p>
          <p>
            Soon after graduation, I began my career as a full stack developer at
            Atomic, a Grand Rapids-based consultancy where I created custom
            software products for a wide variety of clients. I have a lot of
            experience with AWS, PSQL, Node, Typescript, Docker, React, and CSS.
            You can find some of my{" "}
            <a href="https://spin.atomicobject.com/author/lydia-cupery/">
              blog posts about software development
            </a>.
          </p>
          <p>
            In 2023, I joined HubSpot as a Senior Software Engineer. I'm a
            frontend developer on the documentation & onboarding team where we
            build tools for HubSpot developers.
          </p>
          <p>
            What I find most fulfilling about my work is understanding how all
            the moving parts of a system work together.
          </p>
        </div>
      </div>
    </article>
  );
};
