import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-multi-carousel/lib/styles.css';

import wrapper from '../store/configureStore';

const AllofCS = ({ Component }) => {
    return (
        //<Provider store={store}></Provider>
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>AllofCS</title>
            </Head>
            <Component />
        </>
    );
};

AllofCS.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(AllofCS);