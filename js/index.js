/// <reference types="../@types/jquery">/>

$(".icon").on("click", function () {
  $(".ul").animate({ width: 250 }, 500);
  $(".icon").animate({ marginLeft: 250 }, 500);
});

$(".mark").on("click", function () {
  $(".ul").animate({ width: 0 }, 500);
  $(".icon").animate({ marginLeft: 0 }, 500);
});

$("#home ul li a").on("click", function (e) {
  const aHref = e.target.getAttribute("href");
  const currentScroll = $(aHref).offset().top;
  $("body,html").animate({ scrollTop: currentScroll }, 1000);
});

$(".singer").on("click", function (e) {
  $(".info").not($(e.target).next()).slideUp(500);
  $(e.target).next().slideToggle(500);
});

function eventDate(date) {
  const counter = setInterval(() => {
    const now = new Date();

    const event = new Date(date);

    const duration = event - now;

    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${minutes} m`);
    $(".seconds").html(`${seconds} s`);

    if (duration < 0) {
      clearInterval(counter);
      $(".days").html(`Soon`);
      $(".hours").html(`Next`);
      $(".minutes").html(`Event`);
      $(".seconds").html(`Time`);
    }
  }, 1000);
}

eventDate("Dec 31, 2024 12:00:00");

let max = 100;

$("textarea").on("input", function () {
  const letterNums = max - $(this).val().length;

  if (letterNums > 0) {
    $(".letterNums").html(letterNums);
  } else {
    $(".letterNums").html(`Your available character finished`);
  }
});

$(window).on("scroll", function () {
  if ($(this).scrollTop() == 0) {
    $(".button").hide();
  } else {
    $(".button").show();
  }
});


$(".button").on("click", function(){
  $("body,html").animate({ scrollTop: 0 }, 1000);
})


$(function(){
  $(".loading").hide()
})