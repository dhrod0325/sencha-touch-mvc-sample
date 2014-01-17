Ext.define('TestMVC.view.man.ManDetail', {
    extend: 'Ext.Panel',
    xtype: 'manDetail',
    config: {
        title: '테스트 목록',
        tpl: [ '{name} ㅋㅋ {age}' ].join()
    },
    initialize: function () {
        console.log();
    }
});