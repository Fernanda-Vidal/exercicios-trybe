module.exports = techList;

function techList (arrayList, stringName){
    const orderList = arrayList.sort();
    let result = [];

    if (orderList.length === 0){
        return 'Vazio!';
    }

    for (let i in orderList){
        result.push({tech: orderList[i], name: stringName});
    }

    return result;
}

console.log(techList([], 'Fernanda'));




