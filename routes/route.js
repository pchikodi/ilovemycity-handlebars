exports.home=function(req,res){
  res.render('home',{title:'iLoveMyCity',
                    headline:'We believe that every city have something to say'
                    });
                  }


exports.city=function(req,res){
    var cityName=req.params.city;
    var title,headline;
    var imageArray=[1,2,3,4];

    if(cityName==='berlin'){
       title="Berlin";
       headline="Berlin: Where love is in the air";
    }else if(cityName==='madrid'){
       title="Madrid";
       headline="Madrid: Buzz, Beautiful architecture and Football";
    }

    res.render('city',{
      title:title,
      headline:headline,
      city:cityName,
      imageArray:imageArray});
  }
