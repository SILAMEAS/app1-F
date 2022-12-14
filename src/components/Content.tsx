import React from "react";
import BasicTable from "./Table.tsx";

type Props = {};

function Content({}: Props) {
  const [Name, setName] = React.useState("");
  // const [Age, setAge] = React.useState("");
  const [Email, setEmail] = React.useState("");
  console.log(Name, ":", Email);
  const data = {
    name: Name,
    email: Email,
  };
  const create_user = async () => {
    const res = await fetch("http://localhost:3001/user/create", {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({ "content-type": "application/json" }),
    });
    const dataa = await res.json();
    console.log(dataa);
  };

  return (
    <div className="flex-col flex justify-center items-center">
      <form className="flex-col flex w-[25rem]">
        <h1 className="text-white font-bold text-xl mx-auto mb-5">
          CRUD Operation
        </h1>
        <label htmlFor="">Name : </label>
        <input
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* <label htmlFor="">Age : </label>
        <input
          type="text"
          value={Age}
          onChange={(e) => setAge(e.target.value)}
        /> */}
        <label htmlFor="">Email : </label>
        <input
          type="text"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-blue-500 text-white mt-4" onClick={create_user}>
          Submit
        </button>
      </form>
      <div className="mt-5">
        <BasicTable />
      </div>
    </div>
  );
}

export default Content;
