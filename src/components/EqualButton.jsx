import React from "react";
const EqualButton = (props) => {
    return (
        <div
        className="equal-btn select-none cursor-pointer h-16 flex items-center justify-center font-thin text-[1.4em] text-black bg-gray-300 flex-1 outline-1 outline-[#888888]"
        onClick={props.onClick}>
            {props.children}
        </div>
    );
};

export default EqualButton;