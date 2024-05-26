import React from "react";
import { Link } from "react-router-dom";

export const SubmitPage = () => {
  return (
    <div className="submit">
      <div className="container">
        <p> Your form is successfully submitted. </p>
        <p> <span>Go To </span> <Link to="/" className="text-red-600"> Industries </Link> </p>
        
      </div>
    </div>
  );
};
