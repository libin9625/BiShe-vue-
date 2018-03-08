// 头部收藏命令
function dosuba194642a(){
    try{
        var ua = navigator.userAgent.toLowerCase();
        if(ua.indexOf("msie 8")>-1){
            window.external.AddToFavoritesBar(document.location.href,document.title,"");//IE8
        }else if(ua.toLowerCase().indexOf("rv:")>-1){
            window.external.AddToFavoritesBar(document.location.href,document.title,"");//IE11+
        }else{
            if (document.all) {
                window.external.addFavorite(document.location.href, document.title);
            }else if(window.sidebar){
                window.sidebar.addPanel( document.title, document.location.href, "");//firefox
            }
            else{
                alert(hotKeysa194642a());
            }
        }
    }
    catch (e){alert("无法自动添加到收藏夹，请使用 Ctrl + d 手动添加");}
}
function hotKeysa194642a(){
    var ua = navigator.userAgent.toLowerCase(); 
    var str = "";    
    var isWebkit = (ua.indexOf('webkit') != - 1); 
    var isMac = (ua.indexOf('mac') != - 1);     
    if (ua.indexOf('konqueror') != - 1) {  
        str = 'CTRL + B'; // Konqueror   
    } 
    else if (window.home || isWebkit || isMac) {        
        str = (isMac ? 'Command/Cmd' : 'CTRL') + ' + D'; // Netscape, Safari, iCab, IE5/Mac   
    }
    return ((str) ? '无法自动添加到收藏夹，请使用' + str + '手动添加' : str);
}
function setHomepagea194642a(){
    var url = document.location.href;
    if (document.all){
        document.body.style.behavior='url(#default#homepage)';
        document.body.setHomePage(url);
    }
    else if (window.sidebar){
        if(window.netscape) {
            try{
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }catch (e){
                alert("该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true");
            }
        }
        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components. interfaces.nsIPrefBranch);
        prefs.setCharPref('browser.startup.homepage',url);
    }
    else{
        alert("浏览器不支持自动设为首页，请手动设置");
    }
}