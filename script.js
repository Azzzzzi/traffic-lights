function changeLights() {
  setTimeout(function() {
    document.getElementById('red').style.backgroundColor = 'red';
    document.getElementById('yellow').style.backgroundColor = '#555';
    document.getElementById('green').style.backgroundColor = '#555';
  }, 6000); 

  setTimeout(function() {
    document.getElementById('yellow').style.backgroundColor = 'yellow';
    document.getElementById('red').style.backgroundColor = '#555';
  }, 9000); 
  
  setTimeout(function() {
    document.getElementById('green').style.backgroundColor = 'green';
    document.getElementById('yellow').style.backgroundColor = '#555';
  }, 12000);
}

changeLights();
setInterval(changeLights, 12000); 
