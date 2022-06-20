import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteClient } from "../redux/actions";

class ClientesCadastrados extends React.Component {
    status = {
        ordened: false,
    }

    generateRegisters = (array) => {
        array.map((clt, i) => (
                <ul>
                    <li key={i + 1}>
                        `${clt.nameClient} - ${clt.ageClient} years old - ${clt.emailClient}`
                        <button type="button" onClick={ () => this.props.delete(clt)}>Remove</button>
                    </li>   
                </ul>
        ))
    }
    // orderClients = () => {
    //     const ordened = [...this.props.registerClients];
    //     ordened.sort((a, b) => {
    //         const nameA = a.name.toUpperCase();
    //         const nameB = b.name.toUpperCase();

    //         let index = 0;
    //         if(nameA > nameB) {
    //             index = 1;
    //         } else if (nameA < nameB) {
    //             index = -1;
    //         }
    //         return index;
    //     });
    // return ordened;
    // }

    render() {
        const { userLogin, registerClients } = this.props;
        console.log(this.generateRegisters(registerClients))
        // const { ordened } = this.state;
        // console.log(this.state.ordened)
        if (!userLogin.email || !userLogin.password) return <div>Login não efetuado</div>
        if (registerClients.length < 1)
        return (
            <div>
                <span>Nenhum cliente cadastrado!</span>
                <Link to="/register">New Client</Link>
               <br/>
            </div>
        );
        return (
            <div>
                <Link to="/register">New Client</Link>
                    <button
                      type="button"
                    //   onClick={ this.handleClick }
                    >
                        Order
                    </button>
                    <div>
                        { registerClients.map((clt, i) => (
                <ul>
                    <li key={i + 1}>
                        {`${clt.nameClient} - ${clt.ageClient} years old - ${clt.emailClient}`}
                        <button type="button" onClick={ () => this.props.delete(clt)}>Remove</button>
                    </li>   
                </ul>
                ))}
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userLogin: state.reducer,
    registerClients: state.registerReducer,
})

const mapDispatchToProps = (dispatch) => ({
    delete: (ev) => dispatch(deleteClient(ev))
})

export default connect(mapStateToProps,mapDispatchToProps)(ClientesCadastrados);
