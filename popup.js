function change(e) {
  chrome.tabs.executeScript(null,
      {code:"document.body.style.width='" + e.target.value + "%'"});
  //window.close();
}
  
document.addEventListener('DOMContentLoaded', function () {
  var input = document.querySelector('#selected-width');
  input.addEventListener('change', change);
  console.log('Input element:', input);
});
