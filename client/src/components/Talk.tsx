import React from "react";
import "./Talk.css";

type Props = {
  title: string;
  conferences: Array<string>;
  abstract: string;
  slidesUrl?: string;
  iframes?: Array<JSX.Element>;
  talkUrls?: Array<{ conference: string; url?: string }>;
};

export const Talk: React.FC<Props> = (props) => {
  return (
    <article className="talk">
      <h3 className="talk-title">{props.title}</h3>
      <ul className="talk-conferences" aria-label="Conferences">
        {props.talkUrls?.map(({ conference, url }) => (
          <li key={conference}>
            {url ? (
              <a href={url} className="talk-link">
                {conference}
              </a>
            ) : (
              <span>{conference}</span>
            )}
          </li>
        ))}
      </ul>
      {props.slidesUrl && (
        <a href={props.slidesUrl} className="talk-link slides-link">
          View Slides
        </a>
      )}
      <p className="talk-abstract">{props.abstract}</p>
      {props.iframes && props.iframes.length > 0 && (
        <div className="talk-media">
          {props.iframes.map((iframe, index) => (
            <div key={index} className="talk-media-item">
              {iframe}
            </div>
          ))}
        </div>
      )}
    </article>
  );
};
