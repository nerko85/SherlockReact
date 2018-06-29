import React, { Component } from 'react';
import CaseWrapper from '../components/case-studies/CaseStudies';
import Layout from '../components/Layout';

class Index extends Component {
    render() {
        return (
            <Layout>
                <CaseWrapper/>
            </Layout>
        );
    }
}

export default Index;