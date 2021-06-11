window.onload = function start() {
  const federalUnit = ["AC","AL","AP","AM","BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]
  for (let i = 0; i < federalUnit.length; i += 1) {
    const opt = document.createElement("option");
    opt.innerHTML = federalUnit[i];
    document.getElementById('select-state').appendChild(opt);
  }

  let today = new Date;
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  console.log(date);
  //https://phoenixnap.com/kb/how-to-get-the-current-date-and-time-javascript
  document.getElementById('init-date').DatePickerX.init({
    minDate: new Date(1900, 0, 0),
    maxDate: date,
  });
};