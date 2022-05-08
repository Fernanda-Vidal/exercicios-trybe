import React from "react";

export default class Order extends React.Component {
    render() {
        const { user, product, price } = this.props.order;

        return (
            <div className="order">
                <p>{user} bought {product} for {price.value} {price.currency} </p>
            </div>
        );
    }
}

