import React from 'react';

import Loader from './Loader';
import './styles/PageLoading.css'

const PageLoading = () => {
    return (
        <div className="Page_loading">
            <Loader />
        </div>
    );
}

export default PageLoading;