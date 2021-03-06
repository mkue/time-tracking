Template.employeesAdmin.helpers({
    employees: function() {
        return Employees.find({}, {
            sort: {
                name: 1
            }
        });
    }
});
Template.employeesAdmin.events({
    'submit form': function(event) {
        event.preventDefault();
        var name = event.target.name.value;
        Employees.insert({
            name: name
        });
        document.getElementById('new-employee-form').reset();
    },
    'click .remove-employee': function(event) {
        var employeeId = $(event.target).attr('data-employee-id');
        $('#remove-button').attr('data-employee-id', employeeId);
        $('#remove-modal').modal();
    }
});