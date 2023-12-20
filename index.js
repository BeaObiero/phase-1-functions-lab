// 1) function to created distance from HQ in blocks(I find adding the notes to help me track my work, ignore them)
function distanceFromHqInBlocks(pickupLoc) {
    const hqLocation = 42;
    return Math.abs(pickupLoc - hqLocation);
}

// a)
console.log(distanceFromHqInBlocks(43));  // Should return 1

// b)
console.log(distanceFromHqInBlocks(50));  // Should return 8

// 2) function to create distance from HQ in feet.
function distanceFromHqInFeet(pickupLoc) {
    const blocks = distanceFromHqInBlocks(pickupLoc);
    return blocks * 264;
}


// a)
console.log(distanceFromHqInFeet(50));

// b)
console.log(distanceFromHqInFeet(34));


//3)function to create distance TRAVELLED in feet.
function distanceTravelledInFeet(start, destination) {
    const distanceTravelledBlocks = Math.abs(destination - start || start - destination);
    return distanceTravelledBlocks * 264;
}
// a)
console.log(distanceTravelledInFeet(43,48));

// b)
console.log(distanceTravelledInFeet(50, 60));

// c) 
console.log(distanceTravelledInFeet(34, 28));

// d)

// 4)create a function that calculates a fair price
function calculatesFarePrice(start, destination) {
    const distanceTravelledInFeet = Math.abs(destination-start) * 264;

    if (distanceTravelledInFeet <= 400) {
        return 0;  }
        else if (distanceTravelledInFeet > 400 && distanceTravelledInFeet<= 2000) {
            const extraDistance = distanceTravelledInFeet - 400;
            const fare = extraDistance * 0.02;
            return fare ;
        }
        else if (distanceTravelledInFeet > 2000 && distanceTravelledInFeet < 2500) {
            return '25 dollars';
        }
        else  {
            return 'cannot travel that far'
        }

}


// a) 
console.log(calculatesFarePrice(43, 44));

// b)
console.log(calculatesFarePrice(34, 32));

// c) 
console.log(calculatesFarePrice(50, 58));

// d)
console.log(calculatesFarePrice(34, 24));
