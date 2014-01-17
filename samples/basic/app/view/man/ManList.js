Ext.define('TestMVC.view.man.ManList', {
	extend : 'Ext.List',
	xtype : 'manlist',
	config : {
		title : '테스트 목록',
		onItemDisclosure : true,
		emptyText : '데이터가 없습니다.',
		store : 'Mans',
		itemTpl : '<p>{name} ({age})</p>'
	}
});