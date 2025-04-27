import React from "react";

export default function CategoryBlock(props) {
  const {categories, categoryName} = props;

  return (
    <div className="personal-block">
      <b className="title">{categoryName}</b>
      {(categories || []).map(({ icon, id, categoryItem }) => (
        <span key={id} className="personal-item">
          {React.cloneElement(icon, { style: { marginRight: 10 } })} {categoryItem}
        </span>
      ))}
    </div>
  );
}