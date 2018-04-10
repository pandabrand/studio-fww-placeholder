import $ from 'jquery';

$( '#email-form' ).submit( function(e) {
    e.preventDefault(); //STOP default action

    var postData = $(this).serializeArray();
    var formURL = 'form-submit.php';
    console.log(postData);
    $.ajax(
    {
        url : formURL,
        type: "POST",
        data : postData,
        success:function(data, textStatus, jqXHR) 
        {
            $( '.form-container' ).attr( 'hidden', 'hidden' ).attr( 'aria-hidden', 'true' );
            $( '.thank-you-container' ).removeAttr( 'hidden' ).removeAttr( 'aria-hidden' );
        },
        error: function(jqXHR, textStatus, errorThrown) 
        {
            //if fails      
        }
    });

});