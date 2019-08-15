"use strict";

$(function ()
{
    let object;
    $.getJSON("api/courses/", function(data)
    {
        object = data;

        insertTableData(object);
    });
});

function insertTableData(course)
{
    let tableData = '<tr><td>Department</td><td><input type="text"></td></tr><tr><td>Course Number</td><td><input type="text"></td></tr><tr><td>Course Name</td><td><input type="text"></td></tr><tr><td>Instructor</td><td><input type="text"></td></tr><tr><td>Start Date</td><td><input type="text"></td></tr><tr><td>Number of Days</td><td><input type="text"></td></tr>';

    $("#tableBody").append(tableData);
}