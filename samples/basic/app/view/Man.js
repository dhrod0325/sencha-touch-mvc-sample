Ext.define('TestMVC.view.Man', {
    extend : 'Ext.NavigationView',
    xtype : 'man',
    requires : ['TestMVC.view.man.ManList'],
    config : {
        title : 'Man',
        iconCls : 'user',
        navigationBar : {
            items : [{
                xtype : 'button',
                align : 'right',
                iconCls : 'refresh',
                iconMask : true,
                hidden : false,
                action : 'refresh'
            }, {
                xtype : 'button',
                align : 'right',
                iconCls : 'action',
                iconMask : true,
                hidden : true,
                action : 'action'
            }]
        },
        items : [{
            xtype : 'manlist'
        }]
    }
});
