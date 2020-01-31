import React, { Component } from 'react';
import Classes from './ingrediant.module.css';
import propTypes from 'prop-types';
class BurgerIngeridiant extends Component {
    render() {
        let ingeridiant = null;
        switch (this.props.type) {
            case ('bread-bottom'):
                ingeridiant = <div className={Classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingeridiant =
                    <div className={Classes.BreadTop}>
                        <div className={Classes.Seeds1}></div>
                        <div className={Classes.Seeds2}></div>
                    </div>;
                break;
            case ('meat'):
                ingeridiant = <div className={Classes.Meat}></div>;
                break;
            case ('bacon'):
                ingeridiant = <div className={Classes.Bacon}></div>;
                break;
            case ('cheese'):
                ingeridiant = <div className={Classes.Cheese}></div>;
                break;
            case ('salad'):
                ingeridiant = <div className={Classes.Salad}></div>;
                break;
            default:
                ingeridiant= null;
        }
        return ingeridiant;
    };
}
BurgerIngeridiant.propTypes={
    type: propTypes.string.isRequired,
}
export default BurgerIngeridiant;