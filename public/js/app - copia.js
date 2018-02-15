(function($){
    var $MessageList = $('#js-messages');

    function message(p_sMessage){
        $MessageList.append($('<li>' + p_sMessage + '</li>'));
    }
    
    window.Linkedin = {
        init : function(){
            message('The Linkedin JS has loaded.');
            message('You can now login.');
            
            $('.IN-widget').bind('click', function(){
                message('You just clicked the Login Button');
            });
        }
        , onAuthCallback : function(){
            message('You just logged in.');
            message('Will retrieve your info.');
        }
        , onLogoutCallback : function(){
            message('You just logged out.');
        }
        , userData : function(p_oUserInfo){
            message('Your user data was received:');
            message(''
                    + ' <img src="' + p_oUserInfo.pictureUrl + '" \/>'
                    + p_oUserInfo.firstName + ' ' + p_oUserInfo.lastName
                    + ' -- ' + p_oUserInfo.headline
                    + ' (' + p_oUserInfo.id + ')'
                   );
        }
    };    
}(jQuery));
