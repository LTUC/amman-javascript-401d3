import React from 'react';

const render = (condition = false , children = null) => {
    return condition ? children : null;
};

// IfRenderer component
export const IfRenderer = props => 
    React.Children.map(props.children, child =>
        React.cloneElement(child, {condition: props.condition})
    ); 

// export const IfRenderer = props => {
//     return  React.Children.map(props.children, child => {
//         return React.cloneElement(child, {condition: props.condition})
//     }); 
// }

// Then component 
export const Then = props => render(props.condition, props.children);

// Else component
export const Else = props => render(!props.condition, props.children);