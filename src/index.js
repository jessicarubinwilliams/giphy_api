import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$('#gifSearch').click(function() {
  const search = $('#search').val();
  $('#search').val("");

  let request = new XMLHttpRequest();
  const searchURL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${search}&limit=1&offset=0&rating=g&lang=en`;

  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getElements(response);
    }
  }

  request.open("GET", searchURL, true);
  request.send();

  function getElements(response) {
    let gifLink = response;
    console.log(gifLink);
    //let downSizedGif = gifLink.body.data.images.downsized.urlbody.data.images.downsized.url
    
    let downSizedGif = gifLink.pagination.total_count;
    let downSizedGif1 = gifLink.data[0].images.downsized.url;

    console.log(downSizedGif);
    $('.showGif').text(downSizedGif);
    $('.showimage').text(downSizedGif1)
  }
});
