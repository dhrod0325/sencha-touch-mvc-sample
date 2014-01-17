Ext.Loader.setPath({
    'TestMVC' : 'samples/basic/app'
});

Ext.application({
    name : 'testMVC',
    requires : ['Ext.Container', 'Ext.Button', 'Ext.Toolbar', 'Ext.TitleBar', 'Ext.MessageBox', 'Ext.XTemplate'],
    controllers : ['TestMVC.controller.TestController'],
    models : ['TestMVC.model.Man'],
    stores : ['TestMVC.store.Mans'],
    views : ['TestMVC.view.Main'],
    launch : function() { 
        Ext.Viewport.add(Ext.create('TestMVC.view.Main'));
    }
});
