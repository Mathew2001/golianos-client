import React from "react";

const SubForm = ({ children = [], title, gridCols = 3 }) => {
  // Map gridCols to Bootstrap column width


  const colSize = Math.floor(12 / gridCols);

  return (
    <div >
      {title && (
        <h2 className="fw-semibold mb-3 text-center" style={{ fontSize: "2rem" }}>{title}</h2>
      )}
      <div className={`row row-cols-${colSize}`}>
      {children.map((child, index) => (
        <div key={index} className={`col-12 col-md-${colSize}`}>
          <child.component {...child.props} />
        </div>
      ))}
      </div>
    </div>
  );
};

export default SubForm;
