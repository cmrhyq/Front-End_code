/**
 * <p></p>
 *
 * @author Alan Huang
 * @version v1.0.0
 * @className ajax.js
 * @project 矿池查询
 * @package
 * @date 2022/3/22-11:36
 * @email cmrhyq@163.com
 */
function AjaxBasePost(sRespCmd,sAction,AjaxMode,postURL,postStr,returnOBJId,returnOBJId2){
    var ajaxReq;
    var sResponse;
    var IfchkTimeOut=true;
    var needRe=0;
    var needRe2=0;
    var ifdebug=false;
    var returnOBJ;
    var returnOBJ2;

    if(typeof(returnOBJId) == "undefined"){
        needRe=0;
    }else{
        returnOBJ=document.getElementById(returnOBJId);
        needRe=1;
    }

    if(typeof(returnOBJId2) == "undefined"){
        needRe2=0;
    }else{
        returnOBJ2=document.getElementById(returnOBJId2);
        needRe2=1;
    }

    if (window.XMLHttpRequest){
        // code for IE7+, Firefox, Chrome, Opera, Safari
        ajaxReq=new XMLHttpRequest();
    }
    else{
        // code for IE6, IE5
        ajaxReq=new ActiveXObject("Microsoft.XMLHTTP");
    }

    function ontimeout(){
        if(IfchkTimeOut==true){
            ajaxReq.abort();
            if(needRe==1){
                var strurl;
                var index1 = postURL.indexOf('?');
                if(index1==-1){
                    strurl=postURL + "?" + postStr;
                }
                else{
                    strurl=postURL + "&" + postStr;
                }
                returnOBJ.innerHTML = "连接超时，<a href=" + strurl + " target=_blank>请点此查看</a>";
            }
        }
    }

    if(AjaxMode=="POST"){
        ajaxReq.open("POST",postURL,true);
        setTimeout(ontimeout,15000);
        ajaxReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajaxReq.send(postStr);
    }else{
        var strurl;
        if(typeof(postStr) != "undefined" && postStr.length>0 ){
            var index1 = postURL.indexOf('?');
            if(index1==-1){
                strurl=postURL + "?" + postStr;
            }
            else{
                strurl=postURL + "&" + postStr;
            }
        }else{
            strurl=postURL;
        }

        setTimeout(ontimeout,15000);//判断连接超时
        ajaxReq.open("GET",strurl,true);
        ajaxReq.send(null);
    }

    ajaxReq.onreadystatechange=function(){
        if ( (ajaxReq.readyState==4 && ajaxReq.status==200) || (ajaxReq.readyState==4 && ajaxReq.status==0)){
            IfchkTimeOut=false;
            sResponse = ajaxReq.responseText;
            if(sRespCmd=="login"){
                if(sAction=="logging"){						//登录验证
                    ChaEth_AdminLoginResult(sResponse,returnOBJId);
                }
                else if(sAction=="logout"){
                    ChaEth_AdminLogoutResult(sResponse);
                }
            }
            else if(sRespCmd=="fiknode"){
                if(sAction=="add"){
                    ChaEth_AddNodeResult(sResponse);
                }
                else if(sAction=="modify"){
                    ChaEth_ModifyNodeResult(sResponse);
                }
                else if(sAction=="del"){
                    ChaEth_DelNodeResult(sResponse);
                }
                else if(sAction=="cleanhost"){
                    ChaEth_CleanHostResult(sResponse);
                }
                else if(sAction=="modifystatus"){
                    ChaEth_ModifyStatusNodeResult(sResponse);
                }
                else if(sAction=="reconfighost"){
                    ChaEth_ReConfigHostResult(sResponse);
                }
            }
            else if(sRespCmd=="modifypasswd"){
                ChaEth_ModifyPasswdResult(sResponse);
            }
            else if(sRespCmd=="fikgroup"){
                if(sAction=="add")	{
                    ChaEth_AddGroupResult(sResponse);
                }
                else if(sAction=="modify"){
                    ChaEth_ModifyGroupResult(sResponse);
                }
                else if(sAction=="del"){
                    ChaEth_DelGroupResult(sResponse);
                }
                else if(sAction=="modifystatus"){
                    ChaEth_ModifyStatusGroupResult(sResponse);
                }
            }
            else if(sRespCmd=="domain"){
                if(sAction=="add"){
                    ChaEth_AddDomainResult(sResponse);
                }
                else if(sAction=="del"){
                    ChaEth_DelDomainResult(sResponse);
                }
                else if(sAction=="cleancache"){
                    ChaEth_CleanCacheResult(sResponse);
                }
                else if(sAction=="cleandircache"){
                    ChaEth_CleanDirCacheResult(sResponse);
                }
                else if(sAction=="modify"){
                    ChaEth_ModifyDomainResult(sResponse);
                }
                else if(sAction=="startdomain"){
                    ChaEth_StartDomainResult(sResponse);
                }
                else if(sAction=="modifystatus"){
                    ChaEth_ModifyDomainStatusResult(sResponse);
                }
                else if(sAction=="delnodedomain"){
                    ChaEth_DelNodeDomainResult(sResponse);
                }
                else if(sAction=="start"){
                    ChaEth_StartDomainResult(sResponse);
                }
                else if(sAction=="stop"){
                    ChaEth_StopDomainResult(sResponse);
                }
                else if(sAction=="verify"){
                    ChaEth_VerifyDomainResult(sResponse);
                }
                else if(sAction=="modifyset"){
                    ChaEth_ModifySetDomainResult(sResponse);
                }
            }
            else if(sRespCmd=="search"){
                if(sAction=="user"){
                    ChaEth_SearchUserResult(sResponse);
                }
                else if(sAction=="node"){
                    ChaEth_SearchNodeResult(sResponse);
                }
                else if(sAction=="domain"){
                    ChaEth_SearchDomainResult(sResponse);
                }
                else if(sAction=="recharge"){
                    ChaEth_SearchRechargeResult(sResponse);
                }
                else if(sAction=="buyhistory"){
                    ChaEth_SearchBuyHistoryResult(sResponse);
                }
                else if(sAction=="order"){
                    ChaEth_SearchBuyHistoryResult(sResponse);
                }
                else if(sAction=="buy"){
                    ChaEth_SearchBuyHistoryResult(sResponse);
                }
            }
            else if(sRespCmd=="user"){
                if(sAction=="add"){
                    ChaEth_AddUserResult(sResponse);
                }
                else if(sAction=="del"){
                    ChaEth_DelUserResult(sResponse);
                }
                else if(sAction=="modify"){
                    ChaEth_ModifyUserResult(sResponse);
                }
            }
            else if(sRespCmd=="pull"){
                if(sAction=="addpull"){
                    ChaEth_AddPullResult(sResponse);
                }
                else if(sAction=="delpull"){
                    ChaEth_DelPullResult(sResponse);
                }
                else if(sAction=="modifystatus"){
                    ChaEth_ModifyStatusPullResult(sResponse);
                }
            }
            else if(sRespCmd=="recharge"){
                if(sAction=="add"){
                    ChaEth_AddRechargeResult(sResponse);
                }
            }
            else if(sRespCmd=="admin"){
                if(sAction=="modify"){
                    ChaEth_ModifyAdminResult(sResponse);
                }
            }
            else if(sRespCmd=="logs"){
                if(sAction=="clearloginlog"){
                    ChaEth_ClearLoginLogResult(sResponse);
                }
            }
            else if(sRespCmd=="setting"){
                if(sAction=="modifyinfo"){
                    ChaEth_ModifyInfoResult(sResponse);
                }
                else if(sAction=="modifypasswd"){
                    ChaEth_ModifyPasswdResult(sResponse);
                }
            }
            else if(sRespCmd=="order"){
                if(sAction=="modify"){
                    ChaEth_ModifyOrderResult(sResponse);
                }
                else if(sAction=="del"){
                    ChaEth_DelOrderResult(sResponse);
                }
            }
            else if(sRespCmd=="product"){
                if(sAction=="add"){
                    ChaEth_AddProductResult(sResponse);
                }
                else if(sAction=="modify"){
                    ChaEth_ModifyProductResult(sResponse);
                }
                else if(sAction=="del"){
                    ChaEth_DelProductResult(sResponse);
                }
            }
            else if(sRespCmd=="upstream"){
                if(sAction=="add"){
                    ChaEth_AddUpstreamResult(sResponse);
                }
                else if(sAction=="del"){
                    ChaEth_DelUpstreamResult(sResponse);
                }
                else if(sAction=="same_config"){
                    ChaEth_SameNodeConfigUpstreamResult(sResponse);
                }
                else if(sAction=="modify"){
                    ChaEth_ModifyUpstreamResult(sResponse);
                }
            }
            else if(sRespCmd=="buy"){
                if(sAction=="del"){
                    ChaEth_DelBuyResult(sResponse);
                }
                else if(sAction=="modify"){
                    ChaEth_ModifyBuyResult(sResponse);
                }
                else if(sAction=="startdomain"){
                    ChaEth_StartBuyDomainResult(sResponse);
                }
                else if(sAction=="stopdomain"){
                    ChaEth_StopBuyDomainResult(sResponse);
                }
            }
            else if(sRespCmd=="task"){
                if(sAction=="del"){
                    ChaEth_DelTaskResult(sResponse);
                }
                else if(sAction=="reexecute"){
                    ChaEth_ReExecuteTaskResult(sResponse);
                }
                else if(sAction=="autodel"){
                    ChaEth_SetAutoDelTaskResult(sResponse);
                }
            }
            else if(sRespCmd=="fcache"){
                if(	sAction=="list"){
                    ChaEth_RefreshFCacheResult(sResponse);
                }
                else if(sAction == "add"){
                    ChaEth_AddFCacheResult(sResponse);
                }
                else if(sAction == "modify"){
                    ChaEth_ModifyFCacheResult(sResponse);
                }
                else if(sAction == "del"){
                    ChaEth_DelFCacheResult(sResponse);
                }
                else if(sAction == "up"){
                    ChaEth_UpFCacheResult(sResponse);
                }
                else if(sAction == "down"){
                    ChaEth_DownFCacheResult(sResponse);
                }
                else if(sAction == "sync"){
                    ChaEth_SyncFCacheResult(sResponse);
                }
            }
            else if(sRespCmd=="rcache"){
                if(	sAction=="list"){
                    ChaEth_RefreshRCacheResult(sResponse);
                }
                else if(sAction == "add"){
                    ChaEth_AddRCacheResult(sResponse);
                }
                else if(sAction == "modify"){
                    ChaEth_ModifyRCacheResult(sResponse);
                }
                else if(sAction == "del"){
                    ChaEth_DelRCacheResult(sResponse);
                }
                else if(sAction == "up"){
                    ChaEth_UpRCacheResult(sResponse);
                }
                else if(sAction == "down"){
                    ChaEth_DownRCacheResult(sResponse);
                }
                else if(sAction == "sync"){
                    ChaEth_SyncRCacheResult(sResponse);
                }
            }
            else if(sRespCmd=="rewrite"){
                if(	sAction=="list"){
                    ChaEth_RefreshRewriteResult(sResponse);
                }
                else if(sAction == "add"){
                    ChaEth_AddRewriteResult(sResponse);
                }
                else if(sAction == "modify"){
                    ChaEth_ModifyRewriteResult(sResponse);
                }
                else if(sAction == "del"){
                    ChaEth_DelRewriteResult(sResponse);
                }
                else if(sAction == "up"){
                    ChaEth_UpRewriteResult(sResponse);
                }
                else if(sAction == "down"){
                    ChaEth_DownRewriteResult(sResponse);
                }
                else if(sAction == "sync"){
                    ChaEth_SyncRewriteResult(sResponse);
                }
            }

        }
    }
}

