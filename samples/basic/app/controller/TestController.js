Ext.define('TestMVC.controller.TestController', {
	extend : 'Ext.app.Controller',
	config : {
		refs : {},
		control : {}
	},
	myMethod : function() {
		alert('hello mvc');
	}
});