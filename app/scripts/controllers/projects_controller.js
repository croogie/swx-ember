Spreadsheet.ProjectsController = Ember.ObjectController.extend({
    actions: {
        doit: function () {
            console.log('YEP!'); // @TODO
        },
        hideContent: function () {
            $('#content-of-modal').hide(5000);
        }
    }
});

