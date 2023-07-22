import { useEffect, useState } from "react";
import Sher from "./Sher.mp3";
import "./all.css";
import { Link } from "react-router-dom";
import "./fontawesome-f/css/all.css";
function Show() {
  useEffect(() => {
    function_show();
  }, []);

  const [data, setdata] = useState([]);

  async function function_show() {
    const res = await fetch("/show", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    res
      .json()
      .then((ele) => {
        console.log(ele);
        setdata(ele);
        //   dt = ele
      })
      .catch((e) => {
        console.log("error");
      });
  }
  return (
    <div id="masterrender">
      <audio src={Sher} autoPlay="true" loop="true" />
      <h2 id="top">The Endless Memories </h2>
      <h4 id="top2">Old days never dies ... </h4>
      <div id="topxtra">
        <Link id="l" to="/">
          Go Home
        </Link>{" "}
        <Link id="l" to="/opera">
          Post Another
        </Link>
      </div>
      <FU dataa={data} />
      <h1 id="icon">
        <a href="#top">
          <i className="fas fa-arrow-up"></i>{" "}
        </a>{" "}
      </h1>
      <div id="topxtra">
        <Link id="l" to="/">
          Go to Home
        </Link>{" "}
        <Link id="l" to="/opera">
          Post Another
        </Link>
      </div>
    </div>
  );
}

function FU(prop) {
  const i = prop.dataa.map((ele) => {
    return (
      <div id="render_mssg">
        <h1 id="memren">{ele.Memory}</h1>
        <h4 id="nameren">
          <b>- By {ele.name2_printed}</b>{" "}
        </h4>
      </div>
    );
  });
  return i;
}

export default Show;
