import React, { useState} from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
import { AddCake } from "../redux";

function NewCakeContainer(props) {

    const [ number, setNumber] = useState(1)
  return (
    <>
    <input type={'text'} value={number} onChange={(event) => setNumber(event.target.value)}/>
      {/* <h1>Number of Cake - {props.numberOfCake} </h1> */}
      <button onClick={() => props.buyCake(number)}>Buy {number} cake</button>
      <button onClick={props.addCake} style={{marginLeft: '13px'}}> AddCake</button>
    </>
   
  );
}

const mapstateToProps = state => {
  return {
    numberOfCake: state.cake.numberOfCake,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: number => dispatch(buyCake(number)),
    addCake: () => dispatch(AddCake())
  };
};
export default connect(mapstateToProps, mapDispatchToProps)(NewCakeContainer);
