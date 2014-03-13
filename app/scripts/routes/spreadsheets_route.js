Spreadsheet.SpreadsheetsRoute = Ember.Route.extend({
    model: function () {},
    setupController: function () {
        var application = this.controllerFor("application");
        application.set('excel', true);
        application.set('isSpreadsheet', true);
        application.set('isProject', false);
        application.set('isGlobal', false);
    }
});

