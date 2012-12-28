/**
 * Created with JetBrains WebStorm.
 * User: diwu.sld
 * Date: 12-11-22
 * Time: 上午9:58
 * To change this template use File | Settings | File Templates.
 */

alert("test");

var c=document.getElementById("canvasTest");
var ctx=c.getContext("2d");
ctx.fillStyle="#202020";
ctx.fillRect(0, 0, 15, 50);
var test = new Test();
test.paint();

function Test(){

    ctx.fillRect(10, 10, 100, 100);

    this.paint = function(){
        ctx.fillRect(100, 100, 200, 200);
    }
}