import React, { useState } from "react";

const Contact = () => {
  const [search, setSearch] = useState("");

  const data = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "123-456-7890",
      address: "123 Main St",
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "987-654-3210",
      address: "456 Elm St",
    },
    {
      name: "Alice Johnson",
      email: "alicejohnson@example.com",
      phone: "789-012-3456",
      address: "789 Oak St",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1>Search</h1>
        <input
          type="text"
          className="border border-gray-300 rounded-2xl outline-none"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((item) => {
              return (
                <>
                  {" "}
                  <ul key={item._id}>
                    <li>{item.name}</li>
                    <li>{item.email}</li>
                    <li>{item.phone}</li>
                    <li>{item.address}</li>
                  </ul>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Contact;
