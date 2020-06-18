$('#bill').val("");
$('#useAddress').prop("checked", false);
$('#home').val("");

$('#useAddress').change(function(){
    if ($('#useAddress').prop("checked")){
        if($('#bill').val()){
            //print home add as bill add
            $('#home').val($('#bill').val());
            $('#home').css("background","#D2D2D2");
            $('#home').prop("disabled", true);
        }
    }
    else{
        $('#home').val("");
        $('#home').css("background","white");
        $('#home').prop("disabled", false);
    }    
});


