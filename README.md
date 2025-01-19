# plugdb
Lightweight NoSQL database system, especially made for [HighSeas](https://highseas.hackclub.com/) and [MinusTwelve](https://minustwelve.hackclub.com/).

## Documentation
Install it from npm:
``` npm i @samannoyb/plug-db --save ```
### Add the plugdb library:
```
var plugdb = require('@samannoyb/plug-db');
```
### Adding new database setup:
```
plugdb.setup({ path: 'D:/'}); // path to database goes here (if you're a linux user like me, dont add a '/' because it will not have perms (you can give it tho). try adding accessible file paths :) )
```

### Making a new Cluster (root directory):
```
plugdb.initializeCluster('kaka');  // cluster name (your document will be named after this, for ex: kaka.json)

```

### Creating Documents (Data files):
```
plugdb.createNewDocument('kaka', 'users'); // the parameters are this (clusterName, documentName) -> document will be one {key, value} pair in the json file
```

### Adding data:
```
plugdb.addData('kaka', 'users', { id: 'foo', username: 'foobar'}); // adding data -> you may also add in normal way, instead of key-value, but if you don't use key-value pair, you can't easily search it up :( the parameters are (clusterName, documentName, {key, value})
```

### Modifying Data:
```
plugdb.modifyDocument('kaka', 'users', 'username', 'foobar', 'bar') // modifying a specific parameter -> parameters are (clusterName, documentName, parameterName, originalValue, newValue)
```

### Lookup:
```
plugdb.documentLookup('kaka', 'users', 'username', 'bar') // search all username categories with "bar" -> parameters are (clusterName, documentName, parameterName, searchKeyword)
```

### What else?
**Upcoming Features**: No ideas, sorry.

Thanks for reading. Rate it with a star if you liked the project, really motivates me to write better code!
