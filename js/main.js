let searchBox = document.querySelector('search-box');
let images = document.querySelectorAll('section.mochilas')
searchBox.Oninput = () =>{
	images.forEach(hide => hide.style.display = 'none');
	let value = searchBox.value;
      }
	images.forEach(filter =>{
		let title = filter .getAttribute('MOCHILA');

		if(value == title){
			filter.style.display = "block";
		}

		if (searchBox.value == ''){
			filter.style.display = "block";
		}
   })
