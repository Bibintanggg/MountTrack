function showInfo(gunung) {
  const infoElements = document.querySelectorAll(".gunung-info");
  infoElements.forEach(function (div) {
    div.classList.add("hidden"); 
  });

  const selectedDiv = document.getElementById(gunung);
  if (selectedDiv) {
    selectedDiv.classList.remove("hidden"); 
  } else {
    console.error('Element with ID "' + gunung + '" not found.');
  }

  AOS.refresh();
  AOS.refreshHard();
}
