/*
 * File: app/view/namesWindow.js
 * Date: Tue Sep 06 2011 11:39:42 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be generated the first time you export.
 *
 * You should implement event handling and custom methods in this
 * class.
 */

Ext.define('NamesApp.view.namesWindow', {
    extend: 'NamesApp.view.ui.namesWindow',

    initComponent: function() {
        var me = this;
        me.callParent(arguments);
	},
	initEvents: function(){
        var me = this;
		
		me.down('tool[type=plus]').on('click',function(){
			me.addNewRow();
		});

		me.down('tool[type=refresh]').on('click', function(){
			me.down('#namesGrid').getStore().load();
			me.down('#namesGrid').getView().refresh();
		});

		me.down('tool[type=save]').on('click', function(){
			me.down('#namesGrid').getStore().save();
			me.down('#namesGrid').getView().refresh();
		});
		
		me.down('#namesGrid').on('edit', function(editor, e){
//			result = editor.record.save();
			editor.record.commit();
			me.down('#namesGrid').getStore().save();
			me.down('#namesGrid').getView().refresh();
		});
    },
	addNewRow:function(){
		var store = Ext.data.StoreManager.lookup('NamesStore');		
		store.insert(0,{});
	}
});