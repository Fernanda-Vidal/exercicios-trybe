import React from "react";
import { connect } from "react-redux";

class ClientesCadastrados extends React.Component {
    render() {
        const { userLogin } = this.props;
        return(
            <div>
                { (!userLogin.email || !userLogin.password) ? <span>Login não efetuado</span> : <span>Seja Bem Vindo</span> }
               
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userLogin: state.reducer,
})

export default connect(mapStateToProps)(ClientesCadastrados);
