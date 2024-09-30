import React from "react";

const ProfileCard = (props) => {
  // console.log(props)
  return (
    <div className="profileContainer">
      <div className="card mb-3" style={{ width: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={props.data.picture.large}
              className="img-fluid rounded-start"
              alt="Profile"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {`${props.data.name.title} ${props.data.name.first} ${props.data.name.last}`}
              </h5>
              <p className="card-text">
                Location:{" "}
                {`${props.data.location.city}, ${props.data.location.state}, ${props.data.location.country}`}
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {props.data.phone}
                </small>
              </p>
              <button
                className="reset"
                onClick={props.btnFn}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
