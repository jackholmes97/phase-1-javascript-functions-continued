// code your solution here
function saturdayFun(firstPara) {
    const dflt = 'roller-skate!';

    if (firstPara === undefined ) {
        return `This Saturday, I want to ${dflt}`;
    } else {
        return `This Saturday, I want to ${firstPara}!`;
    }
}

function mondayWork(para2) {
    const dflt = 'go to the office'

    if (para2 === undefined ) {
        return `This Monday, I will ${dflt}.`;
    } else {
        return `This Monday, I will ${para2}.`;
    }
}

function wrapAdjective(string) {
    const dflt = '*';
    if (string === undefined ) {
        return function(adj) {  
            const d = "special";
            if (adj === undefined) {
                return `You are ${dflt}${d}${dflt}!`;
            } else {
                return `You are ${dflt}${adj}${dflt}!`;
            }
        }
    } else {
        return function(adj) {  
            const d = "special";
            if (adj === undefined) {
                return `You are ${string}${d}${string}!`;
            } else {
                return `You are ${string}${adj}${string}!`;
            }
        }
    }
}




