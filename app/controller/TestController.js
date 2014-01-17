Ext.define('TestMVC.controller.TestController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            manList: 'manList',
            manDetail: 'manDetail'
        },
        control: {
            'manList': {
                itemtap: 'manItemClick'
            }
        }
    },
    manItemClick: function (list, index, target, record) {
        var nav = list.up('navigationview');

        nav.push({
            titl: record.data.name,
            xtype: 'manDetail',
            record: record
        });
    }
});