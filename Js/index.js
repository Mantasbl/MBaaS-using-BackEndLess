Backendless.initApp("7483C52A-352D-85A8-FF9C-6B67E86D5A00","FFE9933B-6CDA-CA4E-FF0E-EA64C15B1600");

$(document).on("pageshow", "#todoPage", onPageShow);

function onPageShow() {
    console.log("page shown");
}

Backendless.Data.of("TASKS").find().then(processResults).catch(error);
function processResults(tasks) {
    for (var i = 0; i < tasks.length; i++) {
    $('#taskList').append("<li>"+tasks[i].Task+"</li>");
    $('#taskList').listview('refresh');
}
 //display the first task in an array of tasks.

}
function error(err) {
 alert(err);
}
$(document).on("click", "#addTaskButton", onAddTask);
function onAddTask() {
    var tasktext = $('#addTaskText').val();
    var newTask = {};
    newTask.Task = tasktext;
    Backendless.Data.of("Tasks").save(newTask).then(saved).catch(error);
    function saved(savedTask) {
        console.log( "new Contact instance has been saved" + savedTask);
    }

}
