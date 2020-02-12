$(function(){
    $(".fa-bars").click(function(){
        $(".slidedown").toggle();
    }),

    $(".slidedown li:contains('Pages')").mouseover(function(){
        $(".slidedown .drop").show('fast');  
    });
    $(".slidedown li:contains('Pages')").mouseleave(function(){
        $(".slidedown .drop").hide('fast');  
    });
    $(".big li:contains('Pages')").mouseover(function(){
        $(".big li .drop ").slideDown('fast');  
    }); 
     $(".big li .drop ").mouseleave(function(){
        $(".big li .drop ").slideUp('fast');  
    }); 
    $(".hcol-4 input").val($(".choose").html())

    $(".hcol-4 input").click(function(){
$(".room-list").fadeIn('fast')

    });
    $(".room-list li").click(function(){
        $(".hcol-4 input").val($(this).html()) ,
        $(this).css("fontWeight","bold"),
        $(".room-list").hide('fast');
    }); 
    
    $(".dec").click(function(){
        var x= $(this).next("input").val();
        if(x>0){
        $(this).next("input").val(x-1);}
        
 
     })
    
    $(".inc").click(function(){
        var x= $(this).prev("input").val();
       $(this).prev("input").val(Number(x)+1);
    })
    
  
    $(".hcol-1 input , .hcol-2 input").click(function(){
        $(this).siblings("div").show();
    });
    $(".cal1 td").click(function(){
        $(".hcol-1 input").val($(this).html() +"/2/2020") ,
        $(".cal1").hide('fast');
    });
      $(".cal2 td").click(function(){
        $(".hcol-2 input").val($(this).html() +"/2/2020") ,
        $(".cal2").hide('fast');
    });
    $(".sec4 span").click(function(){
        $(".hidden-video").show();
        });
    $(".sec4 img").click(function(){
       $(".hidden-video").hide();
       });
   
});