function RealtimeAjaxBasePost(sRespCmd,sAction,AjaxMode,postURL,postStr,returnOBJId,returnOBJId2){
    var ajaxReq;
    var sResponse;
    var IfchkTimeOut=true;
    var needRe=0;
    var needRe2=0;
    var ifdebug=false;
    var returnOBJ;
    var returnOBJ2;

    if(typeof(returnOBJId) == "undefined"){
        needRe=0;
    }else{
        returnOBJ=document.getElementById(returnOBJId);
        needRe=1;
    }

    if(typeof(returnOBJId2) == "undefined"){
        needRe2=0;
    }else{
        returnOBJ2=document.getElementById(returnOBJId2);
        needRe2=1;
    }

    if (window.XMLHttpRequest){
        // code for IE7+, Firefox, Chrome, Opera, Safari
        ajaxReq=new XMLHttpRequest();
    }
    else{
        // code for IE6, IE5
        ajaxReq=new ActiveXObject("Microsoft.XMLHTTP");
    }

    function ontimeout(){
        if(IfchkTimeOut==true){
            ajaxReq.abort();
            if(needRe==1){
                var strurl;
                var index1 = postURL.indexOf('?');
                if(index1==-1){
                    strurl=postURL + "?" + postStr;
                }
                else{
                    strurl=postURL + "&" + postStr;
                }
                returnOBJ.innerHTML = "连接超时，<a href=" + strurl + " target=_blank>请点此查看</a>";
            }
        }
    }

    if(AjaxMode=="POST"){
        ajaxReq.open("POST",postURL,true);
        setTimeout(ontimeout,25000);
        ajaxReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajaxReq.send(postStr);
    }else{
        var strurl;
        if(typeof(postStr) != "undefined" && postStr.length>0 ){
            var index1 = postURL.indexOf('?');
            if(index1==-1){
                strurl=postURL + "?" + postStr;
            }
            else{
                strurl=postURL + "&" + postStr;
            }
        }else{
            strurl=postURL;
        }

        setTimeout(ontimeout,25000);//判断连接超时
        ajaxReq.open("GET",strurl,true);
        ajaxReq.send(null);
    }

    ajaxReq.onreadystatechange=function(){
        if ( (ajaxReq.readyState==4 && ajaxReq.status==200) || (ajaxReq.readyState==4 && ajaxReq.status==0)){
            IfchkTimeOut=false;
            sResponse = ajaxReq.responseText;
            if(sRespCmd=="fiknode"){
                if(sAction=="realtime"){
                    ChaEth_NodeRealtimeResult(sResponse);
                }
                else if(sAction=="auth"){
                    ChaEth_NodeAuthResult(sResponse);
                }
            }
        }

    }
}

