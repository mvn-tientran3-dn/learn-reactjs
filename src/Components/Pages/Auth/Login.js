import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const history = useHistory();

    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setForm({...form, [name]: value});
    }

    const onSubmit = (event) => {
        event.preventDefault();
        let info = {...form};
        if (info.email !== '' && info.password !== '') {
            localStorage.setItem('authToken', info.email);
            history.push('/account');
        }
    }

    return (
        <form id="login-form">
            <h1>Login</h1>
            <div className="field-block">
                <div><label>Email address</label></div>
                <input type="email"
                       className="email"
                       name="email"
                       onChange={handleChange}
                />
            </div>
            <div className="field-block">
                <div><label>Password</label></div>
                <input type="password"
                       name="password"
                       onChange={handleChange}
                />
            </div>
            <div className="field-block">
                <input type="submit" value="Submit" onClick={onSubmit}/>
            </div>
        </form>
    )
}

export default Login;
