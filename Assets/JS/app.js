$(".textBox").on("keyup", function(e) {
    // On enter
    if (e.keyCode == 13 && $(".textBox").val() != "") 
    {
        // Create New Task
       var task = $("<div class='task'></div>").text($(".textBox").val());
        $(".taskIncomplete").append(task);

        // Create Trashcan Functionality
        var trashcan = $("<img class='trashcan' src='../Assets/Icons/trashcan.png' alt=''>").click(function() {
        
        // Remove Task
        var p = $(this).parent();
        p.fadeOut(function(){
        p.remove();
        });
        });

        // Create Checkmark Functionality
        var checkmark = $("<img class='checkmark' src='../Assets/Icons/greencheck.jpg' alt=''>").click(function() {

        // Remove Task and Add
        var p = $(this).parent();
        p.fadeOut(function(){
        $(".taskComplete").append(p);
        p.fadeIn();
        });
        $(this).remove();
        });

        // Append Functionalities
        task.append(trashcan, checkmark);
        

        // Clear Input
        $(".textBox").val("");
    }
    
});