/*
 * File: app/view/MyViewport.js
 * Date: Mon Sep 05 2011 15:55:34 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be generated the first time you export.
 *
 * You should implement event handling and custom methods in this
 * class.
 */
var button;

Ext.define('MyApp.view.MyViewport', {
    extend: 'MyApp.view.ui.MyViewport',

    initComponent: function() {
        var me = this;
        me.callParent(arguments);

//		button = me.down('addAddress');
		button = me.down('#addAddress');
		button.on('click', me.addAddress);
    },
	addAddress: function(){
		var store = Ext.data.StoreManager.lookup('NamesDirectStore');
		store.insert(0,{});
//		ab = this.getCmp('#addresBook');		
	}
});