// Define variable to have the value of primary key for each piece of pottery w initial value of 1
let primaryKey = 1
//Define&Export makePottery (shape of pottery, weight, height)
export const makePottery = (shape, weight, height) => {
    const potterObject = {
        shape: shape,
        weight: weight,
        height: height,
        id: primaryKey
    }
    primaryKey++

return potterObject
}
    //return an object with properties - shape, wieght, height, id