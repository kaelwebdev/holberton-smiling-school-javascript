$(document).ready(function () {

	function receiveQuotes(data) {
		let l = data.length;
		for (const key in data) {
			const { id, pic_url, name, title, text} = data[key];
			let ec1 = "";
			if (key == 0) {
				console.log("primero");
				ec1 = "active";
			} /*else if (key == l-1) {
				 console.log("ultimo");
			}else {
				 console.log("ninguno");
			}*/
			$("#quotes_content").append(
				`<div class="carousel-item ${ec1} px-5">
					<div class="row d-flex justify-content-center align-items-center" id="quote_${id}">
						<div class="col-12 col-sm-4 d-flex justify-content-sm-end justify-content-center ">
							<img src="${pic_url}" class="rounded-circle carousel_section_1__img" alt="...">
						</div>
						<div class="col pr-5 mr-4 pt-5 pt-sm-0">
							<p class="font-italic"> « ${text}</p>
							<h6 class="font-weight-bold m-0 mb-1">${name}</h6>
							<p class="font-italic m-0">${title}</p>
						</div>
					</div>
				</div>
			`);
			
		}
	}
	
	function getQuotes() {
		let r = new XMLHttpRequest();
		r.open("GET", "https://smileschool-api.hbtn.info/quotes", true);
		r.onreadystatechange = ()  => {
			if(r.readyState === r.DONE) {
				if(r.status === 200) {
					let list = JSON.parse(r.responseText);
					receiveQuotes(list);
				}
				else {
					const error = new Error('Error');
					return error
				}
			}
		}
		r.send();
	}
	
	getQuotes();
});

