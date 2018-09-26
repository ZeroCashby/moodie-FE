import React from 'react';

const Signup = (props) => {
    return (
        <section>
            <form onSubmit={props.submitSignupHandler}>
                <label htmlFor="email">email</label>
                <input ref={props.emailRef} type="email" name="email" id="email"/>
                <label htmlFor="password">password</label>
                <input ref={props.passwordRef} type="password" name="password" id="password"/>
                <label htmlFor="password2">re-enter password</label>
                <input type="password2" name="password2" id="password2"/>
                <input type="submit" value="signup" />
            </form>
        </section>
    )
}

export default Signup;