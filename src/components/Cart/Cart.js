import React from "react";

const Cart = (props) => {
  const { persons } = props;

  const totalReducer = (preValue, currentValue) =>
    preValue + currentValue.donation;
  const total = persons.reduce(totalReducer, 0);
  return (
    <div className="shadow p-3 mb-2 rounded bg-primary bg-opacity-75 text-white">
      <h4 className="text-right">
        <i className="fas fa-user"></i>
        <span> {persons.length} added</span>
      </h4>
      <h4>
        Received:
        <span className="fw-bold"> ${total}</span>
      </h4>
      <ul>
        {persons.map((person) => (
          <li className="fw-bold" key={person.id}>
            {person.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
