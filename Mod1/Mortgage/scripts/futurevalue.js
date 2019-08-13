"use strict";

$(function () 
{
    $("#calculate").prop("disabled", true);
    $("input[type='text']:lt(3)").on("change", function ()
        {
            if(isNaN(Number($("#depositAmount").val())) || isNaN(Number($("#interestRate").val())) || isNaN(Number($("#loanLength").val())))
            {
                $("#calculate").prop("disabled", true);
            }
            else
            {
                $("#calculate").prop("disabled", false);
            }
    });
    $("#calculate").on("click", function ()
    {
        let futureValue = getFutureValue(Number($("#depositAmount").val()), Number($("#interestRate").val()), Number($("#loanLength").val()));
        if (isNaN(futureValue) == true || (futureValue) <= 0)
        {
            alert("One or more of your fields is not a positive number or has a non-numberic character.");
        }
        else
        {
            $("#futureValue").val(futureValue.toFixed(2));
        }

        let interestEarned = getInterestEarned(Number($("#depositAmount").val()), futureValue);
        if (isNaN(interestEarned) == true || (interestEarned) <= 0)
        {
            alert("One or more of your fields is not a positive number or has a non-numberic character.");
        }
        else
        {
            $("#interestEarned").val(interestEarned.toFixed(2));
        }
    });
    $("#depositAmount").focus()
});
function getFutureValue(depositAmount, interestRate, loanLength)
{
    let futureValue = depositAmount * (Math.pow((1 + (interestRate / 1200)), (loanLength * 12)));
    return futureValue;
}

/* Below is the calculation for the interest earned on the deposit */
function getInterestEarned(depositAmount, futureValue)
{
    let interestEarned = futureValue - depositAmount;
    return interestEarned;
}