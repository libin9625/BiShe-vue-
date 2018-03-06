function _vsb_showNewsStaticList(uid, size, duannum, pageCount, rowCount)
{
    var count = 0;
    var showobj;
    var start = (pageCount- rowCount % pageCount) % pageCount;
    for(i = start ; i < start + pageCount && i < size; i++)
    {
        count++;

        showobj = document.getElementById("line_" + uid + "_" + i);
        if(showobj)
            showobj.style.display="";

        showobj = document.getElementById("lineImage_" + uid + "_" + i);
        if(showobj)
            showobj.style.display="";

        if(duannum != 0 && count%duannum==0 && i + 1 < size && i + 1 < start + pageCount)
        {
            showobj = document.getElementById("section_" + uid + "_" + i);
            if(showobj)
                showobj.style.display="";
        }
    }
}
function _vsb_showNewsStaticList(uid, size, duannum, pageCount, rowCount, oldCount, oldNowPage, oldTotalPage)
{
    var count = 0;
    var showobj;
    var start = (pageCount- rowCount % pageCount) % pageCount;
    for(i = start ; i < start + pageCount && i < size; i++)
    {
        count++;

        showobj = document.getElementById("line_" + uid + "_" + i);
        if(showobj)
            showobj.style.display="";

        showobj = document.getElementById("lineImage_" + uid + "_" + i);
        if(showobj)
            showobj.style.display="";

        if(duannum != 0 && count%duannum==0 && i + 1 < size && i + 1 < start + pageCount)
        {
            showobj = document.getElementById("section_" + uid + "_" + i);
            if(showobj)
                showobj.style.display="";
        }
    }
    var fanyetd = document.getElementById("fanye" + uid);
		    if(fanyetd && oldCount && oldNowPage && oldTotalPage)
		    {
		    	var oldPageStr = oldNowPage + "/" + oldTotalPage;
		        var newPageStr = (totalPages - oldTotalPage + oldNowPage) + "/" + totalPages;
		        var oldCountStr = new String(oldCount);
		        var newCountStr = new String(rowCount);
		        var oldstr = fanyetd.innerHTML;
		        var newstr = oldstr.replace(oldPageStr, "${page}").replace(oldCountStr, "${count}").replace("${page}", newPageStr).replace("${count}", newCountStr);
		        fanyetd.innerHTML = newstr;
		    }
}