const input1 = document.getElementById('input-1');
const addButton = document.getElementById('add-button');
const addButton2 = document.getElementById('add-button2');
const input2= document.getElementById('input-2');

const setOfNames = [];
const setOfAnswers = [];

addButton.addEventListener('click', e=> {
  // console.log(input1.value);
  setOfNames.push(input1.value)
  console.log(setOfNames);

})
addButton2.addEventListener('click', e=> {
  // console.log(input2.value);
  setOfAnswers.push(input2.value)
  console.log(setOfAnswers);
  input2.value = '';
  input1.value = '';
  
})
