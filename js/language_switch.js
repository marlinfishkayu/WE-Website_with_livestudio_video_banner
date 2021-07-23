$(function() {
  $('.translate').click(function() {
      var lang = $(this).attr('id');

      $('.lang').each(function(index, item) {
          $(this).text(arrLang[lang][$(this).attr('key')]);

          //Change placeholder
          $(this).prop('placeholder', arrLang[lang][$(this).attr('key')]);

      });

  });
});

function translateLang(lang) {
  $('.lang').each(function(index, item) {

      var item = $(this);
      //Change text
      item.text(arrLang[lang][item.attr('key')]);
      //Change placeholder
      item.prop('placeholder', arrLang[lang][item.attr('key')]);


  });
  // swicth language for css，re-define language
  var html = document.documentElement;
  html.setAttribute('lang', 'en');
  html.removeAttribute('lang');
  html.setAttribute('lang', lang);



  $('.imageset').each(function() {
      //Change image
      var newImg = $(this).data("key");
      $(this).prop('srcset', arrImg[lang][0][newImg]);

  });

}

$(function() {
  //first check for stored language in localStorage i.e. fetch data from localStorage
  let stored_lang = localStorage.getItem("stored_lang");
  let lang = "EN";
  //if any then translate page accordingly
  if (stored_lang != null && stored_lang != undefined) {
    //  set the current language to selected language
    lang = stored_lang;
    
  } else {
    //  set english to default language
    localStorage.setItem("stored_lang", "EN");
  }
  translateLang(lang);

  $('.translate').click(function() {
      var lang = $(this).attr('id');
      //on click store language to localStorage
      localStorage.setItem("stored_lang", lang);
      translateLang(lang);


  });

});