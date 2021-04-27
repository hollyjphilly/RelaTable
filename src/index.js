import "./styles/index.scss";
import "./images/portfolio_icon.png";

const state = {
  hidden: true,
  referencesCreated: false,
  last: "",
  lastId: "",
}

const joinButtons = document.querySelectorAll(".join-btn");
const wrappedjoinButtons = document.querySelectorAll(".join-btn-wrapper");

document.querySelector("#connect-btn")
  .addEventListener("click", () => {
    createReferences()
    createSQLCode("reset")
    createDataOutput("reset")
    highlightTables("reset")
    changeButtonFill()
  });

joinButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    createSQLCode(btn.id)
    createDataOutput(btn.id)
  });
  btn.addEventListener("mouseenter", () => {
    addButtonText(btn.id)
  })
  btn.addEventListener("mouseleave", () => {
    removeButtonText(btn.id)
  })
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
  [...newTable.rows].forEach(row => {
    row.removeAttribute('style');
  })
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
      const movie_id = cells[numCells-1].innerText;
      await sleep(500);

      // append the appropiate movie row's cells
      if (movie_id <= 3) {
        const moviesRow = [...moviesDup.rows[parseInt(movie_id)+1].children]
        moviesRow.forEach(cell => {
          row.append(cell.cloneNode(true));
        });

      } else {

        const td = document.createElement('td');
        td.setAttribute("colspan", "4");
        td.className = "tble-cell null";
        td.innerText = "null";
        row.append(td);

      }
      
    }
  
  }
}

function changeButtonFill(className) {
  if (state.last) document.querySelector(`.${state.last}`).style.fill = "#888888";
  if (state.last === "all") document.querySelectorAll(`.${state.last}`)
    .forEach(el => {
      el.style.fill = "#888888";
    })
  if (className) document.querySelector(`.${className}`).style.fill = "rgb(205, 236, 255)";
  if (className === "all") document.querySelectorAll(`.${className}`)
    .forEach(el => {
      el.style.fill = "rgb(205, 236, 255)";
    })
  state.last = className;
};

function removeButtonText(buttonId) {
    const button = document.querySelector(`#${buttonId}`)
    button.children[0].innerText = `${buttonId.toUpperCase()} JOIN`
    button.children[0].classList.remove("hover-info")
    button.children[1].classList.remove("hidden")
}

function addButtonText(buttonId) {
    const button = document.querySelector(`#${buttonId}`)
    switch (buttonId) {
      case "inner":
        button.children[0].innerText = "Returns matching, referenced rows"
        button.children[0].classList.add("hover-info");
        button.children[1].classList.add("hidden");
        break;

      case "left":
        button.children[0].innerText = "Returns left table + referenced rows"
        button.children[0].classList.add("hover-info");
        button.children[1].classList.add("hidden");
        break;

      case "right":
        button.children[0].innerText = "Returns right table + referenced rows"
        button.children[0].classList.add("hover-info");
        button.children[1].classList.add("hidden");
        break;

      case "full":
        button.children[0].innerText = "Returns both tables with references"
        button.children[0].classList.add("hover-info");
        button.children[1].classList.add("hidden");
        break;
    
      default:
        break;
    }
}

function highlightTables(joinType) {
  switch (joinType) {
    case "reset":
      document.querySelectorAll("#a1, #a2, #a3, #a4, #a5, #a6, #m1, #m2, #m3")
      .forEach(el => {
        el.style.transition = "background 0.1s linear 0s";
        el.style.backgroundColor = "#fff";
      });
      break;
      
    case "inner":
      document.querySelectorAll("#a1, #a2, #a3, #a5, #a6, #m2, #m3")
      .forEach(el => {
        el.style.transition = "background 0.15s linear 0s";
        el.style.backgroundColor = "rgb(205, 236, 255)";
      });
      break;

    case "left":
      document.querySelectorAll("#a1, #a2, #a3, #a4, #a5, #a6")
      .forEach(el => {
        el.style.transition = "background 0.15s linear 0s";
        el.style.backgroundColor = "rgb(205, 236, 255)";
      });
      break;
      
    case "right":
      document.querySelectorAll("#m1, #m2, #m3")
      .forEach(el => {
        el.style.transition = "background 0.15s linear 0s";
        el.style.backgroundColor = "rgb(205, 236, 255)";
      });
      break;
      
    case "full":
      document.querySelectorAll("#a1, #a2, #a3, #a4, #a5, #a6, #m1, #m2, #m3")
      .forEach(el => {
        el.style.transition = "background 0.1s linear 0s";
        el.style.backgroundColor = "rgb(205, 236, 255)";
      });
      break;
  
    default:
      return;
  }
}

async function createDataOutput(joinType) {
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
      changeButtonFill("center-fill");
      highlightTables("reset");
      await sleep(510);
      highlightTables("inner");
      newTable.deleteRow(5); // delete the null movie_id row
      joinMoviesOnActors(newTable, output, moviesDup);
      break;

    case "left":
      output.innerHTML = null;
      changeButtonFill("left-fill");
      highlightTables("reset");
      await sleep(510);
      highlightTables("left");
      joinMoviesOnActors(newTable, output, moviesDup);
      break;
      
    case "right":
      output.innerHTML = null;
      changeButtonFill("right-fill");
      highlightTables("reset");
      await sleep(510);
      highlightTables("right");
      newTable.deleteRow(5); // delete the null movie_id row
      await joinMoviesOnActors(newTable, output, moviesDup);
      addJurassicPark(newTable, moviesDup);
      break;
      
    case "full":
      output.innerHTML = null;
      changeButtonFill("all")
      highlightTables("reset");
      await sleep(510);
      highlightTables("full");
      await joinMoviesOnActors(newTable, output, moviesDup);
      addJurassicPark(newTable, moviesDup);
      break;
  
    default:
      return;
  }
}

async function addJurassicPark(newTable, moviesDup) {
  await sleep(500);
  newTable.append(document.createElement('tr'));
  const row = newTable.rows[newTable.rows.length - 1];
  const td = document.createElement('td');
  td.setAttribute("colspan", "4");
  td.className = "tble-cell null";
  td.innerText = "null";
  row.append(td);
  let moviesRow = [...moviesDup.rows[2].children]
  moviesRow.forEach(cell => row.append(cell.cloneNode(true)))
}
