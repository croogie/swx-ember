Spreadsheet.ProjectsRoute = Ember.Route.extend({
    model: function () {},
    setupController: function(controller, model) {
        var application = this.controllerFor("application");
        application.set('isSpreadsheet', false);
        application.set('isProject', true);
        application.set('isGlobal', false);
    }
});

