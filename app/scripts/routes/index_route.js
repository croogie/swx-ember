Spreadsheet.IndexRoute = Ember.Route.extend({
    setupController: function (c) {
        var application = this.controllerFor("application");
        application.set('isSpreadsheet', false);
        application.set('isProject', false);
        application.set('isGlobal', true);
    }
});
