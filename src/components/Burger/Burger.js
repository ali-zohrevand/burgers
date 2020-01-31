import React from "react";
import classes from './Burger.module.css';
import BurgerIngeridiant from "./BurgerIngrediant/BurgerIngrediant";
const Burger = (props)=>{
    let transformedIngredient = Object.keys(props.ingredients).map(key =>{
        return [...Array(props.ingredients[key])].map((_,i)=>{
           return <BurgerIngeridiant type={key} key={i+key}/>;
        });
    }).reduce((arr,el)=>{
        return arr.concat(el);
    },[]);
    console.log(transformedIngredient);
    if (transformedIngredient.length ===0){
        transformedIngredient = <p className={classes.rtlStyle} > لطفا محتویات ساندویچ خود را تعیین کنید.</p>
    }
    return(

        <div className={classes.Burger}>
            <BurgerIngeridiant type={'bread-top'}></BurgerIngeridiant>
            {transformedIngredient}
            <BurgerIngeridiant type={'bread-bottom'}></BurgerIngeridiant>


        </div>
    )
}
export default Burger;