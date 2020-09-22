import React from 'react';
import 'bulma/css/bulma.css';


const CoolButton = props => {
    const {isPrimary, isSuccess, isDanger, className} = props;
    let buttonProps = 'button';
    switch(props){
        case isSmall:
            buttonProps += ' is-small'
            break;
        case isSuccess:
            buttonProps += ' is-success'
            break;
        case isDanger:
            buttonProps += ' is-danger'
            break;
    }
    return (
        <button className={buttonProps}>{props.children}</button>
    )
}

export default CoolButton;