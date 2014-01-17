Ext.application({
    startupImage: {},
    isIconPrecomposed: false,
    icon: {},
    requires: [
        'Ext.MessageBox',
        'Ext.data.Store',
        'Ext.List',
        'Ext.plugin.PullRefresh'
    ],
    launch: function () {
        var listConfiguration = this.getListConfiguration();
        if (!Ext.os.is.Phone) {
            Ext.Viewport.add({
                xtype: 'panel',
                width: 350,
                height: 370,
                centered: true,
                modal: true,
                hideOnMaskTap: false,
                layout: 'fit',
                items: [listConfiguration]
            });
        } else {
            Ext.Viewport.add(listConfiguration);
        }
    },
    getListConfiguration: function () {
        var store = Ext.create('Ext.data.Store', {
            fields: ['firstName', 'lastName'],
            sorters: 'firstName',
            autoLoad: true,
            grouper: {
                groupFn: function (record) {
                    return record.get('firstName')[0];
                }
            },
            proxy: {
                type: 'ajax',
                url: '/exam/samples/list/contacts.json'
            }
        });

        return {
            xtype: 'list',
            id: 'list',
            itemTpl: '{firstName} {lastName}',
            grouped: true,
            indexBar: true,
            infinite: true,
            useSimpleItems: true,
            variableHeights: true,
            striped: true,
            ui: 'round',
            store: store
        };
    }
});