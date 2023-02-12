import axios from "axios";
import React, { useEffect, useState } from "react";
type Props = {};
const PingComponent: React.FC<Props> = (props) => {
  const [state, setState] = useState<{ pong: string }>({
    pong: "pending",
  });

  useEffect(() => {
    axios
      .get("api/ping")
      .then((response) => {
        setState(() => {
          return { pong: response.data.message };
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <h3>Ping {state.pong}</h3>;
};

export default PingComponent;
