import React from "react";
import { Talk } from "./components/Talk";

export const Talks: React.FC<{}> = (props) => {
  return (
    <div style={{ width: "70%" }}>
      <Talk
        title={"Representing and Accessing Data That Changes Over Time"}
        conferences={["Tech Bash 2022"]}
        abstract={`This talk answers the question “What’s a clean way to represent data that changes over time?” How could one best model a loan with a variable interest rate? The fluctuating price of one's favorite cereal? \n
        We can store the things that change over time (variable attributes) in one table and stable attributes in a different table. This makes it easy to store and lookup data that changes over time without unnecessarily duplicating information. \n
        We’ll start by looking at some examples of real-world entities with variable attributes we might want to represent. Then, I'll go over how my team worked with variable attributes - from how we represented those attributes in the database to how we displayed those varying attributes to the user.`}
        talkUrls={[
          {
            url: "https://techbash.com/sessions",
            conference: "Tech Bash 2022",
          },
          {
            url: "https://hopin.com/events/cpl21",
            conference: "Code PaLOUsa 2021",
          },
        ]}
      />

      <Talk
        title={"How to Render Twenty Thousand Rows without Crashing Chrome"}
        conferences={["Code PaLOUsa 2020"]}
        abstract={`If you have say twenty thousand rows to render, you probably don’t want to fetch all that data at once and you especially don’t want to render all those rows on page load.\n
        This talk is about how to render only the rows you need and how to just-in-time load data for those rows. On the frontend, this means “windowing” or “virtualizing”: only rendering enough rows to fill the viewport, with maybe just a few extra. Rendering only the rows you need means less DOM nodes taking up memory and quicker initial load time. I’ll walk through an example of windowing and demonstrate how to optimize windowing performance.\n
        Next, we’ll look at how the client can just-in-time load chunks of row data as new rows scroll into view. I'll discuss how to create server endpoints to support the client-side incremental data fetching.\n
        The examples will be using a Node.js server with a React frontend. However, the concepts of windowing and just-in-time data loading are applicable to any tech stack.`}
        talkUrls={[
          {
            conference: "Code PaLOUsa 2020",
            url: "https://techbash.com/sessions",
          },
          {
            conference: "Central Wisconsin IT Conference 2020",
            url: "https://cwitc.org/2020/sessions",
          },
        ]}
        recordingIframes={[
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/HgLX8tgC7SM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>,
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/mDXuJrtxbeY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>,
        ]}
      />
      <Talk
        title="Let's Sort Out Sorting: How to Think About Sorting like a Computer"
        conferences={["Beer City Code 2019 - Family Session"]}
        abstract={`We, as humans with brains, can sort things without thinking too hard. But how do computers go about sorting things?\n
        We will answer this question together by exploring three different sorting algorithms: BOGO sort, insertion sort, and bubble sort. We will evaluate the efficiency of each sorting algorithms with questions like “How many times would you have to go through a list of unsorted things with this method before you can know for sure it is sorted?” and “How could we make that faster?”`}
        talkUrls={[
          {
            conference: "Beer City Code 2019",
          },
        ]}
      />
    </div>
  );
};
