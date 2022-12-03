// https://adventofcode.com/2022/day/3

import { input } from "./input.mjs";
import { solutionLabel } from "../../Helpers/solutionLabel.mjs";

const solution = () => {
    // Will be used to calculate priority point (index + 1)
    const PRIORITIES = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i,', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    // Store rucksacks as array
    const rucksacks = input.split("\n");

    // ============================================
	// ================= Answer 1 =================
	// ============================================

    const totalSum1 = rucksacks.reduce((totalPriority, rucksack) => {
        // Split out compartments of each rucksack
        const compartment1 = [...new Set(rucksack.slice(0, rucksack.length/2))];    // 1st half
        const compartment2 = [...new Set(rucksack.slice(rucksack.length/2))];       // 2nd half

        // Find duplicate item
        const duplicateItem =  compartment1.filter(item => compartment2.includes(item));

        // Calculate priority and add it to accumulated priority
        return totalPriority += PRIORITIES.indexOf(duplicateItem[0]) + 1
    }, 0)

    console.log(`Answer #1: ${totalSum1}`);

    // ============================================
	// ================= Answer 2 =================
	// ============================================
    const rucksackGroups = [];
    for(let i = 0; i < rucksacks.length; i += 3){
        rucksackGroups.push(rucksacks.slice(i, i + 3))  
    }

    const totalSum2 = rucksackGroups.reduce((totalPriority, group) => {
        const rucksack1 = [...new Set(group[0])];
        const rucksack2 = [...new Set(group[1])];
        const rucksack3 = [...new Set(group[2])];

        let duplicateItem = "";

        // Find item that exists in all three groups
        rucksack1.forEach(item => {
            if(rucksack2.includes(item) && rucksack3.includes(item)){
                duplicateItem = item;
                return;
            }
        })

        // Calculate priority and add it to accumulated priority 
        return totalPriority += PRIORITIES.indexOf(duplicateItem) + 1;
    }, 0)

    console.log(`Answer #2: ${totalSum2}`);
}

solutionLabel(solution, 3);