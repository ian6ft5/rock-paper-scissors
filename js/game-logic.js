// All code should be written in this file.
//player moves
let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerOneMoveThreeType;
let playerOneMoveThreeValue;

//player2/computer moves
let playerTwoMoveOneType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;

let invalidRound = false;

/*function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    if (player === 'Player One') {
        playerOneMoveOneType = validateType(moveOneType);
        playerOneMoveOneValue = validateValue(moveOneValue);
        playerOneMoveTwoType = validateType(moveTwoType);
        playerOneMoveTwoValue = validateValue(moveTwoValue);
        playerOneMoveThreeType = validateType(moveThreeType);
        playerOneMoveThreeValue = validateValue(moveThreeValue);
    }
    else if (player === 'Player Two') {
        playerTwoMoveOneType = validateType(moveOneType);
        playerTwoMoveOneValue = validateValue(moveOneValue);
        playerTwoMoveTwoType = validateType(moveTwoType);
        playerTwoMoveTwoValue = validateValue(moveTwoValue);
        playerTwoMoveThreeType = validateType(moveThreeType);
        playerTwoMoveThreeValue = validateValue(moveThreeValue);
    }
    else {
        return null;
    }
}*/

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    let p1m1t;
    let p1m2t;
    let p1m3t;

    let p2m1t;
    let p2m2t;
    let p2m3t;

    //check for # and within range
    validateAllValues(moveOneValue, moveTwoValue, moveThreeValue);
    if (invalidRound == true) {
        return;
    }

    switch (player) {
        case 'Player One':
            p1m1t = validateType(moveOneType);
            p1m2t = validateType(moveTwoType);
            p1m3t = validateType(moveThreeType);
            if (invalidRound == true) {
                return;
            } else {
                break;
            }
        case 'Player Two':
            p2m1t = validateType(moveOneType);
            p2m2t = validateType(moveTwoType);
            p2m3t = validateType(moveThreeType);
            if (invalidRound == true) {
                return;
            } else {
                
                break;
            }
        default:
            return;
    }

    if (invalidRound == false) {
        if (player == 'Player One') {
            playerOneMoveOneType = moveOneType;
            playerOneMoveOneValue = moveOneValue;
            playerOneMoveTwoType = moveTwoType;
            playerOneMoveTwoValue = moveTwoValue;
            playerOneMoveThreeType = moveThreeType;
            playerOneMoveThreeValue = moveThreeValue;
        } else {
            playerTwoMoveOneType = moveOneType;
            playerTwoMoveOneValue = moveOneValue;
            playerTwoMoveTwoType = moveTwoType;
            playerTwoMoveTwoValue = moveTwoValue;
            playerTwoMoveThreeType = moveThreeType;
            playerTwoMoveThreeValue = moveThreeValue;
        }
    }
    return;    
}

function validateType(type) {
    switch (type) {
        case 'rock':
            return 'rock';
            break;
        case 'paper':
            return 'paper';
            break;
        case 'scissors':
            return 'scissors';
            break;
        default:
            invalidRound = true;
            return undefined;
            break;
    }
}

function validateValue(value) {
    if (value == undefined) {
        invalidRound = true;
    } else if (typeof value != 'number') {
        invalidRound = true;
    } else if (value < 1) {
        invalidRound = true;
    } else if (value > 99) {
        invalidRound = true;
    } else {
        return value;
    }
}

function validateAllValues(valueOne, valueTwo, valueThree) {
    v1 = validateValue(valueOne);
    v2 = validateValue(valueTwo);
    v3 = validateValue(valueThree);

    if (invalidRound == true) {
        return;
    } else if ((v1 + v2 + v3) > 99) {
        invalidRound = true;
        return;
    }
}

