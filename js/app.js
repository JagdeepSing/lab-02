$(function() {
  'use strict';

  let _displayImages = () => {


    function Picture (pic) {
      this.imageurl = pic.image_url;
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
      $picClone.find('h2').text(this.title);
      $picClone.find('img').attr('src', this.imageurl);
      $picClone.find('p').text(this.description);
      $picClone.removeClass('clone');
      $picClone.attr('class', this.title + ' animal');
    };



    Picture.readJSON = () => {
      $.get('data/page-1.json', 'json')
        .then(data => {
          data.forEach(item => {
            Picture.allPictures.push(new Picture(item));
          });
        })
        .then(Picture.loadPictures);
    };

    Picture.loadPictures = () => {
      Picture.allPictures.forEach(pic => pic.render());
      $('#photo-template').remove();
    };
    $(() => Picture.readJSON());
  };
  _displayImages();
});
//copy html templat to JS
