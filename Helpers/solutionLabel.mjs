// Wraps output of solutions with a nice label

export const solutionLabel = (solutionFunc, day) => {
    const outerBorder = day < 10
        ?   "==================="
        :   "====================";
    
    console.log(outerBorder);
	console.log(`      (Day ${day})      `);
    solutionFunc();
    console.log(outerBorder);
}