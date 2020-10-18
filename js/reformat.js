window.addEventListener('load', function () {
  
	var element = document.getElementsByClassName('video-player');
	var videoDiv = document.getElementsByClassName('player-view')[0];
  	var videoCoordinates = videoDiv.getBoundingClientRect();
  	

	var f = document.createElement("form");
	f.setAttribute('id', "comment_form");
	f.setAttribute('method',"post");
	f.setAttribute('action',"submit.php");

	var i = document.createElement("input"); //input element, text
	i.setAttribute('id', "comment_text");
	i.setAttribute('type',"text");
	i.setAttribute('placeholder',"Type something...");


	var s = document.createElement("input"); //input element, Submit button
	s.setAttribute('id', "comment_button");
	s.setAttribute('type',"submit");
	s.setAttribute('value',"SEND");

	f.appendChild(i);
	f.appendChild(s);


	element[0].appendChild(f);


	f.addEventListener('submit', handleSubmit);
	function handleSubmit(e) {
	 	writeDataToFireBase(document.getElementById('comment_text').value);
		e.preventDefault();
		document.getElementById('comment_text').value = ''
	}

	var target = document.getElementById('comment_button');
	target.innerHTML = html.join('');

})

