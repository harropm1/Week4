$(function()
{
    let urlParams = new URLSearchParams(location.search);
    let productID = urlParams.get("productid");
    
    let objects;
    $.getJSON("data/products.json", function(data)
    {
        objects = data.Items;

        createProductTable(objects, productID)
    });

});

function createProductTable(list, selection)
{
    for (let i = 0; i < list.length; i++)
    {
        if (selection == list[i].ProductID)
        {
            insertTableData(list[i]);
        }
    }
}

function insertTableData(list)
{
    let tableData = "<tr><td>Product Id</td><td>" + list.ProductID + 
    "</td></tr><tr><td>Product Name</td><td>" + list.ProductName + 
    "</td></tr><tr><td>Unit Price</td><td>" + Number(list.UnitPrice).toFixed(2) + 
    "</td></tr><tr><td>Units In Stock</td><td>" + Number(list.UnitsInStock) +
    "</td></tr><tr><td>Category Name</td><td>" + list.CategoryName + 
    "</td></tr><tr><td>Supplier</td><td>" + list.Supplier +
    "</td></tr><tr><td>Discontinued</td><td>" + list.Discontinued + "</td></tr>";

    if (list.Discontinued == "true")
    {
        $("tr:last-child").css("color" , "red");
    }
    
    $("#tableBody").append(tableData);
}