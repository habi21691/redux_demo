import React from "react"
import { connect } from "react-redux"
import { buyCake, buyIceCreame } from "../redux"



 const ItemContainer = (props) => {
  
     return (
        <>
        <h1>Item - {props.item} </h1>
        <button onClick={ props.buyitems}> buy Items</button>
        <br/>
        </>
     )

     
    }
    const mapStateToProps = (state, ownProps) =>{
        const itemState = ownProps.cake ? state.cake.numberOfCake : state.iceCreame.numberOfIceCreame 
       return{
           item: itemState
       }
    }

    const mapDispatchToProps = ( dispatch, ownProps ) => {
        const DispatchFunction = ownProps.cake ? 
        () => dispatch(buyCake()) :
        () => dispatch(buyIceCreame())

        return {
            buyitems: DispatchFunction
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)