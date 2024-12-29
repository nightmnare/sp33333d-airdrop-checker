//? showing all the saved notes when the website is opened
showNotes()

//! reading writen notes from textarea and adding then to localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  // let notesObj;
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  //   console.log(notesObj);
  showNotes();
});

//! function for display notes form localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    }
    else {
      notesObj = JSON.parse(notes);
    }

  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
    <div class="noteCard my-2 mx-2 card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary Nfont">Delete Note</button>
        </div>
      </div>`;
  });
  let notesElm = document.getElementById("note");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  }
  else {
    notesElm.innerHTML = `Dont see your wallet here ? start farming `;
  }
}


//! function to delete a note
function deleteNote(index) {
    // console.log(`deleteNote is called from index ${index}`);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }
    noteObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(noteObj));
    showNotes();
}

//! Making search button work
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})