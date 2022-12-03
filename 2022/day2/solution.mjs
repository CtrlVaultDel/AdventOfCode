// https://adventofcode.com/2022/day/2

import { input } from "./input.mjs";

const solution = () => {
	console.log("===================")
	console.log("      (Day 2)      ")

	// Store games as array
	const gameArr = input.split("\n");

	// ============================================
	// ================= Answer 1 =================
	// ============================================

    // Points awarded based off choice (Only your choice matters)
    const getChoiceScore = (shape) => {
        switch(shape){
            case "X": return 1 // Rock
            case "Y": return 2 // Paper
            default: return 3  // Scisssors
        }
    }

    // Points awarded based off win condition (Answer 1)
    const getGameScore_1 = (enemyChoice, yourChoice) => {
       	yourChoice = yourChoice === "X"
			?	"A"
			:	yourChoice === "Y"
				?	"B"
				:	"C"

        // Draw
        if(yourChoice === enemyChoice) return 3;

		// Lose
		else if(
			yourChoice === "A" && enemyChoice === "B" ||
			yourChoice === "B" && enemyChoice === "C" ||
			yourChoice === "C" && enemyChoice === "A"
		) return 0;

		// Win
		return 6;
    }

	// Reducer function (Answer 1)
    const getTotalScore_1 = (totalScore, game) => totalScore += (getChoiceScore(game[2]) + getGameScore_1(game[0], game[2]))

	// Answer 1
    console.log(`Answer #1: ${gameArr.reduce((totalScore, game) => getTotalScore_1(totalScore, game), 0)}`)

	// ============================================
	// ================= Answer 2 =================
	// ============================================

	// Points awarded based off win condition (Answer 2)
    const getGameScore_2 = (enemyChoice, yourChoice) => {
		// You need to lose
		if(yourChoice === "X"){
			switch(enemyChoice){
				case "A":	return 3 + 0	// Scissors Value 	+ Lose
				case "B":	return 1 + 0	// Rock Value 		+ Lose
				default: 	return 2 + 0	// Paper Value 		+ Lose
			}
		}

		// You need to draw
		else if(yourChoice === "Y"){
			switch(enemyChoice){
				case "A":	return 1 + 3	// Rock Value 		+ Draw
				case "B":	return 2 + 3	// Paper Value 		+ Draw
				default: 	return 3 + 3	// Scissors Value 	+ Draw
			}
		}

		// You need to win
		else{
			switch(enemyChoice){
				case "A":	return 2 + 6	// Paper Value		+ Win
				case "B":	return 3 + 6	// Scissors Value	+ Win
				default: 	return 1 + 6	// Rock Value		+ Win
			}	
		}
 	}

	// Reducer function (Answer 2)
	const getTotalScore_2 = (totalScore, game) => totalScore += (getGameScore_2(game[0], game[2]))

    console.log(`Answer #2: ${gameArr.reduce((totalScore, game) => getTotalScore_2(totalScore, game), 0)}`)
	console.log("===================")
}

solution();