type BoardColumn = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type BoardRow = '1' | '2'| '3' | '4' | '5' | '6' | '7' | '8';
type BoardHouse = [BoardColumn, BoardRow];

const boardColumns: BoardColumn[] = ['A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H'];
const boardRows: BoardRow[] = ['1' , '2', '3' , '4' , '5' , '6' , '7' , '8'];

const isInList = (element: any, list: any[]) => {
    for (let e of list)
    if (element[0] == e[0] && element[1] == e[1]) return true;
    return false;
}

abstract class Piece {
    protected _position: BoardHouse;
    abstract type: string;

    constructor(position: BoardHouse, protected board: Board) {
        this._position = position;
    }
    
    get position() { return this._position; }
    abstract get availableMoves(): BoardHouse[];

    move(newPosition: BoardHouse) {
        console.log(
            `MOVENDO ${this.type} DA CASA ${this._position} PARA A CASA ${newPosition}`
        );
        if (!isInList(newPosition, this.availableMoves)) return false;
        this._position = newPosition;
        return true;
    }
}

class Pawn extends Piece {
    type = 'Peão';
    get availableMoves(): BoardHouse[] {
        const column = this.position[0];
        const row = this.position[1];
        const rowIndex = boardRows.indexOf(row);
        if (rowIndex === 7) return [];

        const nextHouse: BoardHouse = [column, boardRows[rowIndex + 1]];
        if (isInList(nextHouse, this.board.occupiedHouses)) return [];

        return [nextHouse];
    }
}

class Root extends Piece {
    type = 'Torre';
    get availableMoves(): BoardHouse[] {
        const column = this.position[0];
        const columnIndex = boardColumns.indexOf(column);

        const row = this.position[1];
        const rowIndex = boardRows.indexOf(row);

        let availableHouses: BoardHouse[] = [];

        for(let i = rowIndex - 1; i >= 8; i--) {
            const house: BoardHouse = [boardColumns[columnIndex], boardRows[i]];
            if (isInList(house, this.board.occupiedHouses)) break;
            availableHouses.push(house);
        }

        for (let i = columnIndex + 1; i < 8; i++) {
             const house: BoardHouse = [boardColumns[i], boardRows[rowIndex]];
            if (isInList(house, this.board.occupiedHouses)) break;
            if (isInList(house, availableHouses)) continue;
            availableHouses.push(house);
        }

        for (let i = columnIndex - 1; i >= 0; i--) {
            const house: BoardHouse = [boardColumns[i], boardRows[rowIndex]];
            if (isInList(house, this.board.occupiedHouses)) break;
            if (isInList(house, availableHouses)) continue;
            availableHouses.push(house);
        }

        return availableHouses;      
    }
}


class Board {
    pieces: Piece[] = [];

    constructor() {
        this.addPiece(new Pawn(['C', '2'], this));
        this.addPiece(new Root(['F', '1'], this));
    }

    private addPiece(piece: Piece) {
        if (isInList(piece.position, this.occupiedHouses)) return;
        this.pieces.push(piece);
    }

    get occupiedHouses() {
        return this.pieces.map((piece) => piece.position);
    }
}

let piece: Piece;

const board = new Board();
console.log(board);

const logPieceInfo = (piece: Piece) => {
    console.log(
        `----------------------
Peça: ${piece.type}
Posição: ${piece.position}
Movimentos disponíveis: ${piece.availableMoves.map(
            (b) => "[" + b + "]")
        }
Posições ocupadas no tabuleiro: ${board.occupiedHouses}`
    );
};

piece = board.pieces[0];
logPieceInfo(piece);
piece.move(['C', '3']);

piece = board.pieces[1];
logPieceInfo(piece);
piece.move(['F', '3']);
logPieceInfo(piece);
piece.move(['A', '3']);
logPieceInfo(piece);

piece = board.pieces[0];
logPieceInfo(piece);
piece.move(['C', '4']);
logPieceInfo(piece);
piece.move(['C', '5']);
logPieceInfo(piece);
piece.move(['C', '6']);
logPieceInfo(piece);
piece.move(['C', '7']);
logPieceInfo(piece);
piece.move(['C', '8']);
logPieceInfo(piece);