import React from "react";
import Aux from "../../../hoc/Auxilary";
import {object} from "prop-types";
import Button from "../../UI/Button/button";
const Order =(props) =>
{
    const ingredientSummery = Object.keys(props.ingredients).map(igKey=>{
        return (
            <li key={igKey}>
                <span style={{textTransform:'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
            </li>
        )
    });
    return(
        <Aux>
            <h1>Your Order is ready: </h1>
            <ul>
                {ingredientSummery}
            </ul>
            <p><strong>Total Price: {props.totalPrice}</strong></p>
            <p>
                Continue to Checkout?

            </p>
            <Button classType="Danger" clicked={props.purchasedCanceled}>Cancel</Button>
            <Button classType="Success"  clicked={props.purchasedContinue}>Continue</Button>

        </Aux>

    );
}
export default Order;