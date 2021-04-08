/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var state = {
  hidden: true,
  referencesCreated: false
};
var joinButtons = document.querySelectorAll(".join-btn");
var wrappedjoinButtons = document.querySelectorAll(".join-btn-wrapper");
document.querySelector("#connect-btn").addEventListener("click", function () {
  createReferences();
  createSQLCode("reset");
  createDataOutput("reset");
});
joinButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    createSQLCode(btn.id);
    createDataOutput(btn.id);
  });
});
wrappedjoinButtons.forEach(function (wrappedBtn) {
  wrappedBtn.addEventListener("mouseenter", toggleHelp);
});

function toggleHelp() {
  if (state.hidden && !state.referencesCreated) {
    var helpText = document.querySelector(".help-text");
    helpText.style.display = "block";
    state.hidden = false;
  }
}

function createReferences() {
  var connectButton = document.getElementById("connect-btn");
  var connectText = connectButton.firstElementChild;
  var plus = document.getElementById("plus");
  var helpText = document.querySelector(".help-text");
  document.querySelectorAll("tr .ref:last-child").forEach(function (tr) {
    if (tr.classList.contains("hidden")) {
      state.referencesCreated = true;
      tr.classList.remove("hidden");
      connectButton.style.backgroundColor = "rgb(205, 236, 255)";
      connectText.innerHTML = "References created";
      connectText.style.color = "rgb(40, 113, 158)";
      plus.innerHTML = "✓";
      plus.style.color = "rgb(40, 113, 158)";
      plus.style.fontSize = "large";
      joinButtons.forEach(function (btn) {
        btn.disabled = false;
      });
      helpText.style.display = "none";
      state.hidden = true;
    } else {
      state.referencesCreated = false;
      tr.classList.add("hidden");
      connectButton.style.backgroundColor = "rgb(237, 237, 237)";
      connectText.innerHTML = "Create references";
      connectText.style.color = "inherit";
      plus.innerHTML = "+";
      plus.style.color = "#5E5E5E";
      plus.style.fontSize = "larger";
      joinButtons.forEach(function (btn) {
        btn.disabled = true;
      });
    }
  });
}

function createSQLCode(joinType) {
  var code = document.getElementById("code");

  switch (joinType) {
    case "reset":
      code.innerHTML = "Click a JOIN button and a SQL query will generate here...";
      break;

    case "inner":
      code.innerHTML = "SELECT * <br> FROM actors <br> INNER JOIN movies <br> ON actors.movie_id = movies.id;";
      break;

    case "left":
      code.innerHTML = "left";
      break;

    case "right":
      code.innerHTML = "right";
      break;

    case "full":
      code.innerHTML = "full";
      break;

    default:
      return;
  }
}

