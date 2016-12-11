let money = 10 // 2 換 1
let cap = 0 // 4 換 1
let bottle = 0 // 2 換 1
let drink = 0 // 喝了幾瓶

function changeMoneyToBottle() {
  if (money < 2) return
  bottle = money / 2
  money = Math.floor(money % 2)
  getCap(bottle)
}

function changeBottleToBottle() {
  if (bottle < 2) return
  console.log('有 ' + bottle + ' 瓶 2 瓶換 1 瓶得到 >', Math.floor(bottle / 2) + ' 瓶')
  getCap(Math.floor(bottle / 2))
  bottle = Math.floor(bottle % 2) + Math.floor(bottle / 2)
}

function changeCapToBottle() {
  if (cap < 4) return
  console.log('有' + cap + '蓋子 4 個換 1 瓶得到 >', Math.floor(cap / 4) + ' 瓶')
  bottle = bottle + Math.floor(cap / 4)
  getCap(Math.floor(cap / 4), 'cap')
}

function getCap(bottle, type) {
  if (type === 'cap') {
    cap = Math.floor(cap / 4) + Math.floor(cap % 4)
  } else {
    cap = cap + bottle
  }
  console.log('現在有 ' + cap + ' 個蓋子')
  goodToDrink(bottle)
  console.log('多喝了 >', bottle, '瓶 > 共喝', drink + ' 瓶')
}

function goodToDrink(bottle) {
  drink = drink + bottle
}

function run() {
  if (money > 1) {
    changeMoneyToBottle()
  }
  if (bottle > 1) {
    changeBottleToBottle()
    console.log('-----')
  } else {
    changeCapToBottle()
  }
  if (bottle < 2 && cap < 4 && money < 2) {
    console.log('剩餘' + '瓶子 >', bottle, '蓋子 >', cap, '喝了 >', drink, '錢 >' , money)
    return
  }
  run()
}

run()
