import type { Coordinate, SelfViewer } from '../../types';

export class Square {
    private _id: string

    private _coordinate: Coordinate;

    private _color: string;

    private _selfViewer?: SelfViewer

    get id() {
        return this._id
    }

    get selfViewer() {
        return this._selfViewer
    }

    set selfViewer(v: SelfViewer | undefined) {
        this._selfViewer = v
    }

    get coordinate() {
        return this._coordinate
    }

    set coordinate(coordinate: Coordinate) {
        this._coordinate = coordinate;
    }

    get color() {
        return this._color
    }
    
    constructor(coordinate: Coordinate, color: string) {
        this._coordinate = coordinate;
        this._color = color;
        this._id = `${coordinate.x}-${coordinate.y}-${color}`;
    }

}

