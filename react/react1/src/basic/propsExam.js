import React from "react";

function Car(props){
  return <h1>{props.brand.name} , {props.brand.model} </h1>
}

function Garage(){
  const carInfo = {name:"a", model:"b", }
  return (
    <>
    <h1>이런게 있다</h1>
    <Car brand={carInfo}/>
    </>
  )
}

export default Garage;