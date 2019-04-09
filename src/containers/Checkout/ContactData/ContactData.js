import React, {
    Component
} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementtype: 'input',
                elementconfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elementtype: 'input',
                elementconfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipCode: {
                elementtype: 'input',
                elementconfig: {
                    type: 'text',
                    placeholder: 'ZIP CODE'
                },
                value: ''
            },
            country: {
                elementtype: 'input',
                elementconfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementtype: 'input',
                elementconfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: ''
            },
            deliveryMethod: {
                elementtype: 'select',
                elementconfig: {
                    options: [{
                            value: 'fastest',
                            displayValue: 'fastest'
                        },
                        {
                            value: 'cheapest',
                            displayValue: 'cheapest'
                        }
                    ]
                },
                value: ''
            }
        },
        loading: false
    }

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price, //this sould be calculated in the server!
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            }).catch(error => this.setState({
                loading: false
            }));
    }

    render() {
        let form = ( <
            form >
            <
            Input elementtype = ''
            elementconfig = ''
            value = '' / >
            <
            Input inputtype = 'input'
            type = 'text'
            name = 'email'
            placeholder = 'Your Email' / >
            <
            Input inputtype = 'input'
            type = 'text'
            name = 'street'
            placeholder = 'Street' / >
            <
            Input inputtype = 'input'
            type = 'text'
            name = 'postal'
            placeholder = 'Postal Code' / >
            <
            Button btnType = 'Success'
            clicked = {
                this.orderHandler
            } > ORDER < /Button> < /
            form >
        );
        if (this.state.loading) {
            form = < Spinner / > ;
        }
        return ( <
                div className = {
                    classes.ContactData
                } >
                <
                h4 > Enter your Contact Data < /h4> {
                form
            } <
            /div>
    )
}
}

export default ContactData;