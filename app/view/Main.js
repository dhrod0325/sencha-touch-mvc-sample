Ext.define('TestMVC.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [ 'TestMVC.view.Man' ],
    config: {
        tabBar: {
            docked: 'bottom'
        },
        items: [
            {
                xtype: 'man'
            }
        ]
    }
});
