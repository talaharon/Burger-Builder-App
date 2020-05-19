import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState = (ingredients)=>{
        const purchasable = Object.keys(ingredients)
            .map(igKey => ingredients[igKey])
            .reduce((acc,el)=> acc+el,0) > 0;
        this.setState({
            purchasable:purchasable
        });
    };

    addIngredientHandler = (type) => {
        const newIngredients = {...this.state.ingredients};
        newIngredients[type] = newIngredients[type]+1;
        const totalNewPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({
            ingredients: newIngredients,
            totalPrice: totalNewPrice
        });
        this.updatePurchaseState(newIngredients);
    };

    removeIngredientHandler = (type) => {
        const newIngredients = {...this.state.ingredients};
        let totalNewPrice= this.state.totalPrice;
        if(newIngredients[type]>0){
            newIngredients[type]= newIngredients[type]-1;
            totalNewPrice = totalNewPrice - INGREDIENT_PRICES[type];
            this.setState({
                ingredients: newIngredients,
                totalPrice: totalNewPrice,
            });
        }
        this.updatePurchaseState(newIngredients);  
    };

    purchaseHandler = () => {
        this.setState({
            purchasing:true
        });
    };

    render() {
        const disabledInfo =  {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key]<=0;
        }


        return (
            <Aux>
                <Modal show = {this.state.purchasing}>
                    <OrderSummary  
                        ingredients={this.state.ingredients}>
                    </OrderSummary>
                </Modal>
                <Burger ingredients = {this.state.ingredients}></Burger>
                <BuildControls 
                ingredientAdded = {this.addIngredientHandler}
                ingredientRemoved = {this.removeIngredientHandler}
                disabled = {disabledInfo}
                price = {this.state.totalPrice}
                purchasable = {!this.state.purchasable}
                ordered = {this.purchaseHandler}/>
            </Aux>
        );
    }

}
    
export default BurgerBuilder;
