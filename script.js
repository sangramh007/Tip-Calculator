const totalPerPerson = document.getElementById('perPersonTotal')
function calculateBill() {
  const totalBill = Number(document.getElementById('billTotalInput').value)
  const tipPercentage = Number(document.getElementById('tipInput').value)
  console.log(tipPercentage)
  let bill = totalBill + (totalBill * (tipPercentage / 100))
  totalPerPerson.innerText = bill
}

const increasePeople = () => {
  const people = document.getElementById('numberOfPeople')
  people.innerText = Number(people.textContent) + 1
  totalPerPerson.innerText = Number(totalPerPerson.innerText) / Number(people.textContent)

}

const decreasePeople = () => {
  const people = document.getElementById('numberOfPeople')

  totalPerPerson.innerText = Number(totalPerPerson.innerText) * Number(people.textContent)
  people.innerText = Number(people.textContent) - 1
}
