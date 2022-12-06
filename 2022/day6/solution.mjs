// https://adventofcode.com/2022/day/6

import { input } from "../day6/input.mjs";
import { solutionLabel } from "../../Helpers/solutionLabel.mjs";

const solution = () => {
    let currentMarker = ""

    const findCharsBeforePacket = (numDistinctChars) => {
        for(let i = 0; i < input.length; i++){
            if(!currentMarker.includes(input[i])){
                currentMarker += input[i];

                if(currentMarker.length === numDistinctChars) return i;
            }
    
            else{
                // Find where first duplicate character was (need to go one step past this)
                const firstDupePos = currentMarker.indexOf(input[i]);
    
                // Determine where the first duplicate character is & start loop one step past that
                i += (firstDupePos + 1) - (currentMarker.length - 1);
    
                // Reset currentMarker
                currentMarker = "";
            }
        }
    }

    console.log(`Answer #1: ${findCharsBeforePacket(4)}`);
    console.log(`Answer #1: ${findCharsBeforePacket(14)}`);
    // 3604 is too low
}

solutionLabel(solution, 6);