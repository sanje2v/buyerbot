document.body.style.border = "5px solid yellow";

console.log("Finding and clicking on PayPal buy button...");


function findAndClickOnPayPalButton()
{
    // Find PayPal button and click on it
    var buttonPaypalSubmit = window.document.getElementById('payment-submit-btn');
    if (buttonPaypalSubmit == null) {
        setTimeout(findAndClickOnPayPalButton, 200);
        return;
    }
    
    console.log('Found PayPal button!');
	buttonPaypalSubmit.click();
	setTimeout(findAndClickOnPayPalButton, 1500);
}

findAndClickOnPayPalButton();