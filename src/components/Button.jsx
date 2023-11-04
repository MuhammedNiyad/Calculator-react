import React from "react";

 const Button = (props) => {
    const isOperator = (val) => {
        return !isNaN(val) || val === "." || val === "=";
    };

    return (
        <div className={`button-wrapper select-none	cursor-pointer h-16 flex justify-center items-center font-light text-[1.4em] bg-gray-300 text-gray-600 flex-1 outline-1 outline-[#888] ${
            isOperator(props.children) ? null : "operator text-white bg-[#fe9241]"
        }`}
        onClick={props.onClick}>
            {props.children}
        </div>
    );
};

export default Button;