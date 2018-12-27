let modalService1 = {};

modalService1.modals1 = {
	generateEdu: '<div class="modal__body animated bounceInRight">\
					<h1 class="cname"></h1>\
					<div class="modalpic">\
					<img class="countypic" src="assets/img/test1.jpg">\
					<img class="countypic" src="assets/img/test2.jpg">\
				</div>\
					<div class="review">\
						<div class="points">\
						<h2 class="budgetdisc"><img class="" src="assets/img/budget.png"><span class="cbudget">	</span></h2>	\
						<h2 class="popularitydisc"><img class="" src="assets/img/popularity.png"><span class="creview"> </span></h2>\
						<h2 class="exoticdisc"><img class="" src="assets/img/exotic.png"><span class="cexotic"> </span></h2>\
						</div>\
					\
						<div class="disc">\
							<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas molestiae, facere culpa eius reprehenderit pariatur repellendus laudantium aspernatur id, aliquam nemo, dicta eos aliquid delectus. Est, officia facilis. Ab explicabo quo corporis officiis perspiciatis expedita nostrum ad autem labore hic dicta, obcaecati, dolores consequatur qui temporibus rerum placeat error quis nulla dolor fuga reprehenderit, minus possimus. Eum enim, sint molestias.</h3>\
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

	modalService.openModal = function(modal1) {
	$('body').append(modalService1.modals1.generateEdu);
	$('.-app').append(modalService1.modals1[modal1]);
}