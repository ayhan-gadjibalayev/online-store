import React from "react";

export default function CategoryBlock(props) {
  const {categories, categoryName} = props;

  return (
    <div className="category-block">
      <b className="title">{categoryName}</b>
      {(categories || []).map(({ icon, id, categoryItem }) => (
        <span key={id} className="category-item">
          {React.cloneElement(icon)} {categoryItem}
        </span>
      ))}
    </div>
  );
}