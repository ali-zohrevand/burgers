import React, {Component} from "react";
import Aux from "../../../hoc/Auxilary";
import Button from "../../UI/Button/button";

class Order extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Order get updated");
    }

    render() {

        const ingredientSummery = Object.keys(this.props.ingredients).map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}
                </li>
            )
        });
        return (
            <Aux>
                <h1>Your Order is ready: </h1>
                <ul>
                    {ingredientSummery}
                </ul>
                <p><strong>Total Price: {this.props.totalPrice}</strong></p>
                <p>
                    Continue to Checkout?

                </p>
                <Button classType="Danger" clicked={this.props.purchasedCanceled}>Cancel</Button>
                <Button classType="Success" clicked={this.props.purchasedContinue}>Continue</Button>

            </Aux>
        );
    }
}

export default Order;