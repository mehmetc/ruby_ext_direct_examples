/*
 * File: app/store/NamesDirectStore.js
 * Date: Mon Sep 05 2011 23:24:57 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.NamesDirectStore', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'NamesDirectStore',
            proxy: {
                type: 'direct',
                api: {
                    read: Names.get,
                    update: Names.set,
                    create: Names.create
                },
                reader: {
                    type: 'json'
                }
            },
            fields: [
                {
                    name: 'name',
                    type: 'string'
                },
                {
                    name: 'address',
                    type: 'string'
                },
                {
                    name: 'country',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});