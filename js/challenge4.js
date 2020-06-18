var fullname = false;
var street = false;
$("input[type='text']").val("");
$(":submit").click(function(e) {
    e.preventDefault();
    if ($("input[name='name']").val() != ""){
        fullname = true;
    }
    else{
        fullname = false;
    }

    if ($("input[name='addr']").val() != ""){
        street = true;
    }
    else{
        street = false;
    }
 
    if (fullname && street){
        $('#challenge4_form').submit();
    }
    else if(!fullname && street){
        $("#nmError").css("display","block");
        $("#addrError").css("display","none");
    }
    else if(fullname && !street){
        $("#addrError").css("display","block");
        $("#nmError").css("display","none");
    }
    else{
        $("#nmError").css("display","block");
        $("#addrError").css("display","block");
    }
    



});