import React from "react";
import "./Member.css";

const Member = (props) => {
  const { name, age, profession, company, country, image, donation } =
    props.member;
  const { handleAddPerson } = props;
  return (
    <div className="col">
      <div className="card border-0 shadow p-3 mb-4 rounded">
        <div className="mx-auto">
          <img
            src={image}
            className="photo card-img-top rounded-circle"
            alt="..."
          />
        </div>
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">Age: {age}</p>
          <p className="card-text">Profession: {profession}</p>
          <p className="card-text">Company: {company}</p>
          <p className="card-text">Country: {country}</p>
          <p>
            Donation: <span className="fw-bold"> ${donation}</span>
          </p>
        </div>
        <div>
          <button
            className="btn bg-primary bg-opacity-75 w-100 text-white"
            onClick={() => handleAddPerson(props.member)}
          >
            <i className="fas fa-shopping-cart"></i> Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Member;

/* <div classNameName="col-md-4">
      <img classNameName="photo" src={image} alt="" />
      <h2>Name: {name}</h2>
      <h4>
        Age: {age}
        <br /> Profession: {profession} <br /> Company: {company}
        <br /> Country: {country} <br /> Donation: ${Donation}
      </h4>
      <button classNameName="btn btn-primary">
        <i classNameName="fas fa-shopping-cart"></i>add to cart
      </button>
    </div>  */
