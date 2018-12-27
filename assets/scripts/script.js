$(document).ready(function() {
	let ratings = [];
	let countries = [
		{
			name:'China',
			settings:{
				cost:'cheap',
				review:4,
				exotic:6,
				pic1:'https://source.wustl.edu/wp-content/uploads/2017/01/China-sunset.jpg',
				pic2:'https://pmcvariety.files.wordpress.com/2016/09/shanghai-skyline-china-placeholder.jpg?w=1000',
				disc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a tenetur nobis doloremque explicabo quas provident, nemo dolores possimus molestiae hic facilis doloribus harum, ad quo repellendus est amet eos corporis voluptate. Et tempore commodi, quidem explicabo eos, assumenda eum nisi accusantium rerum placeat illum fugit dicta consequatur reprehenderit tenetur, quae eveniet fuga a ducimus voluptatem error totam pariatur. Minima.'
			}
		},
		{
			name:'Russia',
			settings:{
				cost:'normal',
				review:4,
				exotic:2,
				pic1:'https://nrmedia.nyc3.digitaloceanspaces.com/2018/12/russia.jpg',
				pic2:'https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/st-petersburg-russia/overview/st-petersburg-russia-saint-isaac-cathedral.jpg?$750x320$',
				disc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum accusamus, laboriosam magnam, sunt velit dignissimos voluptate. Eius autem assumenda, error quo eaque molestiae consectetur facilis sed non iure. Expedita adipisci quo, commodi laboriosam facere rerum minima beatae. Officia temporibus enim accusantium, numquam voluptatibus sapiente modi nisi, aspernatur quaerat reprehenderit vel ad, tempore repellendus! Repellat, dolorem accusamus. Odio mollitia obcaecati consectetur.'
			}
		},
		{
			name:'Vietnam',
			settings:{
				cost:'cheap',
				review:7,
				exotic:8,
				pic1:'https://exclusivesmedia.webjet.com.au/uploads/2017/12/vietnam-cambodia-6-min-2.jpg',
				pic2:'https://www.azamaraclubcruises.com/sites/default/files/heros/pr-30-nov-2020-ho-chi-mihn-vietnam.jpg',
				disc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit consequatur voluptatibus incidunt odio ab fuga, perferendis earum repellat provident quia omnis, rerum quos nostrum velit. Hic eligendi, deserunt, possimus odit dignissimos architecto ipsam libero, minima, quam facilis voluptatum voluptatem saepe dolor molestias. Consequuntur optio fugiat iste quae, reprehenderit quas labore necessitatibus, doloribus sed totam eos impedit tempora ab quia suscipit.'
			}
		},
		{
			name:'Uruguay',
			settings:{
				cost:'normal',
				review:7,
				exotic:6,
				pic1:'http://www.globalexchange.com.uy/img/main.jpg',
				pic2:'https://drinks-dvq6ncf.netdna-ssl.com/wordpress/wp-content/uploads/2018/03/MW-640x426.jpg',
				disc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident consectetur recusandae labore omnis repellat, atque cum fugit ipsum et ducimus ab veniam fuga molestias reprehenderit eligendi porro unde, numquam cupiditate, nulla. Quas veniam quod enim, eos magni suscipit quae tempore sequi fuga recusandae nihil fugit corporis, vero autem nobis atque consequuntur voluptas rem, cumque vel qui reiciendis. Provident, autem in.'
			}
		},
		{
			name:'Gvinea',
			settings:{
				cost:'expencive',
				review:3,
				exotic:9,
				pic1:'https://www.credendo.com/_webdata/styles/article_thumb/public/itp-papua-july2018.jpg?itok=Ee5-lKA8',
				pic2:'http://www.avenutur.ru/gvinea.jpg',
				disc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, iure nisi dolorem dignissimos sapiente alias suscipit voluptatum commodi officiis, maiores dolore soluta veniam possimus illum. Omnis facere nisi suscipit voluptas accusamus totam, reiciendis esse repellendus voluptates repellat similique quisquam odio! Accusamus, iusto eaque laborum. Incidunt veritatis, modi commodi aliquam placeat deserunt cumque vel consectetur laboriosam sint labore harum, nihil dolores.'
			}
		},
		{
			name:'Tunis',
			settings:{
				cost:'expencive',
				review:8,
				exotic:6,
				pic1:'https://lonelyplanetimages.imgix.net/a/g/hi/t/e41ea44f84a51473b215065226625602-tunisia.jpg?sharp=10&vib=20&w=1200',
				pic2:'https://www.thenational.ae/image/policy:1.733410:1527091999/Tourists-poses-for-picture-in-downtown-Tunis.JPG?f=16x9&w=1200&$p$f$w=7afbe40',
				disc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis nihil reiciendis possimus fuga dolorem libero reprehenderit vel delectus nobis illo eius, quas laboriosam commodi tempore eos, iusto tempora unde ad fugit mollitia earum deleniti. Neque cumque optio quasi libero voluptate minus culpa vitae officia laudantium accusantium ab, porro, dolore, saepe dolor. Dicta ipsa quaerat quos illum fuga. Qui, ad, odio!'
			}
		},
		{
			name:'Republic of Uganda',
			settings:{
				cost:'cheap',
				review:4,
				exotic:6,
				pic1:'https://media.pri.org/s3fs-public/styles/story_main/public/images/2018/07/ken180402to001.jpg?itok=xTy_rNqW',
				pic2:'http://img.over-blog-kiwi.com/1/04/64/14/20171111/ob_bba860_rwanda-uganda.png',
				disc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et similique aliquam rem quae, accusantium iste praesentium, molestiae facere tempora debitis atque repellat. Voluptate incidunt adipisci magni laborum deserunt, modi, earum hic exercitationem ipsam vel, unde dicta vero debitis in enim ex, nostrum iste nisi. Ea quam eaque vero cum reprehenderit id, tempora tempore, nihil veritatis ad porro laudantium, neque soluta.'
			}
		},
			{
			name:'Finland',
			settings:{
				cost:'very expencive',
				review:9,
				exotic:1,
				pic1:'https://www.worldtravelguide.net/wp-content/uploads/2017/04/Think-Finland-Lapland-185122878-sara_winter-copy.jpg',
				pic2:'https://cdn-02.independent.ie/incoming/article36707786.ece/19cc2/AUTOCROP/w620/finland.PNG',
				disc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis labore maxime fugit obcaecati quam ab tenetur quis soluta quasi quia ullam facilis ducimus laboriosam cumque quae asperiores nemo, eligendi illo voluptatem, distinctio aut. Obcaecati, impedit dolor aut nostrum qui sequi. Sapiente inventore, soluta illum totam tempora reprehenderit esse suscipit impedit accusamus hic blanditiis, animi et omnis accusantium, quo eius, ea.'
			}
	
		},
		{
			name:'Italy',
			settings:{
				cost:'expencive',
				review:9,
				exotic:2,
				pic1:'https://www.azamaraclubcruises.com/sites/default/files/heros/pr-venice-italy-5-may-19.jpg',
				pic2:'https://www.intrepidtravel.com/sites/intrepid/files/styles/low-quality/public/elements/product/hero/ZMRR-_0003_Italy_Venice_Burano_Canal_003.jpg',
				disc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores eligendi cumque dignissimos ab sed fugiat libero adipisci ducimus impedit, corporis non eveniet commodi enim eos sunt dolorum officia ipsa minus! Placeat itaque magnam, tempora quis accusantium quidem, nesciunt quae eligendi porro repellat a. Natus laborum ipsam a, esse reprehenderit, consequatur in soluta nemo, deserunt corrupti, rerum molestias. Accusantium, debitis.'
			}
		},
		{
			name:'Samoa',
			settings:{
				cost:'normal',
				review:7,
				exotic:9,
				pic1:'https://media.treehugger.com/assets/images/2016/04/to_sua_ocean_trench.jpg.860x0_q70_crop-scale.jpg',
				pic2:'https://www.radionz.co.nz/assets/news_crops/11591/eight_col_Samoa_financial_inclusion__1.jpg?1465800915',
				disc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi, ratione earum ea alias quae sapiente non facere deserunt. Autem iure, perferendis voluptatibus quis similique, modi illo sequi aspernatur maiores numquam doloremque, in quod ex ullam harum accusantium quas fuga temporibus neque velit porro! Laboriosam omnis ullam praesentium commodi illo veritatis sequi at ipsa nobis accusamus tenetur delectus, ad minima!'
			}
		},
		{
			name:'Australia',
			settings:{
				cost:'expencive',
				review:9,
				exotic:7,
				pic1:'https://upload.wikimedia.org/wikipedia/commons/5/5e/Australia_Day.jpg',
				pic2:'https://www.nationalgeographic.com/content/dam/travel/Guide-Pages/australia-oceania/australia_australia_travel_guides.adapt.1900.1.jpg',
				disc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi veniam vitae, quod natus at iure, omnis unde atque, quidem modi fuga deleniti vero cum corporis incidunt neque quae delectus debitis odio animi impedit non dolorem aliquam. Dicta, delectus excepturi quae itaque voluptate labore consectetur ullam ea tenetur maiores corporis saepe laboriosam ipsum qui blanditiis recusandae amet nisi enim voluptates cumque.'
			}
		},
		{
			name:'Palau',
			settings:{
				cost:'cheap',
				review:7,
				exotic:7,
				pic1:'https://cdn.newsapi.com.au/image/v1/10b087397539ba58937cec24707354ee',
				pic2:'https://d3g2yh83to8qa2.cloudfront.net/wp-content/uploads/sites/17/2016/04/08060938/exterior_990x590.jpg',
				disc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ex sint, reprehenderit aspernatur sequi quasi ipsum, repudiandae nostrum, eum dolores ullam. Iusto minus enim numquam facilis, quidem, nostrum laudantium veniam facere, mollitia iste obcaecati beatae. Error soluta labore, sit consectetur iure veritatis velit saepe modi eligendi, ipsam, voluptatibus, ipsum aut molestias debitis perspiciatis impedit esse dolore maiores quia. Consequatur, totam.'
			}
		},
		{
			name:'USA',
			settings:{
				cost:'expencive',
				review:6,
				exotic:2,
				pic1:'https://d3r8gwkgo0io6y.cloudfront.net/upload/New_York_City.jpg',
				pic2:'https://kids.nationalgeographic.com/content/dam/kids/photos/Countries/Q-Z/united-states-st-louis-arch.ngsversion.1396531812853.jpg',
				disc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nisi architecto odit vero sed tenetur repudiandae! Necessitatibus error similique explicabo, voluptas velit, odio repellendus ad quas quis ea earum at magnam iure eligendi possimus itaque molestiae aliquam cumque iusto voluptate vitae. Corrupti adipisci, aliquid praesentium sed corporis officia odit consequatur, repellat dolorem, alias illo libero nemo, fugit eligendi numquam a.'
			}
		},
		{
			name:'Mexico',
			settings:{
				cost:'expencive',
				review:2,
				exotic:6,
				pic1:'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/09/Untitled-design-2-4-796x417.png',
				pic2:'https://landirenzo.com/sites/default/files/upload/journal/mexico-city_overview_2000x1333.jpg',
				disc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non reprehenderit modi, atque repudiandae fuga consequatur dolor molestiae iste maxime enim assumenda nisi itaque. Distinctio mollitia quam enim, nesciunt nihil nisi ullam quod commodi totam minima sit! Culpa ut temporibus possimus illum, esse assumenda tempora ipsam. Esse alias sunt ex, optio quae dignissimos deleniti voluptates eius doloremque delectus. Mollitia, optio. Eligendi.'
			}
		},
		{
			name:'Canada',
			settings:{
				cost:'expencive',
				review:9,
				exotic:2,
				pic1:'http://arwtc.org/wp-content/uploads/2017/02/canada.png',
				pic2:'https://thumbnails.trvl-media.com/jZoaPACuLKFQXVzgCGQ8aAKltSU=/768x432/images.trvl-media.com/media/content/shared/images/travelguides/destination/31/Canada-249261.jpg',
				disc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, qui. Iste, nesciunt harum dolores ex doloribus sequi nulla esse dicta eveniet ducimus, error laboriosam fugiat voluptas, eos nam dolore. Veritatis eum eaque laborum, fugit eveniet, ipsum. Officiis laborum vel aliquam est fugit sed, vitae, obcaecati ea quos. Vel, dignissimos, porro! Eligendi ex repellendus nihil fugiat, modi amet dignissimos ipsam fuga!'
			}
		},
		{
			name:'Brasil',
			settings:{
				cost:'expencive',
				review:8,
				exotic:7,
				pic1:'https://webimages.iadb.org/Drupal_pantheon/2016-12/brazil-32887.jpg',
				pic2:'https://www.montreuxjazzfestival.com/sites/default/files/styles/program_1298x769/public/artists/boats1.jpg?itok=xd3uAhfH',
				disc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio cumque sint quibusdam vel quae veritatis illo dolorem, tempore numquam eius repudiandae molestiae nobis quasi temporibus laborum harum provident culpa, nisi impedit suscipit quis. Autem minima perspiciatis, deserunt, eum non adipisci odio veritatis est maxime, porro voluptas animi iusto doloribus natus sequi sunt minus magni officia, nobis fuga. Distinctio, laborum, incidunt.'
			}
		},
		
	];

	var videobackground = new $.backgroundVideo($('body'), {
		"align": "centerXY",
		"width": 1280,
		"height": 720,
		"path": "video/",
		"filename": "K1",
		"types": ["mp4"],
		"preload": true,
		"autoplay": true,
		"loop": true
	});

		function newIdRev(review){
			let min, max, id;
			switch(review) {
				case 'min':
				min = 1, max = 3
				break 
				case 'mid':
				min = 4, max = 7
				break
				case 'max':
				min = 8, max = 10
				break
			}
			return {'min': min, 'max': max};
		}

		function newIdExo(exotic){
			let min, max, id;
			switch(exotic) {
		case 'min':
		min = 1, max = 3
		break 
		case 'mid':
		min = 4, max = 7
		break
		case 'max':
		min = 8, max = 10
		break
		}
		return {'min': min, 'max': max};
	}



	interfaceBuilder.build('logi');





	$('.button').click(function() {
		$('.Earth').removeClass('animated infinite pulse')
		$('.Earth').addClass('animated infinite flip')
	});
	$('.newTheme').click(function(){
		$('body').toggleClass('-theme-dark')
		$('.filtres').toggleClass('-theme-dark')
		$('h1').toggleClass('-theme-dark')
		$('h2').toggleClass('-theme-dark')
		$('h3').toggleClass('-theme-dark')
		$('h4').toggleClass('-theme-dark')
		$('label').toggleClass('-theme-dark')
		$('.newTheme').toggleClass('animated slideInUp')
		$('.newTheme').toggleClass('-theme-dark')
	});

	$('.one').click(function(){
		$('.one').toggleClass('-clicked');
		$('.two').removeClass('-clicked');
		$('.three').removeClass('-clicked');
	})

	$('.two').click(function(){
		$('.one').removeClass('-clicked');
		$('.two').toggleClass('-clicked');
		$('.three').removeClass('-clicked');

	})

	$('.three').click(function(){
		$('.one').removeClass('-clicked');
		$('.two').removeClass('-clicked');
		$('.three').toggleClass('-clicked');

	})

	$('.one1').click(function(){
		$('.one1').toggleClass('-clicked');
		$('.two2').removeClass('-clicked');
		$('.three3').removeClass('-clicked');

	})

	$('.two2').click(function(){
		$('.one1').removeClass('-clicked');
		$('.two2').toggleClass('-clicked');
		$('.three3').removeClass('-clicked');

	})

	$('.three3').click(function(){
		$('.one1').removeClass('-clicked');
		$('.two2').removeClass('-clicked');
		$('.three3').toggleClass('-clicked');

	})

	$("body").on('click', '.button', function(){
		let searchParams = {
			cost:$("input[name='money']:checked").val(),
			review: $('.-clicked.popval').attr('value'), 
			exotic: $('.exoval.-clicked').attr('value')
		};
		showmodal(searchParams);
		console.log(searchParams);
   		let limitrev = newIdRev(searchParams.review);
   		let limitexo = newIdRev(searchParams.exotic);
   		console.log(limitrev, limitexo);


	});		
		
		
	function showmodal(searchObj){
		setTimeout(function(){
			modalService.openModal('generateCountry');

		countries.forEach(function(item, i){
			ratings[i] = getRating(item, searchObj);
		});
		let maxIndex = getMaxRating(ratings);
		console.log(ratings)
		let bestCountry = countries[maxIndex];
		console.log(bestCountry);

 		$('.cname').text(bestCountry.name);
 		$('.cbudget').text(bestCountry.settings.cost);
 		$('.creview').text(bestCountry.settings.review);
 		$('.cexotic').text(bestCountry.settings.exotic);
 		$('.firstpic').attr('src', bestCountry.settings.pic1);
 		$('.secondpic').attr('src', bestCountry.settings.pic2);
 		$('.disc').text(bestCountry.settings.disc);
		}, 2000);


		
	};


	
 function getMaxRating(arr){
 	let max = arr[0];
 	let indMax = 0;
 	for (let i = 0; i < arr.length; i++){
 		if (arr[i] > max){
 			max = arr[i];
 			indMax = i;

 		}
 	}
 	return indMax;
 }

 function getRating (country, comparator){
 		let counter = 0;

 		let rev = newIdRev(comparator.review);
 		let exo = newIdExo(comparator.exotic);
 		
 		let s = country.settings;
		console.log(rev, exo, country);

		if (s.cost === comparator.cost)
			++counter;
		if (s.exotic >= exo.min && s.exotic <= exo.max){
			counter += s.exotic - exo.min;

		}
		if (s.review >= rev.min && s.review <= rev.max){
			counter += s.review - rev.min;
		}
		return counter;
 };
 function closeOpening(){
$('.opening').click(function() {
	$('.opening').removeClass('animated zoomInRight')
	$('.opening').addClass('animated fadeOutUp')
	setTimeout(function(){
	$(".opening").remove();
	$('.onime').addClass('animated bounceInUp')
		}, 1000);
	});
}

	

	closeOpening();
 });	