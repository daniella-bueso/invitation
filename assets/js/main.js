$(document).ready(function () {
    let page = window.location.href.split('/')[3];
    console.log(page)
    if (page == '#home') {
      $('#home-link').addClass('active')
      $('#home-link > a').css('color', 'black')
    } else if (page == '#couple') {
      $('#couple-link').addClass('active')
      $('#couple-link > a').css('color', 'black')
    } else if (page == '#wedding') {
      $('#wedding-link').addClass('active')
      $('#wedding-link > a').css('color', 'black')
    } else if (page == '#rsvplink') {
      $('#rsvp-link').addClass('active')
      $('#rsvp-link > a').css('color', 'black')
    }
  })