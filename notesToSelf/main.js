if (!localStorage.getItem("notes")) {
    localStorage.setItem("notes", JSON.stringify ({}));
}

var storedNotes = JSON.parse(localStorage.getItem("notes"));
displayNotes()
function postNewNote() {
    var titleInput = $(".new-note-title");
    var contentInput = $(".new-note-content");
    var noteTitle = titleInput.val();
    var noteContent = contentInput.val();
    var noteDate = new Date();
    var note = {};
    note.title = noteTitle;
    note.content = noteContent;
    storedNotes[noteDate] = note;
    localStorage.setItem("notes",JSON.stringify(storedNotes));
    titleInput.val("");
    contentInput.val("");
    displayNotes();
    
}
$(".post-new-note").on("click", postNewNote);
function displayNotes() {
    $(".old-notes").html("");
    var keys=Object.keys(storedNotes);
    var sortedKeys = keys.sort(compare);
    for (var index in sortedKeys) {
        var i = sortedKeys[index];
        var noteDate = i;
        var note = storedNotes[i];
        var noteTitle = note.title;
        var noteContent = note.content;
        
        var thisNote = $("<div>").addClass("note");
        var noteTitleDisplay = $("<h2>").addClass("note-title").text(noteTitle);
        var noteDateDisplay = $("<p>").addClass("note-date").text(noteDate);
        var noteContentDisplay = $("<p>").addClass("note-content").html(noteContent);
        
        thisNote.append(noteTitleDisplay);
        thisNote.append(noteDateDisplay);
        thisNote.append(noteContentDisplay);
        
        $(".old-notes").append(thisNote);
    }
}
function compare(a, b) {
  if (a == b) {
    return 0;
  } else if (a < b) {
    return 1;
  } else {
    return -1;
  }
}