function getRoundWinner(round) {
    if (round === 1) {
        if (checkValidRound(1)) {
            switch(playerOneMoveOneType) {
                case 'rock':
                    switch(playerTwoMoveOneType) {
                        case 'rock':
                            if (playerOneMoveOneValue === playerTwoMoveOneValue) {
                                return 'Tie';
                            } else if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                                return 'Player One';
                            } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
                                return 'Player Two';
                            }
                            break;
                        case 'paper':
                            return 'Player Two';
                        case 'scissors':
                            return 'Player One';
                        default:
                            return null;
                    }
                    break;
                case 'paper':
                    switch(playerTwoMoveOneType) {
                        case 'rock':
                            return 'Player One';
                        case 'paper':
                            if (playerOneMoveOneValue === playerTwoMoveOneValue) {
                                return 'Tie';
                            } else if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                                return 'Player One';
                            } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
                                return 'Player Two';
                            }
                            break;
                        case 'scissors':
                            return 'Player Two';
                        default:
                            return null;
                    }
                    break;
                case 'scissors':
                    switch(playerTwoMoveOneType) {
                        case 'rock':
                            return 'Player Two';
                        case 'paper':
                            return 'Player One';
                        case 'scissors':
                            if (playerOneMoveOneValue === playerTwoMoveOneValue) {
                                return 'Tie';
                            } else if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                                return 'Player One';
                            } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
                                return 'Player Two';
                            }
                            break;
                        default:
                            return null;
                    }
                    break;
                default:
                    return null;
            }
        } else {
            return null;
        }
    } else if (round === 2) {
        if (checkValidRound(2)) {
            switch(playerOneMoveTwoType) {
                case 'rock':
                    switch(playerTwoMoveTwoType) {
                        case 'rock':
                            if (playerOneMoveTwoValue === playerTwoMoveTwoValue) {
                                return 'Tie';
                            } else if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {    
                                return 'Player One';
                            } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
                                return 'Player Two';
                            }
                            break;
                        case 'paper':
                            return 'Player Two';
                        case 'scissors':
                            return 'Player One';
                        default:
                            return null;
                    }
                    break;
                case 'paper':
                    switch(playerTwoMoveTwoType) {
                        case 'rock':
                            return 'Player One';
                        case 'paper':
                            if (playerOneMoveTwoValue === playerTwoMoveTwoValue) {
                                return 'Tie';
                            } else if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                                return 'Player One';
                            } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
                                return 'Player Two';
                            }
                            break;
                        case 'scissors':
                            return 'Player Two';
                        default:
                            return null;
                    }
                    break;
                case 'scissors':
                    switch(playerTwoMoveTwoType) {
                        case 'rock':
                            return 'Player Two';
                        case 'paper':
                            return 'Player One';
                        case 'scissors':
                            if (playerOneMoveTwoValue === playerTwoMoveTwoValue) {
                                return 'Tie';
                            } else if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                                return 'Player One';
                            } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
                                return 'Player Two';
                            }
                            break;
                        default:
                            return null;
                    }
                    break;
                default:
                    return null;
            }
        } else {
            return null;
        }
    } else if (round === 3) {
        if (checkValidRound(3)) {
            switch(playerOneMoveThreeType) {
                case 'rock':
                    switch(playerTwoMoveThreeType) {
                        case 'rock':
                            if (playerOneMoveThreeValue === playerTwoMoveThreeValue) {
                                return 'Tie';
                            } else if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
                                return 'Player One';
                            } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
                                return 'Player Two';
                            }
                            break;
                        case 'paper':
                            return 'Player Two';
                        case 'scissors':
                            return 'Player One';
                        default:
                            return null;
                    }
                    break;
                case 'paper':
                    switch(playerTwoMoveThreeType) {
                        case 'rock':
                            return 'Player One';
                        case 'paper':
                            if (playerOneMoveThreeValue === playerTwoMoveThreeValue) {
                                return 'Tie';
                            } else if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
                                return 'Player One';
                            } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
                                return 'Player Two';
                            }
                            break;
                        case 'scissors':
                            return 'Player Two';
                        default:
                            return null;
                    }
                    break;
                case 'scissors':
                    switch(playerTwoMoveThreeType) {
                        case 'rock':
                            return 'Player Two';
                        case 'paper':
                            return 'Player One';
                        case 'scissors':
                            if (playerOneMoveThreeValue === playerTwoMoveThreeValue) {
                                return 'Tie';
                            } else if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
                                return 'Player One';
                            } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
                                return 'Player Two';
                            }
                            break;
                        default:
                            return null;
                    }
                    break;
                default:
                    return null;
            }
        } else {
            return null;
        }
    } else {
        return null;
    }
}

function checkValidRound(round) {
    switch (round) {
        case 1:
            if (playerOneMoveOneType == undefined || playerOneMoveOneValue == undefined || playerTwoMoveOneType == undefined || playerTwoMoveOneValue == undefined) {
                return false;
            } else {
                return true;
            }
        case 2:
            if (playerOneMoveTwoType == undefined || playerOneMoveTwoValue == undefined || playerTwoMoveTwoType == undefined || playerTwoMoveTwoValue == undefined) {
                return false;
            } else {
                return true;
            }
        case 3:
            if (playerOneMoveThreeType == undefined || playerOneMoveThreeValue == undefined || playerTwoMoveThreeType == undefined || playerTwoMoveThreeValue == undefined) {
                return false;
            } else {
                return true;
            }
    }
}

function getGameWinner(){
    if (checkValidRound(1) == false || checkValidRound(2) == false || checkValidRound(3) == false) {
        return null;
    }
    
    let score1 = 0;
    let score2 = 0;
    let round1 = getRoundWinner(1);
    let round2 = getRoundWinner(2);
    let round3 = getRoundWinner(3);

    if (round1 == 'Player One') {
        score1++;
    } else if (round1 == 'Player Two') {
        score2++;
    }

    if (round2 == 'Player One') {
        score1++;
    } else if (round2 == 'Player Two') {
        score2++;
    }

    if (round3 == 'Player One') {
        score1++;
    } else if (round3 == 'Player Two') {
        score2++;
    }

    if (score1 > score2) {
        return 'Player One';
    } else if (score1 < score2) {
        return 'Player Two';
    } else if (score1 == score2) {
        return 'Tie';
    }
}


function setComputerMoves(){
    //move type section
    const tempOne = Math.floor(Math.random() * 3);
    switch(tempOne) {
        case 0:
            playerTwoMoveOneType = 'rock';
            break;
        case 1:
            playerTwoMoveOneType = 'paper';
            break;
        case 2:
            playerTwoMoveOneType = 'scissors';
    }
    const tempTwo = Math.floor(Math.random() * 3);
    switch(tempTwo) {
        case 0:
            playerTwoMoveTwoType = 'rock';
            break;
        case 1:
            playerTwoMoveTwoType = 'paper';
            break;
        case 2:
            playerTwoMoveTwoType = 'scissors';
    }
    const tempThree = Math.floor(Math.random() * 3);
    switch(tempThree) {
        case 0:
            playerTwoMoveThreeType = 'rock';
            break;
        case 1:
            playerTwoMoveThreeType = 'paper';
            break;
        case 2:
            playerTwoMoveThreeType = 'scissors';
    }

    //value section
    playerTwoMoveOneValue = Math.ceil(Math.random() * 97);
    playerTwoMoveTwoValue = Math.ceil(Math.random() * (98 - playerTwoMoveOneValue));
    playerTwoMoveThreeValue = (99 - playerTwoMoveTwoValue - playerTwoMoveOneValue);
}