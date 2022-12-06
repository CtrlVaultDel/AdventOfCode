// https://adventofcode.com/2022/day/5/input

/*
[H]                 [Z]         [J]
[L]     [W] [B]     [G]         [R]
[R]     [G] [S]     [J] [H]     [Q]
[F]     [N] [T] [J] [P] [R]     [F]
[B]     [C] [M] [R] [Q] [F] [G] [P]
[C] [D] [F] [D] [D] [D] [T] [M] [G]
[J] [C] [J] [J] [C] [L] [Z] [V] [B]
[M] [Z] [H] [P] [N] [W] [P] [L] [C]
 1   2   3   4   5   6   7   8   9
*/

// Left to Right == Bottom to Top (regarding a stack of items)
export const initializeWarehouse = () => ([
    ['M', 'J', 'C', 'B', 'F', 'R', 'L', 'H'],
    ['Z', 'C', 'D'],
    ['H', 'J', 'F', 'C', 'N', 'G', 'W'],
    ['P', 'J', 'D', 'M', 'T', 'S', 'B'],
    ['N', 'C', 'D', 'R', 'J'],
    ['W', 'L', 'D', 'Q', 'P', 'J', 'G', 'Z'],
    ['P', 'Z', 'T', 'F', 'R', 'H'],
    ['L', 'V', 'M', 'G'],
    ['C', 'B', 'G', 'P', 'F', 'Q', 'R', 'J']
]);