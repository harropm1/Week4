"use strict";

//this calculates the price of a given ice cream by using a function with parameters

function getPrice(numberScoops, cupOrCone, hotFudge, sprinkles, whippedCream)
{
    let price = 0;

    if (numberScoops == 1)
    {
        price = 2.50;
    }
    else if (numberScoops == 2)
    {
        price = 3.75;
    }
    else
    {
        price = 5.00;
    }

    if (cupOrCone == "cone")
    {
        price += 1.00;
    } 

    if (hotFudge)
    {
        price += 1.25;
    }

    if (sprinkles)
    {
        price += .25;
    }

    if (whippedCream)
    {
        price += .75;
    }
    return price;
}


$(function ()
{

    $("input[name='cupConeRadio']").on("change", function()
    {
        if ($("input[name='cupConeRadio']:checked").val() == "cone")
        {
            $("#hotFudge").prop("checked", false)
            $("#hotFudge").hide();
        }
        else
        {
            $("#hotFudge").show();
        }
    });

    $("#calculateBtn").on("click", function ()
    {
        let price;

        price = getPrice($("#numberScoops").val(), $("input[name='cupConeRadio']:checked").val(), $("#hotFudge").prop("checked"), $("#sprinkles").prop("checked"), $("#whippedCream").prop("checked"));

        $("#priceDiv").fadeIn();
        $("#outputPrice").text(price.toFixed(2));
    });

    $("#messageArea").on("keyup", function()
    {
        let textEntered = $("#messageArea").val();
        let counter = (250 - textEntered.length);
        console.log(counter);
        $("#charCount").text(counter);
    });
});