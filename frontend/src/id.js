import React, { useState } from "react";
import { Link } from "react-router-dom";
function Id() {
  const [getid_name, setgetid_name] = useState("");
  const [idlist, setgetidlist] = useState([]);

  //   async function disp () {
  //     //   console.log(list_arr)
  //      Listofids = idlist.map((ele) => {
  //       return (<>{ele}</>)
  //     })

  //   }
  function FU() {
    const i = idlist.map((ele) => {
      return (
        <>
          <h1>{ele._id} for </h1>
          <h5>"{ele.Memory}"</h5>
        </>
      );
    });
    return i;
  }

  //   ***********func to get mem id**************

  async function getting_memory_id() {
    const res = await fetch("/mem_post", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: getid_name }),
    });
    const res_to_show = res.json();
    // console.log(res_to_show)
    res_to_show
      .then((ok) => {
        setgetidlist(ok);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  {
    /* ************getid********** */
  }
  return (
    <div className="post">
      <h2>If you Forget your Original Name Contact</h2>
      <h3>
        <i className="fas fa-phone-alt"></i> or <i class="fas fa-sms"></i>{" "}
        <code> 8016216564</code>
      </h3>
      <input
        type="text"
        placeholder="Enter your Original Name"
        name=""
        id=""
        onChange={(e) => {
          setgetid_name(e.target.value);
        }}
      />
      <input
        id="butt"
        type="button"
        onClick={() => {
          getting_memory_id();
        }}
        value="get id"
      />
      {/* <span><FU data={idlist}/></span> this line is commented coz we hv used function to map here instead of another component */}

      <input type="text" value="Your ID is" id="onlyshow" disabled="true" />
      <span>{FU()}</span>

      <Link id="lo" to="/opera">
        Go Back
      </Link>
    </div>
  );
}

// *******this will also work , in this map is used outside te parent componenet and this component must  be called under parent component************
//* *****instead in the above see we have used function for map an that function FU() is called under span */
// function FU (prop) {
//   const i = prop.data.map((ele) => {
//     return (
// <><h1>{ele._id} </h1>
//       {/* <h5>{ele.Memory}</h5> */}
//       </>
// )
//   })
//   return (i)
// }

export default Id;
