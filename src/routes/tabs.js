import React from 'react';
import Dependencies from '../components/Dependencies/Dependencies'
import packageService from '../services/package.service';

const Tabs = {
	dependencies: <Dependencies dependencies={packageService.getDependencies()}/>,
    devDependencies: <Dependencies dependencies={packageService.getDevDependencies()}/>,
    info: null,
    help: null,
    scripts: null
};

export default Tabs;