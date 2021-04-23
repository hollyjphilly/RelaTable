import "./styles/index.scss";

const state = {
  hidden: true,
  referencesCreated: false,
}

const joinButtons = document.querySelectorAll(".join-btn");
const wrappedjoinButtons = document.querySelectorAll(".join-btn-wrapper");

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
      
      tr.classList.add("hidden");

      connectButton.style.backgroundColor = "rgb(237, 237, 237)"

      connectText.innerHTML = "Create references"
      connectText.style.color = "inherit"

      plus.innerHTML = "+";
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
      code.innerHTML = "SELECT * <br> FROM actors <br> LEFT JOIN movies <br> ON actors.movie_id = movies.id;"
      break;
      
    case "right":
      code.innerHTML = "SELECT * <br> FROM actors <br> RIGHT JOIN movies <br> ON actors.movie_id = movies.id;"
      break;
      
    case "full":
      code.innerHTML = "SELECT * <br> FROM actors <br> FULL JOIN movies <br> ON actors.movie_id = movies.id;"
      break;
  
    default:
      return;
  }
}

function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

async function joinMoviesOnActors(newTable, output, moviesDup) {
  output.append(newTable)
  let timer = 0;
  // cycle through each of the actor rows
  for (let i = 0; i < newTable.rows.length; i++) {
    if (i < 2) { // copy column headers over
      const newTableHeaderRow = newTable.rows[i]
      const moviesHeaderRow = [...moviesDup.rows[i].children]
      moviesHeaderRow.forEach(cell => newTableHeaderRow.append(cell))
      
    } else { // look at the row's movie_id
      const row = newTable.rows[i];
      const cells = [...row.children];
      const numCells = cells.length;
      const movie_id = cells[numCells-1].innerText
      
      // append the appropiate movie row's cells
      if (movie_id != "null") {
        const moviesRow = [...moviesDup.rows[parseInt(movie_id)+1].children]
        moviesRow.forEach(cell => {
          row.append(cell.cloneNode(true));
        });
        
      }
    }
    await sleep(2000);
  }
}

function createDataOutput(joinType) {
  const output = document.getElementById("output-container")
  const actorsDup = document.getElementById("actors-table").cloneNode(true)
  const moviesDup = document.getElementById("movies-table").cloneNode(true)
  const newTable = actorsDup;
  newTable.id = "output-table"
  newTable.querySelector("#actors-body").id = "output-body"
  newTable.style.color = "black";
  newTable.style.backgroundColor = "white";

    let tr = document.createElement("tr")
    let blank = document.createElement("td")
    blank.setAttribute("colspan", "4")
    tr.append(blank)

  switch (joinType) {
    case "reset":
      output.innerHTML = "None";
      break;
      
      case "inner":
      output.innerHTML = null;
      newTable.deleteRow(5); // delete the null movie_id row
      joinMoviesOnActors(newTable, output, moviesDup);
      break;

    case "left":
      output.innerHTML = null;
      joinMoviesOnActors(newTable, output, moviesDup);
      break;
      
    case "right":
      output.innerHTML = null;
      newTable.deleteRow(5); // delete the null movie_id row
      joinMoviesOnActors(newTable, output, moviesDup);
      let moviesRow = [...moviesDup.rows[2].children]
      moviesRow.forEach(cell => tr.append(cell.cloneNode(true)))
      newTable.querySelector("#output-body").prepend(tr)
      break;
      
    case "full":
      output.innerHTML = null;
      joinMoviesOnActors(newTable, output, moviesDup);
      moviesRow = [...moviesDup.rows[2].children]
      moviesRow.forEach(cell => tr.append(cell.cloneNode(true)))
      newTable.querySelector("#output-body").append(tr)
      break;
  
    default:
      return;
  }
}


