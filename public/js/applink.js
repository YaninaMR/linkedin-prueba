(function($){
    var $MessageList = $('#js-messages');

    function message(p_sMessage){
        $MessageList.append($('<li>' + p_sMessage + '</li>'));
    }
    
    window.Linkedin = {
        init : function(){
            message('The Linkedin JS has loaded.');
            message('You can now login.');
            
            $('.IN-widget').on('click', function(){
                message('hiciste click');
            });
        }
        , onAuthCallback : function(){
            message('Ya iniciaste sesión.');
            message('te devolvemos data.');
        }
        , onLogoutCallback : function(){
            message('You just logged out.');
        }
        , userData : function(p_oUserInfo){
            message('Tu solicitud fue procesado:');
            message(''
                    + '<figure class="img-responsive"> <img class="photo" src="' + p_oUserInfo.pictureUrl + '" \/></figure>'
                    + p_oUserInfo.firstName + ' ' + p_oUserInfo.lastName
                    + ' (' + p_oUserInfo.id + ')' 
                   );
         }
    };    
}(jQuery));