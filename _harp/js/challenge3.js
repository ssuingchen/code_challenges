var stand = false;
var year = false;
$(':input').prop("checked", false);
$(":submit").click(function(e) {
    e.preventDefault();
    $("input[name='standing']").each(function(){
        if($(this).prop("checked")){
            stand = true;
            return false;
        }
        else{
            stand = false;
        }
    });
  
    $("input[name='gradDate']").each(function(){
        if($(this).prop("checked")){
            year = true;
            return false;
        }
        else{
            year = false;
        }
    });
    
    if(stand && year){
        $('#ch3form').submit();
    }
    else if(!stand && year){
        alert('You must select one from class standing');
    }
    else if(stand && !year){
        alert('You must select one from graduate date');
    }
    else{
        alert('You must select one from class standing and one from grduate date.');
    }
});



