var data = {
    before: [
        ['','Acceleration','','Roadholding','','Sportiness','','Braking','','Gearbox','','Steering'],
        ['Model-Family of New Car','Mean','Unweighted Count','Mean','Unweighted Count','Mean','Unweighted Count','Mean','Unweighted Count','Mean','Unweighted Count','Mean','Unweighted Count'],
        ['VW PASSAT',"8,3",597,"8,7",597,"7,8",597,"8,8",597,"8,7",597,"8,9",597],
        ['AUDI A4',"8,6",569,"9,0",569,"8,6",569,"9,0",569,"8,9",569,"8,7",569],
        ['BMW 3 SERIES',"8,7",959,"9,1",959,"8,9",959,"9,1",959,"9,1",959,"9,2",959],
        ['FORD MONDEO',"8,3",140,"8,7",140,"8,0",140,"8,7",140,"8,5",140,"8,8",140],
        ['MERCEDES C CLASS',"8,7",363,"8,9",363,"8,3",363,"9,1",363,"8,8",363,"9,1",363],
        ['OPEL INSIGNIA',"7,6",313,"8,2",313,"7,8",313,"8,4",313,"8,0",313,"8,4",313],
        ['PEUGEOT 508',"8,2",180,"8,4",180,"7,8",180,"8,7",180,"8,2",180,"8,6",180]
    ],
    after: [
        ['','Acceleration','','Roadholding','','Sportiness','','Braking','','Gearbox','','Steering',''],
        ['Model-Family of New Car','Mean','Unweighted Count','Mean','Unweighted Count','Mean','Unweighted Count','Mean','Unweighted Count','Mean','Unweighted Count','Mean','Unweighted Count'],
        ['VW PASSAT',"8,1",126,"8,6",126,"7,6",126,"8,8",126,"8,7",126,"8,9",126],
        ['AUDI A4',"8,3",119,"8,8",119,"8,7",119,"8,8",119,"8,8",119,"8,4",119],
        ['BMW 3 SERIES',"8,5",225,"9,2",225,"9,0",225,"9,0",225,"9,0",225,"9,1",225],
        ['FORD MONDEO',"8,4",32,"8,8",32,"8,3",32,"8,8",32,"8,6",32,"9,0",32],
        ['MERCEDES C CLASS',"8,6",75,"8,6",75,"8,2",75,"9,1",75,"8,6",75,"9,2",75],
        ['OPEL INSIGNIA',"7,5",90,"8,2",90,"8,0",90,"8,3",90,"7,7",90,"8,4",90],
        ['PEUGEOT 508',"7,9",34,"8,4",34,"7,6",34,"8,5",34,"8,2",34,"8,5",34]
    ]
};

Spreadsheet.SpreadsheetRoute = Ember.Route.extend({
    model: function (params) {
        data['name'] = params.name;
        return data[params.name];
    },
    setupController: function (controller, model) {
        var spreadsheets = this.controllerFor("spreadsheets");
        spreadsheets.set('model', model);

        if (data['name'] == 'before') {
            spreadsheets.set('filter', '<em>none</em>');
        } else {
            spreadsheets.set(
                'filter',
                'Sex of Main Driver <span>=</span> "Male" <span>AND</span> Age of Main Driver <span>IN</span> ("Below 25", "25-34", "35-44")'
            );
        }
    }
});


