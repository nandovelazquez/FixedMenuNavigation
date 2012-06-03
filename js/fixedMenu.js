/*
	Author: Fernando Velazquez B.

	@Note: The animation of the menu section was taken from
	http://tympanus.net/codrops/2009/11/30/beautiful-slide-out-navigation-a-css-and-jquery-tutorial/
*/
/*
	Set an animation to the given elemnt.
*/
function setAnimation(element){
	$(element).stop().animate({'marginLeft':'-120px'},200);

    $(element).hover(
        function () {
            $(this).stop().animate({'marginLeft':'0px'},200);
        },
        function () {
            $(this).stop().animate({'marginLeft':'-120px'},200);
        }
	);
}

/*
	Clear the animation to the given elemnt.
*/
function quitAnimation(element){
	
	$(element).stop(true);

	$(element).hover(
		function () {
            $(this).stop(true);
        },
        function () {
            $(this).stop(true);
        }
    );

	$(element).animate({'marginLeft': '0px'}, 200);
}

/*
	Set up the menu.
*/
function setUpMenu(){

	if ( window.pageYOffset > -1  && window.pageYOffset < 501 ) { //animation for home
		quitAnimation('#navigation .section1 a');
		setAnimation('#navigation .section2 a');
		setAnimation('#navigation .section3 a');
		setAnimation('#navigation .section4 a');
		setAnimation('#navigation .section5 a');
	} else if (window.pageYOffset > 500  && window.pageYOffset < 1201 ) { //animation for services
		quitAnimation('#navigation .section2 a');
		setAnimation('#navigation .section1 a');
		setAnimation('#navigation .section3 a');
		setAnimation('#navigation .section4 a');
		setAnimation('#navigation .section5 a');
	} else if (window.pageYOffset > 1200  && window.pageYOffset < 1901 ){ //animation for portfolio
		quitAnimation('#navigation .section3 a');
		setAnimation('#navigation .section1 a');
		setAnimation('#navigation .section2 a');
		setAnimation('#navigation .section4 a');
		setAnimation('#navigation .section5 a');
	} else if (window.pageYOffset > 1900  && window.pageYOffset < 2601 ){ //animation for us
		quitAnimation('#navigation .section4  a');
		setAnimation('#navigation .section1  a');
		setAnimation('#navigation .section2 a');
		setAnimation('#navigation .section3 a');
		setAnimation('#navigation .section5 a');	
	} else if (window.pageYOffset > 2600  && window.pageYOffset < 3299 ){ //animation for contact
		quitAnimation('#navigation .section5 a');
		setAnimation('#navigation .section1 a');
		setAnimation('#navigation .section2 a');
		setAnimation('#navigation .section3 a');
		setAnimation('#navigation .section4 a');
	}
}

$(document).scroll(function(){
	setUpMenu();	
});

$(document).ready(function(){
	//Block for 'menu'
	setUpMenu();

	$('a[href=#firstSection]').click(function(){
		$('html,body').animate({scrollTop: 0},'slow');
		return false;
	});

	$('a[href=#secondSection]').click(function(){
		$('html,body').animate({scrollTop: 700},'slow');
		return false;
	});

	$('a[href=#thirdSection]').click(function(){
		$('html,body').animate({scrollTop: 1400},'slow');
		return false;
	});

	$('a[href=#fourthSection]').click(function(){
		$('html,body').animate({scrollTop: 2100},'slow');
		return false;
	});

	$('a[href=#fifthSection]').click(function(){
		$('html,body').animate({scrollTop: 2800},'slow');
		return false;
	});
});