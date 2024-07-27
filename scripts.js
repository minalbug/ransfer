function showPopup(popupId) {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById(popupId).style.display = 'block';
}

function closePopup(popupId) {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById(popupId).style.display = 'none';
}

document.getElementById('trigger').addEventListener('click', function() {
  showPopup('popup1');
});

document.getElementById('close1').addEventListener('click', function() {
  closePopup('popup1');
});

document.getElementById('close2').addEventListener('click', function() {
  closePopup('popup2');
});

document.getElementById('close3').addEventListener('click', function() {
  closePopup('popup3');
});

document.getElementById('close4').addEventListener('click', function() {
  closePopup('popup4');
});

document.getElementById('submit1').addEventListener('click', function() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;

  if (name && email) {
    document.getElementById('welcome-message').innerText = 'Welcome, ' + name;
    closePopup('popup1');
    showPopup('popup2');
  } else {
    alert("Please fill in all required fields.");
  }
});

document.getElementById('copy-button').addEventListener('click', function() {
  var accountNumber = document.getElementById('account-number').innerText;
  navigator.clipboard.writeText(accountNumber).then(function() {
    alert('Account number copied to clipboard');
  }, function(err) {
    console.error('Could not copy text: ', err);
  });
});

document.getElementById('load-more').addEventListener('click', function() {
  closePopup('popup2');
  showPopup('popup3');

  setTimeout(function() {
    closePopup('popup3');
    showPopup('popup4');
  }, 120000); // 2 minutes in milliseconds
});