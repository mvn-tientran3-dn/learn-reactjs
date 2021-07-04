import React, {useState } from "react";
import Row from "./Row";

function Form() {
    const [form, setForm] = useState({
        email: '',
        password: '',
        country: '',
        gender: '',
        info: ''
    });
    const [users, setUser] = useState([]);
    const [id, setId] = useState(1);

    function handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'radio' ? target.checked : target.value;
        setForm({...form, [name]: value});
    }

    function onSubmit(event) {
        event.preventDefault();
        setId(id + 1);
        let user = {...form, id : id};
        setUser([...users, user]);
    }

    function handleRemove(id) {
        const newUsers = users.filter(user => user.id !== id);
        setUser(newUsers);
    }

    return <div>
        <form id="create-user-form">
            <h3>Register</h3>
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
                <div><label>Your country</label></div>
                <select name="country" onChange={handleChange}>
                    <option value={0}>Please choose</option>
                    <option value={"Đà Nẵng"}>Đà Nẵng</option>
                    <option value={"Quảng Nam"}>Quảng Nam</option>
                    <option value={"Huế"}>Huế</option>
                </select>
            </div>
            <div className="field-block">
                <div><label>Gender</label></div>
                <label className="radio-inline">
                    <input type="radio"
                           name="gender"
                           value={0}
                           defaultChecked={true}
                           onChange={handleChange}/>Male
                </label>

                <label className="radio-inline">
                    <input type="radio"
                           value={1}
                           name="gender"
                           onChange={handleChange}/>Female
                </label>
            </div>
            <div className="field-block">
                <div><label>Other information</label></div>
                <textarea name="info"
                          onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <input type="submit" value="Submit" onClick={onSubmit}/>
            </div>
        </form>

        <table>
            <thead>
            <tr>
                <th colSpan={1}>Email</th>
                <th colSpan={1}>Country</th>
                <th colSpan={1}>Gender</th>
                <th colSpan={1}>Information</th>
                <th colSpan={1}>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map(user => (
                    <Row key={user.id} item={user} remove={handleRemove}/>
                ))
            }
            </tbody>
        </table>
    </div>
}

export default Form;

