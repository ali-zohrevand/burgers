import React, {Component} from "react";
import Class from '../Modal/modal.module.css'
import Aux from '../../../hoc/Auxilary'
import Backdrop from "../Backdrop/backdrop";

class Modal extends Component {
    //improve performance
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("modal update");

    }

    render() {

        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}></Backdrop>
                <div className={Class.Modal}
                     style={{
                         transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)'
                         , opacity: this.props.show ? '1' : '0'
                     }}
                >
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;