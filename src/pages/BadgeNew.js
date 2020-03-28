import React, { Component } from 'react';

import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import header from '../images/platziconf-logo.svg';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import PageLoading from '../components/PageLoading';

class BadgeNew extends Component {
    state = { 
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        },
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault();

        this.setState({ loading: true, error: null, });
        
        try {
            await api.badges.create(this.state.form);
            this.setState({ loading: false });

            // Redirigir a una ruta
            this.props.history.push('/badges')
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    render() {
        if(this.state.loading) {
            return <PageLoading />
        }

        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img src={header} alt="Logo" className="img-fluid BadgeNew__hero-image"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName={this.state.form.firstName || 'FIRST_NAME'} 
                                lastName={this.state.form.lastName || 'LAST_NAME'} 
                                twitter={this.state.form.twitter || 'TWITTER'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                email={this.state.form.email || 'EMAIL'}
                                avatarURL="https://cdnmd.lavoz.com.ar/sites/default/files/styles/width_1072/public/nota_periodistica/globo_1.jpg" 
                            />
                        </div>
                        <div className="col">
                            <h1>New Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange} 
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;
