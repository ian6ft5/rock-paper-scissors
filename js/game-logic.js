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

/*function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    if (player == 'Player One') {
        playerOneMoveOneType = validateType(moveOneType);
        playerOneMoveOneValue = validateValue(moveOneValue);
        playerOneMoveTwoType = validateType(moveTwoType);
        playerOneMoveTwoValue = validateValue(moveTwoValue);
        playerOneMoveThreeType = validateType(moveThreeType);
        playerOneMoveThreeValue = validateValue(moveThreeValue);
    }
    else if (player == 'Player Two') {
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
    if (player == 'Player One') {
        //validate move one
        if (validateType(moveOneType) == undefined) {
            return;
        } else {
            playerOneMoveOneType = moveOneType;
        }
        if (validateValue(moveOneValue) == undefined) {
            return;
        } else {
            playerOneMoveOneValue = moveOneValue;
        }
        //validate move two
        if (validateType(moveTwoType) == undefined) {
            return;
        } else {
            playerOneMoveTwoType = moveTwoType;
        }
        if (validateValue(moveTwoValue) == undefined) {
            return;
        } else {
            playerOneMoveTwoValue = moveTwoValue;
        }
        //validate move three
        if (validateType(moveThreeType) == undefined) {
            return;
        } else {
            playerOneMoveThreeType = moveThreeType;
        }
        if (validateValue(moveThreeValue) == undefined) {
            return;
        } else {
            playerOneMoveThreeValue = moveThreeValue;
        }
    }
    else if (player == 'Player Two') {
        //validate move one
        if (validateType(moveOneType) == undefined) {
            return;
        } else {
            playerTwoMoveOneType = moveOneType;
        }
        if (validateValue(moveOneValue) == undefined) {
            return;
        } else {
            playerTwoMoveOneValue = moveOneValue;
        }
        //validate move two
        if (validateType(moveTwoType) == undefined) {
            return;
        } else {
            playerTwoMoveTwoType = moveTwoType;
        }
        if (validateValue(moveTwoValue) == undefined) {
            return;
        } else {
            playerTwoMoveTwoValue = moveTwoValue;
        }
        //validate move three
        if (validateType(moveThreeType) == undefined) {
            return;
        } else {
            playerTwoMoveThreeType = moveThreeType;
        }
        if (validateValue(moveThreeValue) == undefined) {
            return;
        } else {
            playerTwoMoveThreeValue = moveThreeValue;
        }
    }
    else {
        return null;
    }
}

function validateType(type) {
    type => {
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
                return undefined;
                break;
        }
    }
    return type;
}

function validateValue(value) {
    value => {
        if (typeof value != number) {
            return undefined;
        } else if (value < 1) {
            return undefined;
        } else if (value > 97) {
            return undefined;
        } else {
            return value;
        }
    }
    return value;
}

console.log(validateType('rock'));
console.log(validateValue(14));
function getRoundWinner(round) {
    if (round == 1) {
        switch(playerOneMoveOneType) {
            case 'rock':
                switch(playerTwoMoveOneType) {
                    case 'rock':
                        if (playerOneMoveOneValue == playerTwoMoveOneValue) {
                            return 'Tie';
                        } else if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                            return 'Player One';
                        } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
                            return 'Player Two';
                        }
                        break;
                    case 'paper':
                        return 'Player Two';
                        break;
                    case 'scissors':
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
                        return 'Player One';
                        break;
                    case 'paper':
                        if (playerOneMoveOneValue == playerTwoMoveOneValue) {
                            return 'Tie';
                        } else if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                            return 'Player One';
                        } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
                            return 'Player Two';
                        }
                        break;
                    case 'scissors':
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
                        return 'Player Two';
                        break;
                    case 'paper':
                        return 'Player One';
                        break;
                    case 'scissors':
                        if (playerOneMoveOneValue == playerTwoMoveOneValue) {
                            return 'Tie';
                        } else if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                            return 'Player One';
                        } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
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
    } else if (round == 2) {
        switch(playerOneMoveTwoType) {
            case 'rock':
                switch(playerTwoMoveTwoType) {
                    case 'rock':
                        if (playerOneMoveTwoValue == playerTwoMoveTwoValue) {
                            return 'Tie';
                        } else if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                            return 'Player One';
                        } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
                            return 'Player Two';
                        }
                        break;
                    case 'paper':
                        return 'Player Two';
                        break;
                    case 'scissors':
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
                        return 'Player One';
                        break;
                    case 'paper':
                        if (playerOneMoveTwoValue == playerTwoMoveTwoValue) {
                            return 'Tie';
                        } else if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                            return 'Player One';
                        } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
                            return 'Player Two';
                        }
                        break;
                    case 'scissors':
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
                        return 'Player Two';
                        break;
                    case 'paper':
                        return 'Player One';
                        break;
                    case 'scissors':
                        if (playerOneMoveTwoValue == playerTwoMoveTwoValue) {
                            return 'Tie';
                        } else if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                            return 'Player One';
                        } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
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
    } else if (round == 3) {
        switch(playerOneMoveThreeType) {
            case 'rock':
                switch(playerTwoMoveThreeType) {
                    case 'rock':
                        if (playerOneMoveThreeValue == playerTwoMoveThreeValue) {
                            return 'Tie';
                        } else if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
                            playerOneScore = 1;
                            playerTwoScore = 0;
                            return 'Player One';
                        } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
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
                switch(playerTwoMoveThreeType) {
                    case 'rock':
                        playerOneScore++;
                        return 'Player One';
                        break;
                    case 'paper':
                        if (playerOneMoveThreeValue == playerTwoMoveThreeValue) {
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
                        if (playerOneMoveThreeValue == playerTwoMoveThreeValue) {
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
    } else if (playerOneScore == playerTwoScore) {
        return 'Tie';
    } else {
        return 'Round Score Error';
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