import React, { Component} from 'react';
import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

class orderSummary extends Component{
    //This could be a functional component, doesn't need to be a class based one.
    componentWillUpdate(){
        console.log('[OrderSummary will update]');
    }

    render(){

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (<li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>)});

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button clicked={this.props.purchaseCanceled} btnType='Danger'>CANCEL</Button>
                <Button clicked={this.props.purchaseContinue} btnType='Success'>CONTINUE</Button>
            </Aux>
            );
    }
}

export default orderSummary;