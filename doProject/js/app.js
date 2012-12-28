/**
 * Created with JetBrains WebStorm.
 * User: diwu.sld
 * Date: 12-11-22
 * Time: 下午8:22
 * To change this template use File | Settings | File Templates.
 */


$(document).ready(function(){
    $("#btnAddTask").click(function(){
        insertRow('tableTaskShow');
        insertRow('tableTaskFineshed');
    });
});

function onChecked(){
    alert("finished");
}

function insertRow(tableName){
    var table = document.getElementById(tableName);
    var row = table.insertRow(table.rows.length);
    row.id = table.rows.length;
    //alert("insert");-
    var column_0 = row.insertCell(0);
    var column_1 = row.insertCell(1);
    var column_2 = row.insertCell(2);

    column_0.innerHTML="<input type='checkbox' onclick='onChecked()'>";

    var edit = document.getElementById('editAddTask');
    column_1.innerHTML=edit.value;
    edit.value="";
    edit.focus();

    column_2.innerHTML="hehe";
}

