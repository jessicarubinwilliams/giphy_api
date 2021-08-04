import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GiphyService from './giphy-service'


function clearFields(){
  $('#search').val("");
  $('#imageToShow').attr("");
}

$('#gifSearch').click(function() {
  let search = $('#search').val();
  clearFields();
  let promise = GiphyService.getSearch(search);
  promise.then(function(response){
    const body = JSON.parse(response);
    let downSizedGif1 = body.data[0].images.downsized.url;
    $('#imageToShow').attr("src", downSizedGif1);
  });
});
