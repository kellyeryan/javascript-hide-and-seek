function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector(".target")
}

function deepestChild() {
  return document.querySelector("#grand-node div div div div")
}

function increaseRankBy(n) {
  var increaseRank = document.querySelectorAll(".ranked-list li")
  for (var i = 0; i < increaseRank.length; i++) {
    increaseRank[i].innerHTML = parseInt(increaseRank[i].innerHTML) + n
  }
}
