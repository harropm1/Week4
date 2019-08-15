"use strict";

$(function()
{
    let objects;

    $.getJSON("data/products.json", function(data)
    {
        objects = data.Items;
    });

    $("#categorySelect").on("change", function()
    {
        if ($("#categorySelect").val() == "Choose one")
        {
            $("#tableBody").empty();
        }
        else
        {
            $("#tableBody").empty();
            createSearchByCategoryTable(objects, $("#categorySelect").val());
        }
    });
});

function createSearchByCategoryTable(list, selection)
{
    for (let i = 0; i < list.length; i++)
    {
        if (selection == list[i].CategoryName)
        {
            insertTableData(list[i]);
        }
    }
}

function insertTableData(list)
{
    let rowBeingEntered = "<tr><td>" + list.ProductID + "</td><td>" + list.ProductName + "</td><td>" + Number(list.UnitPrice).toFixed(2) + "</td><td><a target='rptTab' href='details.html?productid=" + list.ProductID + "'>Details</a></td></tr>";

    $("#tableBody").append(rowBeingEntered);
}