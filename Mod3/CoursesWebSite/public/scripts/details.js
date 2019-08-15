"use strict";

$(function ()
{
    let urlParams = new URLSearchParams(location.search);
    let courseId = urlParams.get("courseId");

    let object;
    $.getJSON("api/courses/" + courseId, function(data)
    {
        object = data;

        insertTableData(object);
    });
});

function insertTableData(course)
{
    let tableData = '<tr><td>Department</td><td>' + course.dept +
        '</td></tr><tr><td>Course Number</td><td>' + course.courseNum +
        '</td></tr><tr><td>Course Name</td><td>' + course.courseName +
        '</td></tr><tr><td>Instructor</td><td>' + course.instructor +
        '</td></tr><tr><td>Start Date</td><td>' + course.startDate +
        '</td></tr><tr><td>Number of Days</td><td>' + course.numDays +
        '</td></tr>';

    $("#tableBody").append(tableData);
}