/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = [];
  var board = new Board({'n':n});

  var findNRooksSolutionHelper = function(currBoard, currRow) {
    if(currRow < n) {
      var row = currBoard.get(currRow);
      for( var i = 0; i < n; i++ ) { //i refers to col
        row[i] = 1;
        currBoard.set(currRow, row);

        //if hasConflicts, set row[i] to 0, else recurse
        if ( currBoard.hasAnyColConflicts() ) {
          row[i] = 0;
          currBoard.set(currRow, row);
        } else {
          return findNRooksSolutionHelper(currBoard, currRow + 1);
        }
        //reset board
        row[i] = 0;
        currBoard.set(currRow, row);
      }
    } else {
      return currBoard.rows();
    }
  }

  solution = findNRooksSolutionHelper(board, 0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  if(solution === undefined) {
    return [];
  }
  return solution;
};





// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board  = new Board({'n':n});

  var findNRooksSolutionHelper = function(currBoard, currRow) {
    if(currRow < n) {
      var row = currBoard.get(currRow);
      for( var i = 0; i < n; i++ ) { //i refers to col
        row[i] = 1;
        currBoard.set(currRow, row);

        //if hasConflicts, set row[i] to 0, else recurse
        if ( currBoard.hasAnyColConflicts() ) {
          row[i] = 0;
          currBoard.set(currRow, row);
        } else {
          findNRooksSolutionHelper(currBoard, currRow + 1);
        }
        //reset board
        row[i] = 0;
        currBoard.set(currRow, row);
      }
    } else {
      var temp = currBoard.rows();
      solutionCount++;
    }
  }
  findNRooksSolutionHelper(board, 0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};





// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = [];
  var solutionCount = 0; //fixme
  var board  = new Board({'n':n});
  var savedBoard = undefined;

  var findNQueensSolutionsHelper = function(currBoard, currRow) {
    if(currRow < n) {
      var row = currBoard.get(currRow);
      for( var i = 0; i < n; i++ ) { //i refers to col
        row[i] = 1;
        currBoard.set(currRow, row);

        //if hasConflicts, set row[i] to 0, else recurse
        if ( currBoard.hasAnyColConflicts() || currBoard.hasAnyMajorDiagonalConflicts() || currBoard.hasAnyMinorDiagonalConflicts() ) {
          row[i] = 0;
          currBoard.set(currRow, row);
        } else {
          findNQueensSolutionsHelper(currBoard, currRow + 1);
        }
        //reset board
        row[i] = 0;
        currBoard.set(currRow, row);
      }
    } else {
      var temp = currBoard.rows();
      if(solutionCount < 1) {
        savedBoard = JSON.parse(JSON.stringify(temp));
      }
      solutionCount++;
    }
  }

  findNQueensSolutionsHelper(board, 0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  if(savedBoard === undefined) {
    var emptyboard = [];
    for(var i = 0; i < n; i++){
      emptyboard.push([]);
    }
    return emptyboard;
  }
  return savedBoard;
};





// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board  = new Board({'n':n});

  var findNQueensSolutionsHelper = function(currBoard, currRow) {
    if(currRow < n) {
      var row = currBoard.get(currRow);
      for( var i = 0; i < n; i++ ) { //i refers to col
        row[i] = 1;
        currBoard.set(currRow, row);

        //if hasConflicts, set row[i] to 0, else recurse
        if ( currBoard.hasAnyColConflicts() || currBoard.hasAnyMajorDiagonalConflicts() || currBoard.hasAnyMinorDiagonalConflicts() ) {
          row[i] = 0;
          currBoard.set(currRow, row);
        } else {
          findNQueensSolutionsHelper(currBoard, currRow + 1);
        }
        //reset board
        row[i] = 0;
        currBoard.set(currRow, row);
      }
    } else {
      var temp = currBoard.rows();
      solutionCount++;
    }
  }

  findNQueensSolutionsHelper(board, 0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
