
function selectRandomly(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

export function tellFortune(numKids,partnerNames,locations,jobTitles) {
  const selectnumKids=selectRandomly(numKids);
  const selectpartnerNames=selectRandomly(partnerNames);
  const selectlocations=selectRandomly(locations);
  const selectjobTitles=selectRandomly(jobTitles);
 return `You will be a ${selectjobTitles} in ${selectlocations} , 
 married to ${selectpartnerNames} with numKids ${selectnumKids}.`
 
}

function main() {
  const numKids = [
    1,2,3,4,5
  ];

  const partnerNames = ['Ahmed','Mohammed','Ali','Adam','Omar'
  ];

  const locations = ['Amsterdam','Dubai','Egypt','Oman','Doha'
  ];

  const jobTitles = ['pilot', 'engineer', 'doctor', 'accountant', 'lawyer'];


  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
