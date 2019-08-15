"use strict";

$(function ()
{
    let objects;

    $.getJSON("api/courses", function (data)
    {
        objects = data;
        createTable(objects);
    });
    $("#addCourse").on("click", function()
    { 
        $("#addCourse").hide();
        $("#update, #cancel").toggleClass("visible");
    });

    $("#update, #cancel").on("click", function()
    {
        alert("I haven't figured out how to do that yet, but I will.");
        $("#addCourse").show();
        $("#update, #cancel").toggleClass("visible");
    });
});

function createTable(list)
{
    for (let i = 0; i < list.length; i++)
    {
        insertTableData(list[i]);
    }
}

function insertTableData(list)
{
    let rowBeingEntered = "<tr><td>" + list.courseNum + "</td><td>" + list.courseName + "</td><td>" + list.startDate + "</td><td><a target='rptTab' href='details.html?courseId=" + list.id + "'>Details</a></td></tr>";

    $("#tableBody").append(rowBeingEntered);
}