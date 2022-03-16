import React from "react";

/*
const props = {
    sayHello:function(){
        console.log("It never rains in Southern California!");
    }
}
 */

const Test = (props) => {

    props.sayHello();
    
  return (
    <>
      <h1> Testing prop string type: {props.stringTest}</h1>
      <h1> Testing prop number type: {props.numberTest}</h1>
      <h1> Testing prop boolean type: {props.booleanTest}</h1>
      <h1> Testing prop undefined type: {props.undefinedTest}</h1>
      <h1> Testing prop null type: {props.nullTest}</h1>
      <h1> Testing prop NaN type: {props.nanTest}</h1>
      <h1> Testing prop array type: {props.arrayTest}</h1>
      <h1> Testing prop object type: {props.objectTest.name}, {props.objectTest.age}</h1>
    </>
  );
};

export default Test;
