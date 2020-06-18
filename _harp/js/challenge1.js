$('#subscription').prop("checked", false);

$('#subscription').change(function(){
    $('#email_Div').animate({
        opacity:'toggle' ,
        height: 'toggle'
    }, 1500);
  });

