// https://adventofcode.com/2022/day/1
import { input } from "./input.mjs";
import { solutionLabel } from "../../Helpers/solutionLabel.mjs";

const solution = () => {
    const elfArr = [];
    let elfIdx = 0;
    let totalCalories = 0;

    input
    .split("\n")
    .forEach(amount => {
        // When value is empty, start on next elf
        if (amount === '') {
            elfArr[elfIdx] = totalCalories;
            elfIdx++;
            totalCalories = 0;
        }
        // Otherwise, keep adding to current elf's calories
        else totalCalories += parseInt(amount);
    })

    // Sort from elves with highest calories to lowest
    elfArr.sort((a, b) => b - a);

    // Answer 1
    console.log(`Answer #1: ${elfArr[0]}`);
    
    // Answer 2
    console.log(`Answer #2: ${elfArr[0] + elfArr[1] + elfArr[2]}`);
}

solutionLabel(solution, 1);