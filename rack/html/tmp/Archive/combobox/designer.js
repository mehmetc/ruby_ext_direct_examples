/*
 * File: designer.js
 * Date: Tue Sep 06 2011 00:03:23 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'MyApp',

    stores: [
        'MyDirectStore',
        'MyDirectStore1'
    ],

    launch: function() {
        Ext.QuickTips.init();

        var cmp1 = Ext.create('MyApp.view.MyGridPanel', {
            renderTo: Ext.getBody()
        });
        cmp1.show();
    }
});