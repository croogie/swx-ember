Spreadsheet.SpreadsheetsView = Ember.View.extend({
    classNames: ['take-all', 'flex-cols'],
    didInsertElement: function () {
        var ht = jQuery('#handsontable');
        ht.handsontable({
            data: this.get('controller').get('model'),
            minRows: 32,
            colHeaders: true,
            rowHeaders: true,
            stretchH: 'all',
            contextMenu: true,
            manualColumnResize: true,
            persistentState: true,
            height: parseInt(ht.css('height'), 10)
        });
    }
});
