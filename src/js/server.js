$(function() {
  var resultData = [
    {
     "name": "Place of interesting",
     "description": "Description of the place"
   }
  ];
  var likeData = [
    {
      "name":"Liked place"
    }
  ];
  var resultModel = new ResultItem({'results': resultData});
  var likeModel = new LikeItem({'likes':likeData});
  var searchForm = new SearchFormView(resultModel);
  var resultItems = new ResultItemsView(resultModel, likeModel);
  var likeItems = new LikeItemsView(likeModel);

  searchForm.render();
  resultItems.render();
  likeItems.render();
});