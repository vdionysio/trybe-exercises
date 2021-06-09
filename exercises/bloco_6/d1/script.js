window.onload = function start() {
  const federalUnit = ["AC","AL","AP","AM","BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]
  for (let i = 0; i < federalUnit.length; i += 1) {
    const opt = document.createElement("option");
    opt.innerHTML = federalUnit[i];
    document.getElementById('select-state').appendChild(opt);
  }

  document.getElementById('submit-btn').addEventListener('click', function(ev) {
    ev.preventDefault()
  });
};