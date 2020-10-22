$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

    // in html image :: onclick="image()"
    function image(img) {
    var src = img.src;
    window.open(src);
    }

    
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})





// fetch from url and display

// class PhotoGallery{
//     constructor(){
//         this.API_KEY = '563492ad6f917000010000011390d6ed41884e48876e98eed6f63fa3';
//         this.thumbnailDiv = document.querySelector('.thumbnail');
//         this.loadMore = document.querySelector('.loadMore');
//         this.eventHandler();
        
//     }

//     eventHandler(){
//         document.addEventListener('DOMContentLoaded', ()=>{
//             this.getImg(); 
//             this.fetch()
//         });
//     }
//     async getImg(){

//         const baseURL = 'https://api.pexels.com/v1/search?query=Food&per_page=15';
//         this.GenerateHTML(data.photos);
//         console.log(data);

//         async fetch(baseURL)
//             {const response = await fetch(baseURL,{
//             method : 'Get',
//             headers : {
//                 Accept : 'application/json',
//                 Authorization : this.API_KEY
//             }
//         });
//         const data =await response.json();}
//     }
//     GenerateHTML(Photos){
//         photos.forEach(photo => {
//             const item = document.createElement('div')
//             item.classList.add('item');
//             item.innerHTML = ' <img src="${photos.src.medium}"> ';
//             this.thumbnailDiv.appendChild(item);
//         })
//     }
    
// }
