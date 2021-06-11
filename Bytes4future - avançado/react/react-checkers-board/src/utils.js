// In this file we tried to put functions that would be used by other files of the program. (that's why we export all of them)

export function isOdd(n) {
    return Math.abs(n % 2) === 1;
}

export function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

export function getColAsInt(columns, coordinate) {
    return columns[coordinate.charAt(0)];
}

export function getColAsAlph(columns, columnInt) {

    for (let key in columns) {
        if (!columns.hasOwnProperty(key)) {
            continue;
        }

        if (columnInt === columns[key]) {
            return key;
        }
    }

    return false;
}

export function getRowAsInt(coordinate) {
    return parseInt(coordinate.charAt(1), 10);
}

export function returnPlayerName(playerBool) {
    return playerBool === true ? 'player1' : 'player2';
}