function createDataOutput(joinType) {
  var output = document.getElementById("output-container");
  var actorsDup = document.getElementById("actors-table").cloneNode(true);
  var moviesDup = document.getElementById("movies-table").cloneNode(true);
  actorsDup.id = "output-table";
  actorsDup.querySelector("#actors-body").id = "output-body";
  var newTable = actorsDup;

  switch (joinType) {
    case "reset":
      output.innerHTML = "None";
      break;

    case "inner":
      output.innerHTML = null;
      newTable.style.color = "black";
      newTable.style.backgroundColor = "white";
      newTable.deleteRow(5); // copy table header over

      newTable.querySelector("thead tr:first-child").append(moviesDup.querySelector("th")); // copy column headers over

      var newTableHeaderRow = newTable.rows[1];

      var moviesHeaderRow = _toConsumableArray(moviesDup.rows[1].children);

      moviesHeaderRow.forEach(function (cell) {
        return newTableHeaderRow.append(cell);
      }); // copy the movies row over if the movie_id matches the movies.id

      var actors = _toConsumableArray(actorsDup.rows);

      var movies = _toConsumableArray(moviesDup.rows);

      for (var i = 2; i < actors.length; i++) {
        var actor = actors[i];
        debugger;
      } // if (true) {
      //     let check = [...actor.children][actor.children.length - 1].innerText
      //     debugger
      //   }


      output.append(newTable);
      break;

    case "left":
      output.innerHTML = table;
      break;

    case "right":
      output.innerHTML = table;
      break;

    case "full":
      output.innerHTML = table;
      break;

    default:
      return;
  }
}
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWxhdGFibGUvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vcmVsYXRhYmxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlbGF0YWJsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlbGF0YWJsZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdGF0ZSIsImhpZGRlbiIsInJlZmVyZW5jZXNDcmVhdGVkIiwiam9pbkJ1dHRvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3cmFwcGVkam9pbkJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNyZWF0ZVJlZmVyZW5jZXMiLCJjcmVhdGVTUUxDb2RlIiwiY3JlYXRlRGF0YU91dHB1dCIsImZvckVhY2giLCJidG4iLCJpZCIsIndyYXBwZWRCdG4iLCJ0b2dnbGVIZWxwIiwiaGVscFRleHQiLCJzdHlsZSIsImRpc3BsYXkiLCJjb25uZWN0QnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25uZWN0VGV4dCIsImZpcnN0RWxlbWVudENoaWxkIiwicGx1cyIsInRyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpbm5lckhUTUwiLCJjb2xvciIsImZvbnRTaXplIiwiZGlzYWJsZWQiLCJhZGQiLCJqb2luVHlwZSIsImNvZGUiLCJvdXRwdXQiLCJhY3RvcnNEdXAiLCJjbG9uZU5vZGUiLCJtb3ZpZXNEdXAiLCJuZXdUYWJsZSIsImRlbGV0ZVJvdyIsImFwcGVuZCIsIm5ld1RhYmxlSGVhZGVyUm93Iiwicm93cyIsIm1vdmllc0hlYWRlclJvdyIsImNoaWxkcmVuIiwiY2VsbCIsImFjdG9ycyIsIm1vdmllcyIsImkiLCJsZW5ndGgiLCJhY3RvciIsInRhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7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UUFBUSxDQUFDSSxJQUFULENBQWMsQ0FBZCxDQUExQjs7QUFDQSxVQUFNQyxlQUFlLHNCQUFPTixTQUFTLENBQUNLLElBQVYsQ0FBZSxDQUFmLEVBQWtCRSxRQUF6QixDQUFyQjs7QUFDQUQscUJBQWUsQ0FBQ2xDLE9BQWhCLENBQXdCLFVBQUFvQyxJQUFJO0FBQUEsZUFBSUosaUJBQWlCLENBQUNELE1BQWxCLENBQXlCSyxJQUF6QixDQUFKO0FBQUEsT0FBNUIsRUFkRixDQWdCRTs7QUFDQSxVQUFNQyxNQUFNLHNCQUFRWCxTQUFTLENBQUNPLElBQWxCLENBQVo7O0FBQ0EsVUFBTUssTUFBTSxzQkFBUVYsU0FBUyxDQUFDSyxJQUFsQixDQUFaOztBQUNBLFdBQUssSUFBSU0sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsTUFBTSxDQUFDRyxNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF3QztBQUN0QyxZQUFNRSxLQUFLLEdBQUdKLE1BQU0sQ0FBQ0UsQ0FBRCxDQUFwQjtBQUNBO0FBQ0QsT0F0QkgsQ0F5QkU7QUFDQTtBQUNBO0FBQ0E7OztBQUVBZCxZQUFNLENBQUNNLE1BQVAsQ0FBY0YsUUFBZDtBQUNBOztBQUVGLFNBQUssTUFBTDtBQUNFSixZQUFNLENBQUNQLFNBQVAsR0FBbUJ3QixLQUFuQjtBQUNBOztBQUVGLFNBQUssT0FBTDtBQUNFakIsWUFBTSxDQUFDUCxTQUFQLEdBQW1Cd0IsS0FBbkI7QUFDQTs7QUFFRixTQUFLLE1BQUw7QUFDRWpCLFlBQU0sQ0FBQ1AsU0FBUCxHQUFtQndCLEtBQW5CO0FBQ0E7O0FBRUY7QUFDRTtBQW5ESjtBQXFERCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmNvbnN0IHN0YXRlID0ge1xuICBoaWRkZW46IHRydWUsXG4gIHJlZmVyZW5jZXNDcmVhdGVkOiBmYWxzZSxcbn1cblxuY29uc3Qgam9pbkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpvaW4tYnRuXCIpXG5jb25zdCB3cmFwcGVkam9pbkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpvaW4tYnRuLXdyYXBwZXJcIilcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25uZWN0LWJ0blwiKVxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjcmVhdGVSZWZlcmVuY2VzKClcbiAgICBjcmVhdGVTUUxDb2RlKFwicmVzZXRcIilcbiAgICBjcmVhdGVEYXRhT3V0cHV0KFwicmVzZXRcIilcbiAgfSk7XG5cbmpvaW5CdXR0b25zLmZvckVhY2goYnRuID0+IHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY3JlYXRlU1FMQ29kZShidG4uaWQpXG4gICAgY3JlYXRlRGF0YU91dHB1dChidG4uaWQpXG4gIH0pO1xufSlcblxud3JhcHBlZGpvaW5CdXR0b25zLmZvckVhY2god3JhcHBlZEJ0biA9PiB7XG4gIHdyYXBwZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdG9nZ2xlSGVscCk7XG59KVxuXG5mdW5jdGlvbiB0b2dnbGVIZWxwKCkge1xuICBpZiAoc3RhdGUuaGlkZGVuICYmICFzdGF0ZS5yZWZlcmVuY2VzQ3JlYXRlZCkge1xuICAgIGNvbnN0IGhlbHBUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWxwLXRleHRcIilcbiAgICAgIGhlbHBUZXh0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgIHN0YXRlLmhpZGRlbiA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlZmVyZW5jZXMoKSB7XG4gIGNvbnN0IGNvbm5lY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbm5lY3QtYnRuXCIpXG4gIGNvbnN0IGNvbm5lY3RUZXh0ID0gY29ubmVjdEJ1dHRvbi5maXJzdEVsZW1lbnRDaGlsZFxuICBjb25zdCBwbHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbHVzXCIpXG4gIGNvbnN0IGhlbHBUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWxwLXRleHRcIilcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidHIgLnJlZjpsYXN0LWNoaWxkXCIpLmZvckVhY2godHIgPT4ge1xuICAgIFxuICAgIGlmICh0ci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpIHtcblxuICAgICAgc3RhdGUucmVmZXJlbmNlc0NyZWF0ZWQgPSB0cnVlO1xuXG4gICAgICB0ci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpXG5cbiAgICAgIGNvbm5lY3RCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjA1LCAyMzYsIDI1NSlcIlxuXG4gICAgICBjb25uZWN0VGV4dC5pbm5lckhUTUwgPSBcIlJlZmVyZW5jZXMgY3JlYXRlZFwiXG4gICAgICBjb25uZWN0VGV4dC5zdHlsZS5jb2xvciA9IFwicmdiKDQwLCAxMTMsIDE1OClcIlxuXG4gICAgICBwbHVzLmlubmVySFRNTCA9IFwi4pyTXCJcbiAgICAgIHBsdXMuc3R5bGUuY29sb3IgPSBcInJnYig0MCwgMTEzLCAxNTgpXCJcbiAgICAgIHBsdXMuc3R5bGUuZm9udFNpemUgPSBcImxhcmdlXCJcblxuICAgICAgam9pbkJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH0pXG5cbiAgICAgIGhlbHBUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIHN0YXRlLmhpZGRlbiA9IHRydWU7XG4gICAgICBcbiAgICB9IGVsc2Uge1xuXG4gICAgICBzdGF0ZS5yZWZlcmVuY2VzQ3JlYXRlZCA9IGZhbHNlO1xuICAgICAgXG4gICAgICB0ci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpXG5cbiAgICAgIGNvbm5lY3RCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjM3LCAyMzcsIDIzNylcIlxuXG4gICAgICBjb25uZWN0VGV4dC5pbm5lckhUTUwgPSBcIkNyZWF0ZSByZWZlcmVuY2VzXCJcbiAgICAgIGNvbm5lY3RUZXh0LnN0eWxlLmNvbG9yID0gXCJpbmhlcml0XCJcblxuICAgICAgcGx1cy5pbm5lckhUTUwgPSBcIitcIlxuICAgICAgcGx1cy5zdHlsZS5jb2xvciA9IFwiIzVFNUU1RVwiXG4gICAgICBwbHVzLnN0eWxlLmZvbnRTaXplID0gXCJsYXJnZXJcIlxuXG4gICAgICBqb2luQnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9KVxuXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTUUxDb2RlKGpvaW5UeXBlKSB7XG4gIGNvbnN0IGNvZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvZGVcIilcbiAgc3dpdGNoIChqb2luVHlwZSkge1xuICAgIGNhc2UgXCJyZXNldFwiOlxuICAgICAgY29kZS5pbm5lckhUTUwgPSBcIkNsaWNrIGEgSk9JTiBidXR0b24gYW5kIGEgU1FMIHF1ZXJ5IHdpbGwgZ2VuZXJhdGUgaGVyZS4uLlwiXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJpbm5lclwiOlxuICAgICAgY29kZS5pbm5lckhUTUwgPSBcIlNFTEVDVCAqIDxicj4gRlJPTSBhY3RvcnMgPGJyPiBJTk5FUiBKT0lOIG1vdmllcyA8YnI+IE9OIGFjdG9ycy5tb3ZpZV9pZCA9IG1vdmllcy5pZDtcIlxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgY29kZS5pbm5lckhUTUwgPSBcImxlZnRcIlxuICAgICAgYnJlYWs7XG4gICAgICBcbiAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgIGNvZGUuaW5uZXJIVE1MID0gXCJyaWdodFwiXG4gICAgICBicmVhaztcbiAgICAgIFxuICAgIGNhc2UgXCJmdWxsXCI6XG4gICAgICBjb2RlLmlubmVySFRNTCA9IFwiZnVsbFwiXG4gICAgICBicmVhaztcbiAgXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXRhT3V0cHV0KGpvaW5UeXBlKSB7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0LWNvbnRhaW5lclwiKVxuICBjb25zdCBhY3RvcnNEdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdG9ycy10YWJsZVwiKS5jbG9uZU5vZGUodHJ1ZSlcbiAgY29uc3QgbW92aWVzRHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3ZpZXMtdGFibGVcIikuY2xvbmVOb2RlKHRydWUpXG4gIGFjdG9yc0R1cC5pZCA9IFwib3V0cHV0LXRhYmxlXCJcbiAgYWN0b3JzRHVwLnF1ZXJ5U2VsZWN0b3IoXCIjYWN0b3JzLWJvZHlcIikuaWQgPSBcIm91dHB1dC1ib2R5XCJcbiAgY29uc3QgbmV3VGFibGUgPSBhY3RvcnNEdXA7XG5cbiAgc3dpdGNoIChqb2luVHlwZSkge1xuICAgIGNhc2UgXCJyZXNldFwiOlxuICAgICAgb3V0cHV0LmlubmVySFRNTCA9IFwiTm9uZVwiXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJpbm5lclwiOlxuICAgICAgb3V0cHV0LmlubmVySFRNTCA9IG51bGw7XG4gICAgICBuZXdUYWJsZS5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgIG5ld1RhYmxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcblxuICAgICAgbmV3VGFibGUuZGVsZXRlUm93KDUpXG5cbiAgICAgIC8vIGNvcHkgdGFibGUgaGVhZGVyIG92ZXJcbiAgICAgIG5ld1RhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0aGVhZCB0cjpmaXJzdC1jaGlsZFwiKVxuICAgICAgICAuYXBwZW5kKG1vdmllc0R1cC5xdWVyeVNlbGVjdG9yKFwidGhcIikpXG5cbiAgICAgIC8vIGNvcHkgY29sdW1uIGhlYWRlcnMgb3ZlclxuICAgICAgY29uc3QgbmV3VGFibGVIZWFkZXJSb3cgPSBuZXdUYWJsZS5yb3dzWzFdXG4gICAgICBjb25zdCBtb3ZpZXNIZWFkZXJSb3cgPSBbLi4ubW92aWVzRHVwLnJvd3NbMV0uY2hpbGRyZW5dXG4gICAgICBtb3ZpZXNIZWFkZXJSb3cuZm9yRWFjaChjZWxsID0+IG5ld1RhYmxlSGVhZGVyUm93LmFwcGVuZChjZWxsKSlcblxuICAgICAgLy8gY29weSB0aGUgbW92aWVzIHJvdyBvdmVyIGlmIHRoZSBtb3ZpZV9pZCBtYXRjaGVzIHRoZSBtb3ZpZXMuaWRcbiAgICAgIGNvbnN0IGFjdG9ycyA9IChbLi4uYWN0b3JzRHVwLnJvd3NdKVxuICAgICAgY29uc3QgbW92aWVzID0gKFsuLi5tb3ZpZXNEdXAucm93c10pXG4gICAgICBmb3IgKGxldCBpID0gMjsgaSA8IGFjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBhY3RvciA9IGFjdG9yc1tpXTtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgIH1cbiAgICAgIFxuXG4gICAgICAvLyBpZiAodHJ1ZSkge1xuICAgICAgLy8gICAgIGxldCBjaGVjayA9IFsuLi5hY3Rvci5jaGlsZHJlbl1bYWN0b3IuY2hpbGRyZW4ubGVuZ3RoIC0gMV0uaW5uZXJUZXh0XG4gICAgICAvLyAgICAgZGVidWdnZXJcbiAgICAgIC8vICAgfVxuXG4gICAgICBvdXRwdXQuYXBwZW5kKG5ld1RhYmxlKVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgb3V0cHV0LmlubmVySFRNTCA9IHRhYmxlXG4gICAgICBicmVhaztcbiAgICAgIFxuICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgb3V0cHV0LmlubmVySFRNTCA9IHRhYmxlXG4gICAgICBicmVhaztcbiAgICAgIFxuICAgIGNhc2UgXCJmdWxsXCI6XG4gICAgICBvdXRwdXQuaW5uZXJIVE1MID0gdGFibGVcbiAgICAgIGJyZWFrO1xuICBcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuO1xuICB9XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==