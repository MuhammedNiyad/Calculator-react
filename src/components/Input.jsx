import React from "react";
const Input = (props) => {
    return (
        <div className="input h-16 flex justify-end items-center font-bold text-[1.4em] bg-gray-400 text-gray-100 p-[0.5em] outline-1 outline-[#888888]">
            {props.Input}
        </div>
    );
};

export default Input;