import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
import { AddCake } from "../redux";

function CakeContainer(props) {
  return (
    <>
      <h1>Number of Cake - {props.numberOfCake} </h1>
      <button onClick={props.buyCake}>Buy cake</button>
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
    buyCake: () => dispatch(buyCake()),
    addCake: () => dispatch(AddCake())
  };
};
export default connect(mapstateToProps, mapDispatchToProps)(CakeContainer);
