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
          "tiny-react-router": "^1.0.2"
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
    getInfo: () => ({
        name: packageFile.name,
        version: packageFile.version,
        private: packageFile.private,
        repository: packageFile.repository && packageFile.repository.uri
    }),
    getDependencies: () => {
        if(typeof packageFile.devDependencies  == 'object')
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