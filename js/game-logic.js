// All code should be written in this file.
//player moves
let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerOneMoveThreeType;
let playerOneMoveThreeValue
let playerOneScore;

//player2/computer moves
let playerTwoMoveOneType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;
let playerTwoScore;

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
    if (typeof value != 'number') {
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
        switch(playerOneMoveOneType) {
            case 'rock':
                switch(playerTwoMoveOneType) {
                    case 'rock':
                        if (playerOneMoveOneValue === playerTwoMoveOneValue) {
                            playerOneScore = 0;
                            playerTwoScore = 0;
                            return 'Tie';
                        } else if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                            playerOneScore = 1;
                            playerTwoScore = 0;
                            return 'Player One';
                        } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
                            playerOneScore = 0;
                            playerTwoScore = 1;
                            return 'Player Two';
                        }
                        break;
                    case 'paper':
                        playerOneScore = 0;
                        playerTwoScore = 1;
                        return 'Player Two';
                        break;
                    case 'scissors':
                        playerOneScore = 1;
                        playerTwoScore = 0;
                        return 'Player One';
                        break;
                    default:
                        return null;
                        break;
                }
                break;
            case 'paper':
                switch(playerTwoMoveOneType) {
                    case 'rock':
                        playerOneScore = 1;
                        playerTwoScore = 0;
                        return 'Player One';
                        break;
                    case 'paper':
                        if (playerOneMoveOneValue === playerTwoMoveOneValue) {
                            playerOneScore = 0;
                            playerTwoScore = 0;
                            return 'Tie';
                        } else if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                            playerOneScore = 1;
                            playerTwoScore = 0;
                            return 'Player One';
                        } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
                            playerOneScore = 0;
                            playerTwoScore = 1;
                            return 'Player Two';
                        }
                        break;
                    case 'scissors':
                        playerOneScore = 0;
                        playerTwoScore = 1;
                        return 'Player Two';
                        break;
                    default:
                        return null;
                        break;
                }
                break;
            case 'scissors':
                switch(playerTwoMoveOneType) {
                    case 'rock':
                        playerOneScore = 0;
                        playerTwoScore = 1;
                        return 'Player Two';
                        break;
                    case 'paper':
                        playerOneScore = 1;
                        playerTwoScore = 0;
                        return 'Player One';
                        break;
                    case 'scissors':
                        if (playerOneMoveOneValue === playerTwoMoveOneValue) {
                            playerOneScore = 0;
                            playerTwoScore = 0;
                            return 'Tie';
                        } else if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                            playerOneScore = 1;
                            playerTwoScore = 0;
                            return 'Player One';
                        } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
                            playerOneScore = 0;
                            playerTwoScore = 1;
                            return 'Player Two';
                        }
                        break;
                    default:
                        return null;
                        break;
                }
                break;
            default:
                return null;
                break;
        }
    } else if (round === 2) {
        switch(playerOneMoveTwoType) {
            case 'rock':
                switch(playerTwoMoveTwoType) {
                    case 'rock':
                        if (playerOneMoveTwoValue === playerTwoMoveTwoValue) {
                            return 'Tie';
                        } else if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                            playerOneScore++ ;
                            return 'Player One';
                        } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
                            playerTwoScore++ ;
                            return 'Player Two';
                        }
                        break;
                    case 'paper':
                        playerTwoScore++ ;
                        return 'Player Two';
                        break;
                    case 'scissors':
                        playerOneScore++ ;
                        return 'Player One';
                        break;
                    default:
                        return null;
                        break;
                }
                break;
            case 'paper':
                switch(playerTwoMoveTwoType) {
                    case 'rock':
                        playerOneScore++ ;
                        return 'Player One';
                        break;
                    case 'paper':
                        if (playerOneMoveTwoValue === playerTwoMoveTwoValue) {
                            return 'Tie';
                        } else if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                            playerOneScore++ ;
                            return 'Player One';
                        } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
                            playerTwoScore++ ;
                            return 'Player Two';
                        }
                        break;
                    case 'scissors':
                        playerTwoScore++ ;
                        return 'Player Two';
                        break;
                    default:
                        return null;
                        break;
                }
                break;
            case 'scissors':
                switch(playerTwoMoveTwoType) {
                    case 'rock':
                        playerTwoScore++ ;
                        return 'Player Two';
                        break;
                    case 'paper':
                        playerOneScore++ ;
                        return 'Player One';
                        break;
                    case 'scissors':
                        if (playerOneMoveTwoValue === playerTwoMoveTwoValue) {
                            return 'Tie';
                        } else if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                            playerOneScore++ ;
                            return 'Player One';
                        } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
                            playerTwoScore++ ;
                            return 'Player Two';
                        }
                        break;
                    default:
                        return null;
                        break;
                }
                break;
            default:
                return null;
                break;
        }
    } else if (round === 3) {
        switch(playerOneMoveThreeType) {
            case 'rock':
                switch(playerTwoMoveThreeType) {
                    case 'rock':
                        if (playerOneMoveThreeValue === playerTwoMoveThreeValue) {
                            return 'Tie';
                        } else if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
                            playerOneScore++;
                            return 'Player One';
                        } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
                            playerTwoScore++ ;
                            return 'Player Two';
                        }
                        break;
                    case 'paper':
                        playerTwoScore++ ;
                        return 'Player Two';
                        break;
                    case 'scissors':
                        playerOneScore++ ;    
                        return 'Player One';
                        break;
                    default:
                        return null;
                        break;
                }
                break;
            case 'paper':
                switch(playerTwoMoveThreeType) {
                    case 'rock':
                        playerOneScore++;
                        return 'Player One';
                        break;
                    case 'paper':
                        if (playerOneMoveThreeValue === playerTwoMoveThreeValue) {
                            return 'Tie';
                        } else if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
                            playerOneScore++;
                            return 'Player One';
                        } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
                            playerTwoScore++;
                            return 'Player Two';
                        }
                        break;
                    case 'scissors':
                        playerTwoScore++;
                        return 'Player Two';
                        break;
                    default:
                        return null;
                        break;
                }
                break;
            case 'scissors':
                switch(playerTwoMoveThreeType) {
                    case 'rock':
                        playerTwoScore++;
                        return 'Player Two';
                        break;
                    case 'paper':
                        playerOneScore++;
                        return 'Player One';
                        break;
                    case 'scissors':
                        if (playerOneMoveThreeValue === playerTwoMoveThreeValue) {
                            return 'Tie';
                        } else if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
                            playerOneScore++;
                            return 'Player One';
                        } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
                            playerTwoScore++;
                            return 'Player Two';
                        }
                        break;
                    default:
                        return null;
                        break;
                }
                break;
            default:
                return null;
                break;
        }
    } else {
        return null;
    }
}

function getGameWinner(){
    if (playerOneScore > playerTwoScore) {
        return 'Player One';
    } else if (playerOneScore < playerTwoScore) {
        return 'Player Two';
    } else if (playerOneScore === playerTwoScore) {
        return 'Tie';
    } else {
        return undefined;
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