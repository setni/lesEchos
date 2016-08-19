window.onload = function()
{
    
            window.sessionStorage.clear();
            window.localStorage.clear();
            cookies = document.cookie.split(";");
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].split("=");
                var domainParts = document.domain.match(/[a-zA-Z0-9]+\.?/g);
                for (var j = 0; j < domainParts.length - 1; j++) {
                    var domain = (j > 0 ? "." : "" ) + document.domain.match(/[a-zA-Z0-9]+\.?/g).splice(j).join("");
                    document.cookie = cookie[0] + "=;expires=Thu, 21 Sep 1979 00:00:01 UTC;domain=" + domain + ";";
                }
            }
    console.log('Les Echos sans limite : enjoy!');
    ele = document.getElementsByClassName('paywall-fx');
    ele[0].remove();
    
    
}
            
          