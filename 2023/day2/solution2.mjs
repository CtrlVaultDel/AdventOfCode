// To Test: (Need formulahendry.code-runner extension)
// 1. Click in file
// 2. Ctrl + Alt + N
import { getInput, getPerformance, logAnswer } from "../../helpers/commonHelper.mjs"

async function d2s2(){
    const input = await getInput("2023/day2/input.txt");
    return input.reduce((acc, game) => {
        const cubes = {
            red: 0,
            green: 0,
            blue: 0
        }
        const gameData = game.split(": ")
        const rounds = gameData[1].replace("\r", "").split("; ")
        rounds.forEach(round => {
            const picks = round.split(", ")
            return picks.forEach(pick => {
                const splitPick = pick.split(" ");
                if(cubes[splitPick[1]] < splitPick[0]){
                    cubes[splitPick[1]] = +splitPick[0]
                }
            }) 
        })
        return acc += (cubes.red * cubes.green * cubes.blue)
    }, 0)
}

logAnswer(d2s2)
getPerformance(d2s2)