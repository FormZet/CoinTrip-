let modalService = {};

modalService.modals = {
	base: '<div class="modal">\
				<div class="modal__bg"></div>\
				<div class="card -app"></div>\
		</div>',
	generateCountry: '<div class="modal__body animated bounceInRight">\
					<h1 class="cname"></h1>\
					<div class="modalpic">\
					<img class="countrypic firstpic" src="">\
					<img class="countrypic secondpic" src="">\
				</div>\
					<div class="review">\
						<div class="points">\
						<h2 class="budgetdisc"><img class="cateimg" src="assets/img/budget.png"><span class="cbudget">	</span> <span class="spanned"></span></h2>\
						<h2 class="popularitydisc"><img class="cateimg" src="assets/img/popularity.png"><span class="creview"> </span><span class="spanned">/10</span></h2>\
						<h2 class="exoticdisc"><img class="cateimg" src="assets/img/exotic.png"><span class="cexotic"> </span> <span class="spanned">/10</span></h2>\
						</div>\
					\
						<div class="disc">\
							<h3></h3>\
					</div>\
					</div>\
					<div class="links">\
						<div class="partnership">\
							<a href="https://www.booking.com/index.ru.html?aid=318615&label=Russian_Russia_RU_RU_29562091585-QrpVJRo3bpffIGDyVIocRwS217243009824%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi4040385206%3Atiaud-285284110006%3Adsa-513393787352%3Alp9047070%3Ali%3Adec%3Adm&sid=69ff16af36648ca08e0632940a7d4b67&srpvid=b5d38aaff278025b&click_from_logo=1"><img src="assets/img/link1.png"></a>\
							<a href="http://www.kalendarik.com.ua/online"><img src="assets/img/link2.png"></a>\
							<a href="https://wild\
						<div class="wiki"><a href="https://en.wikipedia.org/wiki/Main_Page"><img src="assets/img/wiki.png"></a></div>\
						<div class="rebutton"><a href="index.html"><img src="assets/img/back.png"></a></div>\
		</div>\
	</div>'
}

$('body').on('click', '.modal__bg', function(){
   		$(".modal").remove();
   		$(".Earth").removeClass('infinite');
   		});

	
	modalService.openModal = function(modal) {
	$('body').append(modalService.modals.base);
	$('.-app').append(modalService.modals[modal]);
}
