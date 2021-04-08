import "./styles/index.scss";

const state = {
  hidden: true,
  referencesCreated: false,
}

const joinButtons = document.querySelectorAll(".join-btn")
const wrappedjoinButtons = document.querySelectorAll(".join-btn-wrapper")

document.querySelector("#connect-btn")
  .addEventListener("click", () => {
    createReferences()
    createSQLCode("reset")
    createDataOutput("reset")
  });

joinButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    createSQLCode(btn.id)
    createDataOutput(btn.id)
  });
})

wrappedjoinButtons.forEach(wrappedBtn => {
  wrappedBtn.addEventListener("mouseenter", toggleHelp);
})

function toggleHelp() {
  if (state.hidden && !state.referencesCreated) {
    const helpText = document.querySelector(".help-text")
      helpText.style.display = "block"
      state.hidden = false;
  }
}

function createReferences() {
  const connectButton = document.getElementById("connect-btn")
  const connectText = connectButton.firstElementChild
  const plus = document.getElementById("plus")
  const helpText = document.querySelector(".help-text")

  document.querySelectorAll("tr .ref:last-child").forEach(tr => {
    
    if (tr.classList.contains("hidden")) {

      state.referencesCreated = true;

      tr.classList.remove("hidden")

      connectButton.style.backgroundColor = "rgb(205, 236, 255)"

      connectText.innerHTML = "References created"
      connectText.style.color = "rgb(40, 113, 158)"

      plus.innerHTML = "✓"
      plus.style.color = "rgb(40, 113, 158)"
      plus.style.fontSize = "large"

      joinButtons.forEach(btn => {
        btn.disabled = false;
      })

      helpText.style.display = "none";
      state.hidden = true;
      
    } else {

      state.referencesCreated = false;
      
      tr.classList.add("hidden")

      connectButton.style.backgroundColor = "rgb(237, 237, 237)"

      connectText.innerHTML = "Create references"
      connectText.style.color = "inherit"

      plus.innerHTML = "+"
      plus.style.color = "#5E5E5E"
      plus.style.fontSize = "larger"

      joinButtons.forEach(btn => {
        btn.disabled = true;
      })

    }
  })
}

function createSQLCode(joinType) {
  const code = document.getElementById("code")
  switch (joinType) {
    case "reset":
      code.innerHTML = "Click a JOIN button and a SQL query will generate here..."
      break;

    case "inner":
      code.innerHTML = "SELECT * <br> FROM actors <br> INNER JOIN movies <br> ON actors.movie_id = movies.id;"
      break;

    case "left":
      code.innerHTML = "left"
      break;
      
    case "right":
      code.innerHTML = "right"
      break;
      
    case "full":
      code.innerHTML = "full"
      break;
  
    default:
      return;
  }
}

function createDataOutput(joinType) {
  const output = document.getElementById("output-container")
  const actorsDup = document.getElementById("actors-table").cloneNode(true)
  const moviesDup = document.getElementById("movies-table").cloneNode(true)
  actorsDup.id = "output-table"
  actorsDup.querySelector("#actors-body").id = "output-body"
  const newTable = actorsDup;

  switch (joinType) {
    case "reset":
      output.innerHTML = "None"
      break;

    case "inner":
      output.innerHTML = null;
      newTable.style.color = "black";
      newTable.style.backgroundColor = "white";

      newTable.deleteRow(5)

      // copy table header over
      newTable.querySelector("thead tr:first-child")
        .append(moviesDup.querySelector("th"))

      // copy column headers over
      const newTableHeaderRow = newTable.rows[1]
      const moviesHeaderRow = [...moviesDup.rows[1].children]
      moviesHeaderRow.forEach(cell => newTableHeaderRow.append(cell))

      // copy the movies row over if the movie_id matches the movies.id
      const actors = ([...actorsDup.rows])
      const movies = ([...moviesDup.rows])
      for (let i = 2; i < actors.length; i++) {
        const actor = actors[i];
        debugger
      }
      

      // if (true) {
      //     let check = [...actor.children][actor.children.length - 1].innerText
      //     debugger
      //   }

      output.append(newTable)
      break;

    case "left":
      output.innerHTML = table
      break;
      
    case "right":
      output.innerHTML = table
      break;
      
    case "full":
      output.innerHTML = table
      break;
  
    default:
      return;
  }
}


