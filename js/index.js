


$(document).ready(function () {
  buildProductView(data);
});


// filter hats
$(".filter-hats div div").on("click", function () {
  let filterHats = this.innerHTML;
  if (filterHats === "All") {
    buildProductView(data);
  } else {
    let filterModel = data.filter((hat) => (filterHats === hat.model) ? true : false);
    buildProductView(filterModel);
  } 

});

                // filter color hats

$(".foo").on("click", function () {
  let filterData = this.innerHTML;
  let filterColor = data.filter((hat) => (filterData === hat.color) ? true : false);
  buildProductView(filterColor);
})

                  // sort price hats

$(".sort-price").on("click", function () {
  let hatsSortHight = data.sort((a, b) => {

    return a.price - b.price;

  });

  buildProductView(hatsSortHight);
});

$(".sort-price1").on("click", function(){
  let hatsSort = data.sort((a,b)=>{
      return b.price - a.price;
  });
  buildProductView(hatsSort);

});

          // search
$("#search").on("keyup",function(){
    let currentText = $(this).val().toLowerCase();
    let filtered = data.filter((obj) => {
    let objToString = JSON.stringify(obj).toLowerCase();
if(objToString.includes(currentText)){
    return true;
} else {
    return false;
}
    });
    buildProductView(filtered)
});





function buildProductView(arr) {
  $("#hats").empty();
  arr.forEach((hat) => {
    let perProduct = '<div class="col-4"' +
      '<div class="card" style="width: 18rem;">' +
      '<img class="card-img-top images-data" src="' + hat.imgUrl + '" >' +
      '<div class="card-body text1"><h5 class="card-title">' + hat.model + '</h5>' +
      '<p class="card-text text1">' + hat.description + '</p>' +
      '<a href="#" class="btn btn-primary btn1">' + hat.price + '</a>' +
      '</div>' +
      '</div>' +
      '</div>';
    $("#hats").append(perProduct);
  });


}