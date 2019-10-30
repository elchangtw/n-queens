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
  var solution = new Board({n:n});

  var rooksViable = function(board) {
    return !( board.hasAnyRowConflicts() || board.hasAnyColConflicts() );
  }

  var findNRooksSolutionHelper = function(currBoard, step) {
    
    if( !rooksViable(currBoard) ){
      return false; //do nothing?
    } else if ( step === n ){
      // solution = currboard?
    } else{
      //recurse something

      for( var i = 0; i < n; i++ ) {
        for( var j = 0; j < n; j++ ) {
          //var nextBoard, set board with new item, step++
          //findNRooksSolutionHelper(nextBoard, step);
        }
      }
    }

    /////////////////////////////////////////////////////////////
    for( var i = 0; i < n; i++ ) {
      for( var j = 0; j < n; j++ ) {
        var row = currBoard.get(i);
        if( !row[j] ){
          // if rooksViable true, set rook in row column
          // var futureBoard = Object.create(currBoard);
          // futureBoard.set()
          // set currBoard at i j with rook
          // check currBoard with rooksViable
          // - if true recurse
          // - if false remove rook
        }
      }
    }
  }

  findNRooksSolutionHelper(solution, 0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

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