function urlencode(text){
    text = text.toString();
    var matches = text.match(/[\x90-\xFF]/g);
    if (matches)
    {
        for (var matchid = 0; matchid < matches.length; matchid++)
        {
            var char_code = matches[matchid].charCodeAt(0);
            text = text.replace(matches[matchid], '%u00' + (char_code & 0xFF).toString(16).toUpperCase());
        }
    }
    return escape(text).replace(/\+/g, "%2B");
}



function AjaxClientBasePost(sRespCmd,sAction,AjaxMode,postURL,postStr,returnOBJId,returnOBJId2){
    var ajaxReq;
    var sResponse;
    var IfchkTimeOut=true;
    var needRe=0;
    var needRe2=0;
    var ifdebug=false;
    var returnOBJ;
    var returnOBJ2;

    if(typeof(returnOBJId) == "undefined"){
        needRe=0;
    }else{
        returnOBJ=document.getElementById(returnOBJId);
        needRe=1;
    }

    if(typeof(returnOBJId2) == "undefined"){
        needRe2=0;
    }else{
        returnOBJ2=document.getElementById(returnOBJId2);
        needRe2=1;
    }

    if (window.XMLHttpRequest){
        // code for IE7+, Firefox, Chrome, Opera, Safari
        ajaxReq=new XMLHttpRequest();
    }
    else{
        // code for IE6, IE5
        ajaxReq=new ActiveXObject("Microsoft.XMLHTTP");
    }

    function ontimeout(){
        if(IfchkTimeOut==true){
            ajaxReq.abort();
            if(needRe==1){
                var strurl;
                var index1 = postURL.indexOf('?');
                if(index1==-1){
                    strurl=postURL + "?" + postStr;
                }
                else{
                    strurl=postURL + "&" + postStr;
                }
                returnOBJ.innerHTML = "连接超时，<a href=" + strurl + " target=_blank>请点此查看</a>";
            }
        }
    }

    if(AjaxMode=="POST"){
        ajaxReq.open("POST",postURL,true);
        setTimeout(ontimeout,15000);
        ajaxReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajaxReq.send(postStr);
    }else{
        var strurl;
        if(typeof(postStr) != "undefined" && postStr.length>0 ){
            var index1 = postURL.indexOf('?');
            if(index1==-1){
                strurl=postURL + "?" + postStr;
            }
            else{
                strurl=postURL + "&" + postStr;
            }
        }else{
            strurl=postURL;
        }

        setTimeout(ontimeout,15000);//判断连接超时
        ajaxReq.open("GET",strurl,true);
        ajaxReq.send(null);
    }

    ajaxReq.onreadystatechange=function(){
        if ( (ajaxReq.readyState==4 && ajaxReq.status==200) || (ajaxReq.readyState==4 && ajaxReq.status==0)){
            IfchkTimeOut=false;
            sResponse = ajaxReq.responseText;
            if(sRespCmd=="login"){
                if(sAction=="logging"){						//登录验证
                    ChaEth_ClientLoginResult(sResponse,returnOBJId);
                }
                else if(sAction=="logout"){
                    ChaEth_ClientLogoutResult(sResponse);
                }
            }
            else if(sRespCmd=="setting"){
                if(sAction=="modifyinfo"){
                    ChaEth_ClientModifyInfoResult(sResponse);
                }
                else if(sAction=="modifypasswd"){
                    ChaEth_ClientModifyPasswdResult(sResponse);
                }
            }
            else if(sRespCmd=="domain"){
                if(sAction=="add"){
                    ChaEth_ClientAddDomainResult(sResponse);
                }
                else if(sAction=="modify"){
                    ChaEth_ClientModifyDomainResult(sResponse);
                }
                else if(sAction=="del"){
                    ChaEth_ClientDelDomainResult(sResponse);
                }
                else if(sAction=="start"){
                    ChaEth_ClientStartDomainResult(sResponse);
                }
                else if(sAction=="stop"){
                    ChaEth_ClientStopDomainResult(sResponse);
                }
                else if(sAction=="cleancache"){
                    ChaEth_ClientClearCacheDomainResult(sResponse);
                }
                else if(sAction=="cleandircache"){
                    ChaEth_ClientCleanDirCacheResult(sResponse);
                }
            }
            else if(sRespCmd=="order")
            {
                if(sAction=="add"){
                    ChaEth_ClientAddOrderResult(sResponse);
                }
                else if(sAction=="del"){
                    ChaEth_ClientDelOrderResult(sResponse);
                }
                else if(sAction=="pay"){
                    ChaEth_ClientPayOrderResult(sResponse);
                }
                else if(sAction=="renewal"){
                    ChaEth_ClientRenewalOrderResult(sResponse);
                }
                else if(sAction=="submit"){
                    ChaEth_SubmitOrderResult(sResponse);
                }
                else if(sAction=="rechdel"){
                    ChaEth_DelOrderResult(sResponse);
                }
            }
            else if(sRespCmd=="user")
            {
                if(sAction=="register")
                {
                    ChaEth_ClientUserRegisterResult(sResponse);
                }
            }
        }

    }
}

function ChkKeyDown(){
    if(window.event){
        keynum = event.keyCode;
    }else if(event.which){
        keynum = event.which;
    }
    if(keynum==13||keynum==32)return true;
}

function left(mainStr,lngLen) {
    if (lngLen>0) {return mainStr.substring(0,lngLen);}
    else{return null;}
}
