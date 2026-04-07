// Last updated: 4/8/2026, 2:05:58 AM
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let countUnableEat = 0

    while(students.length) {
        
        if(students[0] === sandwiches[0]) {
            students.shift()
            sandwiches.shift()
        } else {            
            let frontSandwich = sandwiches[0]
            if (students.indexOf(frontSandwich) === -1) {
                break
            }
            let unableEatStudent = students.shift()
            students.push(unableEatStudent)
        }
    }  

    return students.length
};