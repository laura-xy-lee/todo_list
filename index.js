// This chunk of code will run when you press the submit button
$("#postit").submit(function(e) {
    e.preventDefault();
    console.log("Form submitted!")

    // Get the text on the post it note, this is our new task
    var postit_input = document.getElementById("new-task");
    var postit_text = postit_input.value;
    console.log("Text is:", postit_text)

    // Add new task to the task board
    function addNewItem(postit_text){
        // Create a new post-it element for the task board
        var new_postit = document.createElement("div");
        new_postit.classList.add("new_postit");

        // Create a post-it text element for the new post it
        var postit_text_elem = document.createElement("p");
        postit_text_elem.innerHTML = postit_text;

        // Place the post-it text on the post-it
        new_postit.appendChild(postit_text_elem);

        // Place the post-it on the task board
        document.getElementById("taskboard").appendChild(new_postit);
    };
    addNewItem(postit_text);
});

