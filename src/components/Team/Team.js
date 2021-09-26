import React from "react";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Member from "../Member/Member";

const Team = () => {
  const [members, setMembers] = useState([]);
  const [persons, setPersons] = useState([]);

  const handleAddPerson = (member) => {
    const newPerson = [...persons, member];
    setPersons(newPerson);
  };
  useEffect(() => {
    fetch("./members.JSON")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (
    <div>
      <div className="row my-4">
        <div className="col-md-9">
          <div className="row row-cols-md-3 g-3">
            {members.map((member) => (
              <Member
                key={member.id}
                member={member}
                handleAddPerson={handleAddPerson}
              ></Member>
            ))}
          </div>
        </div>
        <div className="col-md-3">
          <Cart persons={persons}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Team;
