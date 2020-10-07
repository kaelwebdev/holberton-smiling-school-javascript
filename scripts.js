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
		$.ajax({
			type: "GET",
			url: "https://smileschool-api.hbtn.info/quotes",
			data: "",
			beforeSend: function() {
				$("#loader_icon").show(1000);
			},
			success: function(r) {
				$("#loader_icon").hide(1000);
				receiveQuotes(r);
			}
		});

		/*
			https://stackoverflow.com/questions/11515994/display-ajax-loader-before-load-data
			https://www.w3schools.com/howto/howto_css_loader.asp
		*/
	}
	
	getQuotes();
});

