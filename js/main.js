window.addEventListener('load', function() {
  var status = document.getElementById("online-status");
  

  function updateOnlineStatus(event) {
    var condition = navigator.onLine ? "online" : "offline";
    var body = document.getElementsByTagName("body")[0];
    body.className = condition;
    status.innerHTML = condition.toUpperCase();
  }

  window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});