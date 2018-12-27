let interfaceBuilder = {};

interfaceBuilder.parent = $('.js-mainParent');
interfaceBuilder.interfaces = {
	logi:
	'<div class="onime">\
	<div class="opening animated zoomInRight">\
			<div class="container">\
		<div class="intro">\
			<h1 class="welcome">Welcome to the <span class="сointrip">CoinTrip!</span></h1>\
			<p class="underwelcome">You can skip this pressing at this page</p>\
		</div>\
		<div class="information">\
			<img class="infopic animated infinite flip" src="assets/img/EarthCoin.png">\
			<p class="infotext">Cointrip is a service with which you can choose a ticket with the help of our randomizer. You can customize the country that suits you using filters. These include: Budget, Popularity (number of tourists) and exotic countries. If you do not know what to put in a certain filter, you can leave it empty. In case of coincidence of at least two points, you will be given a country. Good luck!<br>P.S<br> This project is in beta => at the moment there are not many countries and perhaps not very correct estimates. Wait for updates in the future</p>\
		</div>\
		<div class="blocks">\
			<div class="budgetintro blokss">\
				<img src="assets/img/budget.png">\
				<p class="filtdisc">Budget is the setting, that set your money, that you want to spend there on attractions and living in current country. These budget is counted for one week for any tourist in dollars. </p>\
			</div>\
			<div class="popularityintro blokss">\
				<img src="assets/img/popularity.png">\
				<p class="filtdisc">Popularity will show the counter of tourist that you can find in this country. This param is also shows the tourist development there.1- max, 2-mid, 3-max. </p>\
			</div>\
			<div class="exoticintro blokss">\
				<img src="assets/img/exotic.png">\
				<p class="filtdisc">Exotic is that param, that shows how exotic this country. Unusual dishes or attraction. Things, that you never saw in your country.1- max, 2-mid, 3-max. </p>\
			</div>\
		</div>\
		<div class="contacts">\
			<a style="margin-right: 20px;" href="https://vk.com/tinkerin">Support&Creator</a>\
			<a href="https://github.com/FormZet">GitHub</a>\
		</div>\
	</div>\
</div>	\
	<header>\
	<img class="logo" src="assets/img/logo.png">\
	<div class="flex-head">\
	<h1>CoinTriP!</h1>\
	<h2>Save results</h2>\
	<h2>Share</h2>\
</div>\
\
</header>\
<div class="Filt-Panel">\
<div class="filtres">\
	<h3>FILTRES</h3>\
	<div class="budget-list">\
	<div class="budget-name">\
			<img class="cateimg" src="assets/img/budget.png">\
			<h4 class="">Budget of our trip</h4>\
		</div>\
			<label><input type="radio" value="cheap" name="money">< 200$</label>\
			<label><input type="radio" value="normal" name="money">200$-500$</label>\
			<label><input type="radio" value="expencive" name="money">500$-1000$</label>\
			<label><input type="radio" value="very expencive" name="money">> 1000$</label>\
		</div>\
	<div class="popularity list">\
		<img class="cateimg" src="assets/img/popularity.png">\
		<img class="one popval" value="min"  src="assets/img/1.png">\
		<img class="two popval" value="mid"  src="assets/img/2.png">\
		<img class="three popval" value="max"  src="assets/img/3.png">\
	</div>\
	<div class="exotic list">\
		<img class="cateimg" src="assets/img/exotic.png">\
		<img class="one1 exoval" value="min"  src="assets/img/1.png">\
		<img class="two2 exoval"  value="mid" src="assets/img/2.png">\
		<img class="three3 exoval" value="max"  src="assets/img/3.png">\
	</div>\
<div class="newTheme"></div>\
</div>\
<img class="Earth" src="assets/img/Earth.png">\
<img class="button" src="assets/img/button.png">\
</div>\
</div>'
		};

interfaceBuilder.build = function(interface) {
	interfaceBuilder.parent.html(interfaceBuilder.interfaces[interface]);
};

