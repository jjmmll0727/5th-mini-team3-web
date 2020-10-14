

function readCookie(name, document) {
    if(process.browser){
        var nameEQ = name + "=";
        var ca = document.cookie ? document.cookie.split(';') : null
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
    else{
        return null;
    }
}

export default readCookie