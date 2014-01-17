Ext.define('TestMVC.store.Mans', {
    extend: 'Ext.data.Store',
    requires: ['TestMVC.model.Man'],
    config: {
        model: 'TestMVC.model.Man',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: '/app/data/Mans.json',
            reader: {
                type: 'json',
                rootProperty: 'mans'
            }
        },
        sorters: [
            {
                property: 'name',
                direction: 'ASC'
            }
        ]
    }
});
