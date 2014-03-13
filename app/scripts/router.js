Spreadsheet.Router.map(function () {
    this.resource('projects', function () {
        this.resource('project', {path: ':project_id'});
    });
    this.resource('spreadsheets', function () {
        this.resource('spreadsheet', {path: ':name'});
    });
});
