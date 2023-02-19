const randomTarget = () => {
  document.querySelector("#comp").innerHTML = Math.floor(
    Math.random() * (100 - 50) + 50
  );
};

let score = 0;
document.querySelector("#xal").innerHTML = score;

let winsCount = 0;
document.querySelector("#wins").innerHTML = winsCount;

let lossesCount = 0;
document.querySelector("#losses").innerHTML = lossesCount;

function sifirla() {
  score = 0;
}
$("#comp").text(randomTarget());
$(".btn-diamond").on("click", function () {
  var deyer = $(this).data("deyer");
  score += parseInt(deyer);
  document.querySelector("#xal").innerHTML = score;

  if (score === parseInt(document.querySelector("span").innerHTML)) {
    winsCount++;
    document.querySelector("#wins").innerHTML = winsCount;
    $("#comp").text(randomTarget());
    sifirla();
    document.querySelector("#xal").innerHTML = score;
  } else if (score > parseInt(document.querySelector("span").innerHTML)) {
    lossesCount++;
    document.querySelector("#losses").innerHTML = lossesCount;
    $("#comp").text(randomTarget());
    sifirla();
    document.querySelector("#xal").innerHTML = score;
  }
});
