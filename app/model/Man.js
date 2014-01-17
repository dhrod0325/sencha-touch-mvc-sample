Ext.define('TestMVC.model.Man', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'age',
                type: 'int'
            }
        ]
    }
});