var plugdb = require('./index');

plugdb.setup({ path: 'D:/'});
plugdb.initializeCluster('kaka');
plugdb.createNewDocument('kaka', 'users');
plugdb.addData('kaka', 'users', { id: 'foo', username: 'foobar'});
plugdb.modifyDocument('kaka', 'users', 'name', 'nouka', 'noku')