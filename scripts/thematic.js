  	//Side navigation
	// Get the modal
	var modal = document.getElementById('modalWindow');
	var modalBg = document.getElementById("modalBackground");
	var modalContent = document.getElementById('modalContent');
	var mySideMenu = document.getElementById('mySideMenu');
	var changeLang = document.getElementById('changeLanguage');
	var langsMenu = document.getElementById('langsMenu');

  	function openmenu() {
  		mySideMenu.style.width = "250px";
    	modalBg.style.opacity = 1;
    	modalBg.style.zIndex = "1";
  	}
  	function closemenu() {
  		mySideMenu.style.width = "0";
    	modalBg.style.opacity = 0;  
    	setTimeout(function() {
    		modalBg.style.zIndex = "-1";
    	}, 400);	
 	}
 	/*function opensidemenu(menuName) {
 			var x = document.getElementById(menuName).style;
 			if (x.height == "100%") {
 				x.height="0";
 			} else {
 					x.height="100%";
 			}
 	}*/
	// When the user clicks the button, open the modal 
	function openModalWindow() {
	    modal.scrollTop = 0;
	    modal.style.zIndex = "2";
	    modal.style.opacity = "1";
	  	mySideMenu.style.width = "0";
	  	modalContent.style.top = "0"
	}
	//Close the modal
	function disapp() {
	    modal.style.opacity = "0";
		setTimeout(function() {
			modal.style.zIndex = "-1";
			modalContent.style.top = "-300px";
    		modalBg.style.zIndex = "-1";
	    }, 400);
    	modalBg.style.opacity = 0; 
	  	mySideMenu.style.width = "0";
	}
	  
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal || event.target == modalBg) disapp();
	}
	
	/*changeLang.onclick = function() {
		if (langsMenu.style.display == 'none') langsMenu.style.display = 'block';
		else langsMenu.style.display = 'none';
	}*/
