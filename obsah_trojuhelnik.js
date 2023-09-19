const a = Number(prompt("Zadej stranu A v cm: "));
const b = Number(prompt("Zadej stranu B v cm: "));
const c = Number(prompt("Zadej stranu C v cm: "));

function pul_souctu_stran(a, b, c) {
  return (a + b + c) / 2;
}

function obsah_trojuhelnika(a, b, c) {
  return Math.sqrt(
    pul_souctu_stran(a, b, c) *
      (pul_souctu_stran(a, b, c) - a) *
      (pul_souctu_stran(a, b, c) - b) *
      (pul_souctu_stran(a, b, c) - c)
  );
}

//console.log(pul_souctu_stran(a, b, c));
console.log(
  "Obsah trojuhelnika je: " + obsah_trojuhelnika(a, b, c).toFixed(2) + " cm2."
);
