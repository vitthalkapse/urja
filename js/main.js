$(document).ready(function() { 
/* code here */ 

	var body = $('#main-con');
    var backgrounds = [
      'url(./img/pexels1.jpeg)', 
      'url(./img/pexels2.jpeg)', 
      'url(./img/pexels3.jpeg)', 
      'url(./img/pexels4.jpeg)', 
      'url(./img/pexels5.jpeg)', 
      'url(./img/pexels6.jpeg)', 
      'url(./img/pexels7.jpeg)', 
      'url(./img/pexels8.jpeg)', 
      'url(./img/pexels9.jpeg)', 
      'url(./img/pexels10.jpeg)', 
      'url(./img/pexels11.jpeg)'];
    var current = 0;

    function nextBackground() {
        body.css(
            'background',
        backgrounds[current = ++current % backgrounds.length]);

        body.css('background-size', 'cover');

        setTimeout(nextBackground, 5000);
    }
    setTimeout(nextBackground, 5000);
    body.css('background', backgrounds[0]);

});


	//document.getElementsByClassName('main-container').style.backgroundImage="url(../img/pexels2.jpeg)"; // specify the image path here
