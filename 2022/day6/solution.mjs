// https://adventofcode.com/2022/day/6

import { input } from "../day6/input.mjs";
import { solutionLabel } from "../../Helpers/solutionLabel.mjs";

const solution = () => {
    const findUniquePacketOf = (numDistinctChars) => {
        let currentMarker = ""
        for(let i = 0; i < input.length; i++){
            if(!currentMarker.includes(input[i])){
                currentMarker += input[i];
                if(currentMarker.length === numDistinctChars) return i + 1;
            }
    
            else{
                // Calculate where loop needs to restart at
                // Note: loop will perform i++  after this loop ends
                i += (currentMarker.indexOf(input[i])) - (currentMarker.length);
    
                // Reset currentMarker
                currentMarker = "";
            }
        }
    }

    console.log(`Answer #1: ${findUniquePacketOf(4)}`);
    console.log(`Answer #2: ${findUniquePacketOf(14)}`);
}

solutionLabel(solution, 6);