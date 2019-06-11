import React, {Component} from 'react';
import jwt_decode from 'jwt-decode'
class Home extends Component {
    constructor() {
        super()
        this.state = {
            first: '',
            last: '',
            email: ''
        }
    }

    componentDidMount() {
        const token = localStorage.token
        const decoded = jwt_decode(token)
        this.setState({
            first: decoded.first,
            last: decoded.last,
            email: decoded.email
        })
    }

    render() {
        return (
            <div className = "container">
                <div className = "jumbotron mt-5">
                    <div className = "col-sm-8 mx-auto">
                        <h1 className = "text-center">Home</h1>
                    </div>
                    <table className = "table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>
                                    First Name
                                </td>
                                <td>
                                    {this.state.first}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Home;