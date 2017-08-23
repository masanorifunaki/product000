function menu() {
     'use strict';
 
     var show = document.getElementById('show');
     var main = document.getElementById('main');
 
     show.addEventListener('click', function() {
        if (main.className === 'menu-open') {
          main.className = '';
        } else {
          main.className = 'menu-open';
        }
     });
 
   };
  