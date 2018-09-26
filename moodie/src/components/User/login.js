import React from 'react';

const Login = (props) => {
    return (
        <section>
            <form onSubmit={props.submitLoginHandler}>
                <label htmlFor="email">email</label>
                <input ref={props.emailRef} type="email" name="email" id="email"/>
                <label htmlFor="password">password</label>
                <input ref={props.passwordRef} type="password" name="password" id="password"/>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Login;