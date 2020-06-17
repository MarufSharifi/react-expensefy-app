import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';



const LoginPage = ({ startLogin }) => (
    <div>
    <input type='text'/>
    <input type='text'/>
    <button onClick={startLogin}>Login</button>
</div>);


 const mapDispatchToProps = (dispatch) => ({
        startLogin: () => dispatch(startLogin())
 })


export default connect(undefined, mapDispatchToProps)(LoginPage);