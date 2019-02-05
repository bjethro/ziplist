const testList1 = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];

function zipList(list1, list2) {
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}

console.log(zipList(testList1, testList2));

function zipListTheSimpleAway(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleAway(testList1, testList2));
