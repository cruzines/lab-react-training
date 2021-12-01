import React from "react";

function Rating({children}) {
    let text =
      '★'.repeat(Math.round(children)) + '☆'.repeat(5 - Math.round(children));
    return (
      <div>
        <p className="text-4xl">{text}</p>
      </div>
    );
  }
  
  export default Rating;