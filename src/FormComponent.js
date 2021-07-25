import React from "react";
import RowComponent from "./RowComponent";

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: '',
                password: '',
                country: '',
                gender: '',
                info: ''
            },
            users: [],
        };
        this.id = 0;
    }

    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'radio' ? target.checked : target.value;
        this.setState(prev => ({
            form: {
                ...prev.form,
                [name]: value
            }
        }));
    }

    onSubmit = (event) => {
        event.preventDefault();
        const {users} = this.state;
        let index = users.findIndex(obj => obj.email !== this.state.form.email);

        if ((index >= 0 || users.length === 0) && this.state.form.email !== '') {
            this.id = this.id + 1;
            const user = {...this.state.form, id: this.id};
            this.setState(prev => ({
                users: [
                    ...prev.users,
                    user
                ]
            }));
        }
    }

    handleRemove = (id) => {
        const { users } = this.state;
        const newUsers = users.filter(e => e.id !== id);
        this.setState(prev => ({
            users: newUsers
        }));
    }

    render() {
        const {users} = this.state;

        return <div>
            <form id="create-user-form">
                <h3>Register</h3>
                <div className="field-block">
                    <div><label>Email address</label></div>
                    <input type="email"
                           className="email"
                           name="email"
                           value={this.state.form.email}
                           onChange={this.handleChange}
                    />
                </div>
                <div className="field-block">
                    <div><label>Password</label></div>
                    <input type="password"
                           name="password"
                           value={this.state.form.password}
                           onChange={this.handleChange}
                    />
                </div>
                <div className="field-block">
                    <div><label>Your country</label></div>
                    <select name="country" onChange={this.handleChange}>
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
                               onChange={this.handleChange}/>Male
                    </label>

                    <label className="radio-inline">
                        <input type="radio"
                               value={1}
                               name="gender"
                               onChange={this.handleChange}/>Female
                    </label>
                </div>
                <div className="field-block">
                    <div><label>Other information</label></div>
                    <textarea name="info"
                              onChange={this.handleChange}
                              value={this.state.form.info}
                    ></textarea>
                </div>
                <div>
                    <input type="submit" value="Submit" onClick={this.onSubmit}/>
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
                    users.map(e => (
                        <RowComponent key={e.id} item={e} remove={this.handleRemove}/>
                    ))
                }
                </tbody>
            </table>
        </div>
    }
}

export default FormComponent;
