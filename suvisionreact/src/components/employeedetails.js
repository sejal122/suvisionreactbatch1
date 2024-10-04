import React, { useState } from "react";
import Existinguser from "./existinguser";

function Employeedetails() {
  const [people, setPeople] = useState([
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ]);

  const [inputdata, setInputData] = useState("");
  function filterdata(e) {
    setInputData(e.target.value);
  }

  return (
    <div>
      <input type="search" onChange={(e) => filterdata(e)}></input>
      <table>
        <thead>
          <tr>
            <th> ID</th>
            <th>Name</th>
            <th>Profession</th>
          </tr>
        </thead>
        <tbody>
          {people
            .filter((pep) => {
              return inputdata.toLowerCase() === ""
                ? pep
                : pep.name.toLowerCase().includes(inputdata);
            })
            .map((emp) => {
              return (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.profession}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Existinguser />
    </div>
  );
}

export default Employeedetails;
