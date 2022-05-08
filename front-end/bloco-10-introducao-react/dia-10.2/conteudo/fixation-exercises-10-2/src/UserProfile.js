import { Component } from "react";
import Image from "./Image";

export default class Order extends Component {
    render() {
        // const { user } = this.props.user
        return (
            <div>
                <p>{this.props.user.name}</p>
                <p>{this.props.user.email}</p>
                <Image source={this.props.user.avatar} alternativeText="This image couldn't be loading" 
            />
            </div>
        )
    }
}

