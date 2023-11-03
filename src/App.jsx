import React, { useReducer } from 'react';
import './App.css';
import Button from "./components/Button";
import Input from "./components/Input";
import EqualButton from "./components/EqualButton";
import reducer from './operations';

export default function App() {
    const [state, dispatch] = useReducer(reducer, "");
  return(
    <div className="App">
        <h1>Reactjs Calculator</h1>
        <div className="calc-wrapper">
            <Input Input = {state}></Input>
            <div className="row">
                <Button onClick={()=> dispatch({type: 'addtoInputNum', param: "7"})}>7</Button>
                <Button onClick={()=> dispatch({type: 'addtoInputNum', param: "8"})}>8</Button>
                <Button onClick={()=> dispatch({type: 'addtoInputNum', param: "9"})}>9</Button>
                <Button onClick={()=> dispatch({type: 'addtoInputOpr', param: "/"})}>/</Button>
                <Button onClick={()=> dispatch({type: 'handleRoot'})}>√</Button>
            </div>
            <div className="row">
                <Button onClick={()=> dispatch({type: 'addtoInputNum', param: "4"})}>4</Button>
                <Button onClick={()=> dispatch({type: 'addtoInputNum', param: "5"})}>5</Button>
                <Button onClick={()=> dispatch({type: 'addtoInputNum', param: "6"})}>6</Button>
                <Button onClick={()=> dispatch({type: 'addtoInputOpr', param: "*"})}>x</Button>
                <Button onClick={()=> dispatch({type: 'handleCube'})}>x³</Button>
            </div>
            <div className="row">
                <Button onClick={()=> dispatch({type: 'addtoInputNum', param: "1"})}>1</Button>
                <Button onClick={()=> dispatch({type: 'addtoInputNum', param: "2"})}>2</Button>
                <Button onClick={()=> dispatch({type: 'addtoInputNum', param: "3"})}>3</Button>
                <Button onClick={()=> dispatch({type: 'addtoInputOpr', param: "+"})}>+</Button>
                <Button onClick={()=> dispatch({type: 'handleCube'})}>x²</Button>
            </div>
            <div className="row">
                <Button onClick={()=> dispatch({type: 'addtoInputNum', param: "."})}>.</Button>
                <Button onClick={()=> dispatch({type: 'addtoInputNum', param: "0"})}>0</Button>
                <Button onClick={()=> dispatch({type: 'addtoInputNum', param: "00"})}>00</Button>
                <Button onClick={()=> dispatch({type: 'addtoInputOpr', param: "-"})}>-</Button>
                <Button onClick={()=> dispatch({type: 'handleClear'})}>C</Button>
            </div>
            <div className="row">
                <EqualButton onClick={()=> dispatch({type: 'handleClear'})}>=</EqualButton>
            </div>
        </div>
    </div>
  );
}


