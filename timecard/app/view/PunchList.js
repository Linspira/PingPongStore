/*
 * File: app/view/PunchList.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Timecard.view.PunchList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.punchlist',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        store: 'punchesStore',
        itemTpl: Ext.create('Ext.XTemplate', 
            '<div>{timeIn:this.formatTime} to {timeOut}</div>',
            {
                formatTime: function(d) {
                    return moment(d).format('h:mma [on] D MMMM YYYY');
                }
            }
        )
    }

});