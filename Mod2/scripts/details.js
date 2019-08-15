$(function ()
{
    let urlParams = new URLSearchParams(location.search);
    let productID = urlParams.get("productid");

    let objects;
    $.getJSON("data/products.json", function (data)
    {
        objects = data.Items;

        createProductTable(objects, productID);
    });

    $("#edit").on("click", function()
    { 
        $("#edit, #cancel2").hide();
        $("#update, #cancel").toggleClass("visible");
        $("input").prop("disabled", false);
    });

    $("#update").on("click", function()
    {
        alert("I haven't figured out how to do that yet, but I will.");
        $("#edit, #cancel2").show();
        $("#update, #cancel").toggleClass("visible");
        $("input").prop("disabled", true);
    });
});

function createProductTable(list, selection)
{
    for (let i = 0; i < list.length; i++)
    {
        if (selection == list[i].ProductID)
        {
            insertTableData(list[i]);

            if (list[i].Discontinued == "true")
            {
                $("tr:contains(Discontinued) input").css({color: "red"});
            }
        }
    }
}

function insertTableData(list)
{
    let tableData = '<tr><td>Product Id</td><td>' + list.ProductID +
        '</td></tr><tr><td>Product Name</td><td><input id="productName" name="productName" value="'
        + list.ProductName +
        '" disabled></td></tr><tr><td>Unit Price</td><td><input id="unitPrice" name="unitPrice" value="'
        + Number(list.UnitPrice).toFixed(2) +
        '" disabled></td></tr><tr><td>Units In Stock</td><td><input id="unitsInStock" name="unitInStock" value="'
        + Number(list.UnitsInStock) +
        '" disabled></td></tr><tr><td>Category Name</td><td><input id="categoryName" name="categoryName" value="'
        + list.CategoryName +
        '" disabled></td></tr><tr><td>Supplier</td><td><input id="supplier" name="supplier" value="'
        + list.Supplier +
        '" disabled></td></tr><tr><td>Discontinued</td><td><input id="discontinued" name="discontinued" value="'
        + list.Discontinued +
        '" disabled></td></tr>';

    $("#tableBody").append(tableData);
}