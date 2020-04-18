import React from "react";
import Class from '../NavigationItems/navigationitems.module.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
const navigationItems = () => (
    <ul className={Class.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;