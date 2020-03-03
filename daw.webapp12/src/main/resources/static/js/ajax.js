var appendProperty = '<section class="ftco-section"><div class="container"><div class="row"><div class="col-md-4"><div class="property-wrap ftco-animate"><a href="properties/'
var appendProperty1 = '" class="img" style="background-image: url(images/work-1.jpg);"></a><div class="text">'
var appendProperty12 = '<p class="price"><span class="orig-price">{{price}}<small>$</small></span></p><ul class="property_list"><li><span class="flaticon-bed"></span>{{rooms}}</li><li><span class="flaticon-bathtub">'
var appendProperty2 = '<small>$</small></span></p><ul class="property_list"><li><span class="flaticon-bed"></span>'//price
var appendProperty13 = '</span>{{bathrooms}}</li><li><span class="flaticon-floor-plan"></span>{{squareMeters}}</li></ul>'
var appendProperty14 = '<h3><a>{{property}} en {{location}}</a></h3><span class="location">{{location}}</span><a class="d-flex align-items-center justify-content-center btn-custom" '
var appendProperty15 = 'id ="deleteFavouriteButton" href="deleteFromFavourites/{{id}}"><span class="icon-star-o"></span></a></div></div></div>'
var appendProperty16 = '</div></div></section>'
var loadBtn = document.getElementById("LoadMore");
loadBtn.onclick = function(){
            console.log("loadMyFavourites");

    $.ajax({
        method:"GET",
        url:'https://localhost:8443/properties/',
        }).done(function(data){
            console.log("estoy aqui");
            console.log(data);

            //var tpl = ""+ appendProperty +advertisement[i].id appendProperty1 + appendProperty12 + appendProperty13 + appendProperty14 + appendProperty15 + appendProperty16 + "";

            //$('#result').append(tpl);

        }).fail(function(){
            console.log("failed to load");
        })









}