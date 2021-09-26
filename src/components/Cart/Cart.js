import React from "react";

const Cart = (props) => {
  const { persons } = props;

  const totalReducer = (preValue, currentValue) =>
    preValue + currentValue.donation;
  const total = persons.reduce(totalReducer, 0);
  return (
    <div className="shadow p-3 mb-2 bg-body rounded">
      <h4>
        <i className="fas fa-user"></i> Members Added: {persons.length}
      </h4>
      <h5>
        Total Donation: <span className="text-warning fw-bold">${total}</span>{" "}
      </h5>
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
