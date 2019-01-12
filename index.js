'use strict';
var check_url_type = {
    is_url_image: function (url) {
        var http = new XMLHttpRequest();
        http.open("HEAD", url, false);
        http.send();
        
            if(http.readyState==4 && http.status==200) {
                var h = http.getAllResponseHeaders();
                if (h.includes("content-type: image")) { return true; }
                else { return false; }
            } else {
                return "request failed";
            }
        
    },
    is_type: function (url, type) {
        var t = check_url_type.get_type(url);
        if (t=="request failed") {
            return t;
        } else if (t.includes(type)) {
            return true;
        } else {
            return false;
        }
    },
    get_type: function (url) {
        var http = new XMLHttpRequest();
        http.open("HEAD", url, false);
        http.send();
    
        if(http.readyState==4 && http.status==200) {
            var h = http.getAllResponseHeaders();
            var t = h.slice(h.indexOf("content-type:")+14,);
            if (h.indexOf(";")==-1) {
                return t.slice(0, t.indexOf("\n"));
            } else {
                return t.slice(0, Math.min(t.indexOf("\n"), t.indexOf(';')));
            }
        } else {
            return "request failed";
        }
    }
}
module.exports = check_url_type;