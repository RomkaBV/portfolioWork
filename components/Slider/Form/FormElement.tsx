import React from "react";
import "./style.css";

interface FormElementProps {
  name: string;
  onClick: () => void;
  value: string;
}

const FormElement: React.FC<FormElementProps> = ({ name, onClick, value }) => {
  return (
    <div>
      <h3></h3>
      <input
        className="btn-primary"
        type="button"
        value={value}
        onClick={onClick}
      />
    </div>
  );
};

export default FormElement;
