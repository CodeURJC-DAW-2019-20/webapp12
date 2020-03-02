var appendProperty = '<section class="ftco-section"><div class="container"><div class="row">'
var appendProperty1 = '<div class="col-md-4"><div class="property-wrap ftco-animate"><a href="properties/{{id}}" class="img" style="background-image: url(images/work-1.jpg);"></a><div class="text">'
var appendProperty12 = '<p class="price"><span class="orig-price">{{price}}<small>$</small></span></p><ul class="property_list"><li><span class="flaticon-bed"></span>{{rooms}}</li><li><span class="flaticon-bathtub">'
var appendProperty13 = '</span>{{bathrooms}}</li><li><span class="flaticon-floor-plan"></span>{{squareMeters}}</li></ul>'
var appendProperty14 = '<h3><a>{{property}} en {{location}}</a></h3><span class="location">{{location}}</span><a class="d-flex align-items-center justify-content-center btn-custom" '
var appendProperty15 = 'id ="deleteFavouriteButton" href="deleteFromFavourites/{{id}}"><span class="icon-star-o"></span></a></div></div></div>'
var appendProperty16 = '</div></div></section>'
var loadBtn = document.getElementById("LoadMore");
loadBtn.onclick = function(){
            console.log("loadMyFavourites");
    $.ajax({
        method:"GET",
        url:'https://localhost:8443/properties',
        data:{
            page: 1,
            pageLimit: 3
        },
        success: function(data){
            console.log(data);
            if (data.success) {
                data.
                    // usar el data o data array para pintar el html
                }
                $("#result").html(html);
            }
        },
        error: function(jqXHRM,textStatus, errorThrown){
        console.log(jqXHRM);
        console.log(textStatus);
        console.log(errorThrown);
        }
            });



}