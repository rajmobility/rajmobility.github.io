function initWindow()
{
    //window.moveTo(0,window.screen.width);
    //window.open(location.href, "detab", "toolbar=0,status=no"); //location.href = current page
}

function moveMe(currentWidth)
{
    window.moveTo((window.screen.width) - (currentWidth/2),0);
    window.focus();
}

function callListShowNative(val) {

    /*
    var windowWidth = 590;
    var windowHeight = 800;
    var xPos = (window.screen.width) - (windowWidth/2);
    var yPos = 0;
    window.resizeTo(windowWidth,windowHeight);
    window.moveTo(xPos,yPos);
    */
   //alert(val);
   window.webkit.messageHandlers.nativeProcess.postMessage(val);
}

function callListHideNative() {
    
    /*
    var windowWidth = 150;
    var windowHeight = 800;
    var xPos = (window.screen.width) - (windowWidth/2);
    var yPos = 0;
    window.resizeTo(windowWidth,windowHeight);
    window.moveTo(xPos,yPos);
    */
   var data = "callListHideNative";
   window.webkit.messageHandlers.nativeProcess.postMessage(data);
}

function callDetailShowNative() {
   
    /*
    var windowWidth = 1290;
    var windowHeight = 800;
    var xPos = (window.screen.width) - (windowWidth/2);
    var yPos = 0;
    window.resizeTo(windowWidth,windowHeight);
    window.moveTo(xPos,yPos);
    */

    var data = "callDetailShowNative";
    window.webkit.messageHandlers.nativeProcess.postMessage(data);
}

function callDetailHideNative() {

    /*
    var windowWidth = 590;
    var windowHeight = 800;
    var xPos = (window.screen.width) - (windowWidth/2);
    var yPos = 0;
    window.resizeTo(windowWidth,windowHeight);
    window.moveTo(xPos,yPos);
    */

   var data = "callDetailHideNative";
   window.webkit.messageHandlers.nativeProcess.postMessage(data);
}

window.logger = (flutter_value) => {
   console.log({ js_context: this, flutter_value });
}