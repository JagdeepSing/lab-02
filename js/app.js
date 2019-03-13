$(function() {
  'use strict';

  const $pickTemplate = $('#phto-template');

  function Picture (pic) {
    this.imageurl = pic.img_url;
    this.title = pic.title;
    this.description = pic.description;
    this.keyword = pic.keyword;
    this.horns = pic.horns;
  }

  Picture.allPictures = [];

  Picture.prototype.render = function(){
    $('main').append('<section class = "clone"></section>');

    let $picClone = $('section[class = "clone"]');
    let $picHTML = $('#photo-template').html(); 

    $picClone.html($picHTML);
    $picClone.find('h2').text(this.name);
    $picClone.find('img').attr('src', this.imageurl);
    $picClone.find('p').text(this.description);
    $picClone.removeClass('clone');
    $picClone.attr('class', this.name);
  };



});
//copy html templat to JS 
