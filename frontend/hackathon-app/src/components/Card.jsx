import React from "react";

const Card = () => {
  const suggestions = [
    "Find a doctor",
    "Help with a medical question",
    "Help with a prescription",
    "Explain my benefits?",
  ];

  return (
    <div className="card-container">
      {suggestions.map((suggestion, index) => (
        <div
          className="card-item col-3"
          key={index}
          style={{ marginTop: "20px" }}
        >
          <div
            className="card"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  marginTop: "30px",
                  cursor: "pointer",
                  border: "1px solid",
                  padding: "10px",
                  borderRadius : "12px"
                }}
              >
                {suggestion}
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
