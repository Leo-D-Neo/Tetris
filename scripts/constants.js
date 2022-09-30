export const N_COLS = 12;
export const N_ROWS = 20;
export const SIZE_BLOCK = 30;

export const KEY = {
    UP: 38,
    LEFT: 37,
    RIGHT: 39,
    DOWN: 40
}
Object.freeze(KEY);

export const COLORS = [
    'cyan',
    'blue',
    'orange',
    'yellow',
    'green',
    'purple',
    'red'
];


export const SHAPES = [
    [[1, 1, 1, 1],
     [0, 0, 0, 0],
     [0, 0, 0, 0],
     [0, 0, 0, 0]],

    [[2, 0, 0],
     [2, 2, 2],
     [0, 0, 0]],

    [[0, 0, 3],
     [3, 3, 3],
     [0, 0, 0]],

    [[4, 4],
     [4, 4]],

    [[0, 5, 5],
     [5, 5, 0],
     [0, 0, 0]],

    [[0, 6, 0],
     [6, 6, 6],
     [0, 0, 0]],

    [[7, 7, 0],
     [0, 7, 7],
     [0, 0, 0]]
];

export const POINTS = {
    SINGLE: 10,
    DOUBLE: 30,
    TRIPLE: 50,
    TETRIS: 80,
}
Object.freeze(POINTS);



export function next_level_border_score(level){
    return (level * 10) ** 2;
}

export let START_LEVEL_SPEED = 300;
export let SPEED_INCREASE = 0.8
