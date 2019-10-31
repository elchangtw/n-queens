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
  var board  = new Board({'n':n});
  // var rooksViable = function(board) {
  //   return !( board.hasAnyRowConflicts() || board.hasAnyColConflicts() );
  // }
  //board = this.rows(); //gets whole matrix as arrays

  var findNRooksSolutionHelper = function(currBoard, currRow) {
    if(currRow < n) {

      for( var i = 0; i < n; i++ ) { //i refers to col
        //set row[i] to 1
        var row = currBoard.get(currRow);
        row[i] = 1;
        currBoard.set(currRow, row);

        //if hasConflicts, set row[i] to 0
        if ( currBoard.hasAnyColConflicts() ) {
          row[i] = 0;
          currBoard.set(currRow, row);
        } else {
          if( currRow+1 < n ) {
            currRow++;
            findNRooksSolutionHelper(currBoard, currRow);
          } else {
            return currBoard.rows();
          }
        }
      }
    }
    //  else {
    //   return currBoard;
    // }
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

  // var rooksViable = function(board) {
  //   return !( board.hasAnyRowConflicts() || board.hasAnyColConflicts() );
  // }
  //board = this.rows(); //gets whole matrix as arrays

  var findNRooksSolutionHelper = function(currBoard, currRow) {
    if(currRow < n) {
      for( var i = 0; i < n; i++ ) { //i refers to col
        //set row[i] to 1
        var row = currBoard.get(currRow);
        if(i>0) row[i-1] = 0;
        row[i] = 1;
        currBoard.set(currRow, row);

        //if hasConflicts, set row[i] to 0
        if ( currBoard.hasAnyColConflicts() ) {
          row[i] = 0;
          currBoard.set(currRow, row);
        } else {
          if( currRow+1 < n ) {
            currRow++;
            findNRooksSolutionHelper(currBoard, currRow);
          } else {
            var temp = currBoard.rows(); //remove when working
            console.log(temp); //remove when working
            solutionCount++;
          }
        }

        //reset board
        row[i] = 0;
        currBoard.set(currRow, row);
      }
    }
  }
  findNRooksSolutionHelper(board, 0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
