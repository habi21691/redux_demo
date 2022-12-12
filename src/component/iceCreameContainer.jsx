import React from "react";
import { connect } from "react-redux";
import { buyIceCreame } from "../redux";

function iceCreameContainer(props) {
  return (
    <>
      <h1>Number of IceCreame - {props.numberOfIceCreame} </h1>
      <button onClick={props.buyIceCreame}>Buy IceCreame</button>
    </>
   
  );
}

const mapstateToProps = state => {
  return {
    numberOfIceCreame: state.iceCreame.numberOfIceCreame,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyIceCreame: () => dispatch(buyIceCreame()),
  };
};
export default connect(mapstateToProps, mapDispatchToProps)(iceCreameContainer);