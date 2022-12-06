// https://adventofcode.com/2022/day/5

import { initializeWarehouse } from "./warehouse.mjs";
import { input } from "./input.mjs";
import { solutionLabel } from "../../Helpers/solutionLabel.mjs";

const solution = () => {
    const regex = /([0-9]+)/g;
    
    const moveInstructions = input
    .split("\n")
    .map(instruction => instruction.match(regex))

    // Prints top crates of a warehouse, from left to right (1 to 9)
    const printTopCrates = warehouse => {
        console.log(warehouse.reduce((lastCrates, stack) => lastCrates += stack[stack.length - 1], ""));
    }

    // ============================================
	// ================= Answer 1 =================
	// ============================================
    const warehouse_1 = initializeWarehouse();

    const crateMover_9000 = (instruction, warehouse) => {
        const from = instruction[1] - 1;
        const to = instruction[2] - 1;
        const amount = instruction[0];
        for(let i = 0; i < amount; i++){
            warehouse[to].push(warehouse[from].pop());
        }
    }

    // Iterate through the instructions and perform actions with the crateMover 9000
    moveInstructions.forEach(instruction => crateMover_9000(instruction, warehouse_1));

    printTopCrates(warehouse_1);

    // ============================================
	// ================= Answer 2 =================
	// ============================================
    const warehouse_2 = initializeWarehouse();

    // It is quite literally, over 9000
    const crateMover_9001 = (instruction, warehouse) => {
        const from = instruction[1] - 1;
        const to = instruction[2] - 1;        
        const amount = instruction[0];
        warehouse[to].push(...warehouse[from].splice(-amount));
    }

    // Iterate through the instructions and perform actions with the crateMover 9001
    moveInstructions.forEach(instruction => crateMover_9001(instruction, warehouse_2));

    // Print out the "top" of each stack in the warehouse starting with stack 1 to 9
    printTopCrates(warehouse_2);
}

solutionLabel(solution, 5);