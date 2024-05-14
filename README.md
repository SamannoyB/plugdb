# plugdb
Lightweight NoSQL database system, the updated version of my previous coredb.

## Documentation
Install it from npm:
``` npm i @samannoyb/plug-db --save ```

### Adding new database setup:
```
var plugdb = require('@samannoyb/plug-db');

plugdb.setup({ path: 'D:/'});
```

### Making a new Cluster (root directory):
```
var plugdb = require('@samannoyb/plug-db');

plugdb.setup({ path: 'D:/'});
plugdb.initializeCluster('kaka');
```

### Creating Documents (Data files):
```
var plugdb = require('@samannoyb/plug-db');

plugdb.setup({ path: 'D:/'});
plugdb.initializeCluster('kaka');
plugdb.createNewDocument('kaka', 'users');
```

### Adding data:
```
var plugdb = require('@samannoyb/plug-db');

plugdb.setup({ path: 'D:/'});
plugdb.initializeCluster('kaka');
plugdb.createNewDocument('kaka', 'users');
plugdb.addData('kaka', 'users', { id: 'foo', username: 'foobar'});
```

### Modifying Data:
```
var plugdb = require('@samannoyb/plug-db');

plugdb.setup({ path: 'D:/'});
plugdb.initializeCluster('kaka');
plugdb.createNewDocument('kaka', 'users');
plugdb.modifyDocument('kaka', 'users', 'username', 'foobar', 'bar')
```

### Lookup:
```
var plugdb = require('@samannoyb/plug-db');

plugdb.setup({ path: 'D:/'});
plugdb.initializeCluster('kaka');
plugdb.createNewDocument('kaka', 'users');
plugdb.documentLookup('kaka', 'users', 'username', 'bar')
```

### What else?
**Upcoming Features**: No ideas, sorry.

Thanks for reading. Rate it with a star if you liked the project, really motivates me to write better code!
