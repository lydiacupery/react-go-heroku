import React, { useEffect } from "react";
import { Talk } from "./components/Talk";

export const Talks: React.FC<{}> = (props) => {
  useEffect(() => {
    document.title = "Lydia Cupery | Talks";
  }, []);
  return (
    <div
      style={{
        paddingBottom: "40px",
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
        // backgroundColor: "white",
        padding: "25px",
        marginTop: "30px",
        marginBottom: "30px",
        // borderLeft: "10px solid #446eac59",

        // backgroundColor: "rgba(68, 110, 172, 0.05)",
        // boxShadow: " 10px 10px 41px 0px rgba(0,0,0,0.75)",
        // borderRight: "10px solid gray",
      }}
    >
      <Talk
        title={`Scaling Web Applications with Background Jobs: Takeaways from Generating a Huge PDF`}
        iframes={[]}
        conferences={["Beer City Code"]}
        abstract={`Do you need to perform time-consuming or CPU-intensive processes in your web application but are concerned about performance? This is where background jobs come in. By offloading resource-intensive tasks to separate worker processes, you can improve the scalability of your web application.\n
In this talk, I'll share our experience of using background jobs to scale our web application. First, I'll discuss the challenges we faced that led us to adopt background jobs. Then, I'll share practical tips on how to design background jobs for CPU-intensive or time-consuming processes, such as generating huge PDFs and batch emailing. Finally, I'll summarize the performance and cost benefits that we achieved by offloading such work to background jobs.\n
I'll use Typescript, Express, and Heroku as examples in this talk, but the concepts and best practices that I'll share are applicable to other languages and infrastructures.
        `}
        talkUrls={[
          {
            url: "https://www.beercitycode.com/#schedule",
            conference: "Beer City Code 2023",
          },
          {
            url: "https://2023.allthingsopen.org/",
            conference: "All Things Open 2023",
          },
        ]}
      />
      <Talk
        title={`Preparing for a Successful Product Launch: Your Toolbox`}
        iframes={[
          <iframe
            src="https://show.zohopublic.com/publish/n41gx8f532f1f19264410bff8a436f3522345"
            width="100%"
            height="auto"
            title="Product Launch Kit Talk - Zoho Show"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              aspectRatio: "16 / 9",
            }}
          ></iframe>,
        ]}
        conferences={["THAT Conference Wisconsin"]}
        abstract={`Launching a new product can be an exciting but stressful time. Advocating early for the right tools to recover from any production issues that may arise can eliminate a lot of stress. In this talk, I will discuss the tools you'll want in your “launch toolbox." \n
I'll cover the following tools, why you should use them, and how to advocate for spending time and money to set them up: \n
\u2022 An error monitoring tool that notifies you of any errors in your application
\u2022 A performance monitoring tool that alerts you when an endpoint is taking longer than expected
\u2022 A searchable and persistent logging tool to aid in debugging and resolving issues
\u2022 A lower environment that accurately mirrors the production environment, allowing users to test key workflows
\u2022 Data backup and audit trail to protect against data loss and track changes \n
Having these tools in your toolbox enables you to proactively address any issues that may arise, making your next launch even smoother! \n
My examples will be for an application built in Typescript, Express, and Heroku, but the core concepts are applicable to any languages and infrastructure.
        `}
        talkUrls={[
          {
            url: "https://that.us/activities/aZoryQs8PFYi2YKPXNks",
            conference: "THAT Conference Wisconsin 2023",
          },
        ]}
      />
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
        iframes={[
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
