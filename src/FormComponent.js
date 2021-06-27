import React from "react";

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
                ],
                form: {
                    email: '',
                    password: '',
                    info: ''
                },
            }));
        }
    }

    deleteItem(id) {
        this.props.onRemove(id, this.state.users);
    }

    render() {
        const {users} = this.state;
            let element = users.map((item, index) => {
                return <tr key={index}>
                    <td colSpan={1}>{item.email}</td>
                    <td colSpan={1}>{item.country !== 0 ? item.country : ''}</td>
                    <td colSpan={1}>{item.gender ? 'Male' : 'Female'}</td>
                    <td colSpan={1}>{item.info}</td>
                    <td><span onClick={() => this.deleteItem(item.id)}><i className="material-icons">delete</i></span></td>
                </tr>
            });

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
                {element.length > 0 && element}
                {element.length === 0 && <tr><td colSpan="5">No result</td></tr>}
                </tbody>
            </table>
        </div>
    }
}

export default FormComponent;
