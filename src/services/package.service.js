let packageFile = {}
if(!window.vscode){
    packageFile = {
        "name": "pkg-explorer",
        "version": "0.1.0",
        "private": true,
        "dependencies": {
          "classnames": "^2.2.6",
          "react": "^16.4.0",
          "react-dom": "^16.4.0",
          "react-scripts": "1.1.4",
          "tiny-react-router": "^1.0.2",
          "axios": "^0.18.0",
          "bootstrap-vue": "^2.0.0-rc.9",
          "jquery": "^3.3.1",
          "moment": "^2.22.1",
          "nuxt": "^1.4.1",
          "sweetalert2": "^7.20.10",
        },
        "devDependencies": {
            "babel": "^2.2.6",
            "babel-lklk": "^16.4.0",
            "webpack": "^16.4.0",
          },
        "scripts": {
          "start": "react-scripts start",
          "build": "react-scripts build",
          "test": "react-scripts test --env=jsdom",
          "eject": "react-scripts eject"
        }
      }
}

export default {
    getRawObject: () => packageFile,
    getInfo: () => [
        {key: 'name', value: packageFile.name},
        {key: 'version', value: packageFile.version},
        {key: 'private', value: packageFile.private},
        {key: 'repository', value: packageFile.repository && packageFile.repository.uri}
    ],
    getDependencies: () => {
        debugger
        if(typeof packageFile.dependencies  == 'object')
            return Object.keys(packageFile.dependencies).map(key => ({
                        name: key,
                        version: packageFile.dependencies[key]
                    }))
        return []
    },
    getDevDependencies: () => {
        if(typeof packageFile.devDependencies  == 'object')
            return Object.keys(packageFile.devDependencies).map(key => ({
                name: key,
                version: packageFile.devDependencies[key]
            }))
        return []
    },
    getScripts: () => packageFile.scripts
}