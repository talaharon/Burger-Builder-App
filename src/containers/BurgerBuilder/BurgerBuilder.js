import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGREDIENT_PRICES = {
        salad: 0.5,
        cheese: 0.4,
        meat: 1.3,
        bacon: 0.7
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad:0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const newIngredients = {...this.state.ingredients};
        newIngredients[type] = newIngredients[type]+1;
        const totalNewPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({
            ingredients: newIngredients,
            totalPrice: totalNewPrice
        });
    };

    removeIngredientHandler = (type) => {

    };

    render() {
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients}></Burger>
                <BuildControls 
                ingredientAdded = {this.addIngredientHandler}/>
            </Aux>
        );
    }

}
    
export default BurgerBuilder;
