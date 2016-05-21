//IIFE to wrap the entire script and keep all vars local
var PAGECONTROLLER = (function($, window, document) {
	"use strict";

	//Object to grant access to methods in this function
	var object = {};

	//Method used to setup the basic funtions of the page
	object.init = function() {
		collapseNavbar();
		jquery();
	};

	//Return the object to get access to the methods from the console.
	return object;

	//Private Functions

	// jQuery to collapse the navbar on scroll
	function collapseNavbar() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	}

	function jquery() {
		$(window).scroll(collapseNavbar);
		$(document).ready(collapseNavbar);

		// jQuery for page scrolling feature - requires jQuery Easing plugin
		$(function() {
			$('a.page-scroll').bind('click', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top
				}, 1500, 'easeInOutExpo');
				event.preventDefault();
			});
		});

		// Closes the Responsive Menu on Menu Item Click
		$('.navbar-collapse ul li a').click(function() {
			if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
				$('.navbar-toggle:visible').click();
			}
		});
	}

}(window.jQuery, window, document));
//Page initialization
PAGECONTROLLER.init();
