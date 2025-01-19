var fs = require("fs");
var xtr = require("fse");       // fs-extra  

var pathToBuild = "";
var db = {
    setup: ({ path: paths }) => {           // initialization of the path in the pathToBuild variable
        console.log(paths)
        if (pathToBuild == "") {
            console.log("Empty!");
            pathToBuild = paths;
            if (fs.existsSync(`${pathToBuild}/plug-db`)) {
                console.log(`Setup already exists at ${pathToBuild}/plug-db. Path to setup successfully configured.`);
            } else {
                fs.mkdirSync(`${pathToBuild}/plug-db`);
                console.log(`Setup created at ${pathToBuild}/plug-db`)
            }
        } else {
            console.log("Setup already initialized. Setup once configured, cannot be changed");
            console.log(pathToBuild)   
        }
    },
    initializeCluster: (names) => {                       
        console.log(names)
        if (pathToBuild == "") {
            console.log("ERR -- Setup not initialized. Run setup() with your specified path inside.");
        } else {
            if (fs.existsSync(`${pathToBuild}/plug-db/${names}`)) {
                console.log("Cluster already exists at specified path.");
            } else {
                fs.mkdirSync(`${pathToBuild}/plug-db/${names}`);
                console.log("Cluster setup at specific location -- Task Completed.");
            }
        }
    },
    createNewDocument: (clusterName, docName) => {
        if (pathToBuild == "") {
            console.log("ERR -- Setup not initialized. Run setup() with your specified path inside.");
        } else {
            if (fs.existsSync(`${pathToBuild}/plug-db/${clusterName}`)) {
                if (fs.existsSync(`${pathToBuild}/plug-db/${clusterName}/${docName}.json`)) {
                    console.log("Document already exists");
                } else {
                    fs.writeFileSync(`${pathToBuild}/plug-db/${clusterName}/${docName}.json`, `[]`, undefined, 2);
                    console.log("Cluster setup at specific location -- Task Completed.");
                }
            } else {
                console.log("Cluster does not exist.")
            }
        }
    },
    addData: (clusterName, docName, data) => {
        console.log(data);
        if (pathToBuild == "") {
            console.log("ERR -- Setup not initialized.");
        } else {
            if (fs.existsSync(`${pathToBuild}/plug-db/${clusterName}`)) {
                if (fs.existsSync(`${pathToBuild}/plug-db/${clusterName}/${docName}.json`)) {
                    var JSONdata = JSON.parse(fs.readFileSync(`${pathToBuild}/plug-db/${clusterName}/${docName}.json`, 'utf-8'));
                    JSONdata.push(data);
                    fs.writeFileSync(`${pathToBuild}/plug-db/${clusterName}/${docName}.json`, JSON.stringify(JSONdata, null, 2));
                } else console.log("Document does not exist.");
            } else console.log("Cluster does not exist.")
        }
    },
    documentLookup: (clusterName, docName, key, value) => {
        if (pathToBuild == "") {
            console.log("ERR -- Setup not initialized.");
        } else {
            if (fs.existsSync(`${pathToBuild}/plug-db/${clusterName}`)) {
                if (fs.existsSync(`${pathToBuild}/plug-db/${clusterName}/${docName}.json`)) {
                    var JSONdata = JSON.parse(fs.readFileSync(`${pathToBuild}/plug-db/${clusterName}/${docName}.json`, 'utf-8'));
                    for (let obj of JSONdata){
                        if (key in obj) {
                            if (obj[`${key}`] == value) {
                                console.table(obj);
                            } else {
                                console.log("Key exists but not with the specified value.");
                            }
                        } else {
                            console.log("Does not exist.");
                        }
                    }
                } else console.log("Document does not exist.");
            } else console.log("Cluster does not exist.")
        }
    },
    modifyDocument: (clusterName, docName, key, oldValue, newValue) => {
        if (pathToBuild == "") {
            console.log("ERR -- Setup not initialized.");
        } else {
            if (fs.existsSync(`${pathToBuild}/plug-db/${clusterName}`)) {
                if (fs.existsSync(`${pathToBuild}/plug-db/${clusterName}/${docName}.json`)) {
                    var JSONdata = JSON.parse(fs.readFileSync(`${pathToBuild}/plug-db/${clusterName}/${docName}.json`, 'utf-8'));
                    for (let obj of JSONdata){
                        if (key in obj) {
                            if (obj[`${key}`] == oldValue) {
                                obj[`${key}`] = "";
                                obj[`${key}`] = newValue;
                                fs.writeFileSync(`${pathToBuild}/plug-db/${clusterName}/${docName}.json`, JSON.stringify(JSONdata, null, 2));
                                console.table(obj);
                            } else {
                                console.log("Key exists but not with the specified value.");
                            }
                        } else {
                            console.log("Does not exist.");
                        }
                    }
                } else console.log("Document does not exist.");
            } else console.log("Cluster does not exist.")
        }
    }
}
exports = module.exports = db;

