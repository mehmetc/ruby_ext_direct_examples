/*
 * File: app/view/ui/MyComboBox.js
 * Date: Mon Sep 05 2011 23:57:59 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.ui.MyComboBox', {
    extend: 'Ext.form.field.ComboBox',

    fieldLabel: 'Label',
    displayField: 'value',
    store: 'MyDirectStore',
    valueField: 'code',

    initComponent: function() {
        var me = this;
        me.callParent(arguments);
    }
});