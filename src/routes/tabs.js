import React from 'react';
import Dependencies from '../components/Dependencies/Dependencies'
import packageService from '../services/package.service';
import List from '../components/List/List'

const Tabs = {
	dependencies: <Dependencies dependencies={packageService.getDependencies()}/>,
    devDependencies: <Dependencies dependencies={packageService.getDevDependencies()}/>,
    info: <List items={packageService.getInfo()} />,
    help: null,
    scripts: null
};

export default Tabs;