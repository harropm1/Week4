"use strict";

$(function() 
{
    $("#calculate").on("click", function()
    {
        let monthlyPayment = calculateMonthlyPayment(Number($("#loanAmount").val()), Number($("#interestRate").val()), Number($("#loanLength").val()));
            if (isNaN(monthlyPayment) == true || (monthlyPayment <= 0))
            {
                alert("One or more of your fields is not a positive number or has a non-numberic character.");
            }
            else
            {
                $("#monthlyPayment").text(monthlyPayment.toFixed(2));
            }

        let totalLoan = (($("#loanLength").val() * 12) * monthlyPayment);
            if (isNaN(totalLoan) == true || (totalLoan) <= 0)
            {
                alert("One or more of your fields is not a positive number or has a non-numberic character.");
            }
            else
            {
                $("#totalLoan").text(totalLoan.toFixed(2));
            }

        $("#monthlyPaymentDiv").fadeIn();
        $("#totalLoanDiv").fadeIn();
    });
});

function calculateMonthlyPayment(loanAmount, interestRate, loanLength)
{
    let monthlyPaymentAmount = (loanAmount * (interestRate/1200)) / (1 - (Math.pow((1 + interestRate / 1200), (-12 * loanLength))));
    return monthlyPaymentAmount;
}