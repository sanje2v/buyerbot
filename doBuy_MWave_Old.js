document.body.style.border = "5px solid red";


//const SKU = 44994; // Gigabyte vision 3080Ti
const SKU = 37764; // MSI GF63 for testing    
    
function doBuy(event) {
    window.document.removeEventListener('DOMContentLoaded', doBuy);
    console.log('DOM fully loaded and parsed');
    
    // Check if add to cart is there
    buttonAddToCart = $("button:contains('Add to Cart')");
    if (buttonAddToCart.length == 0) {
        console.log('No able to find add to cart button. Reloading page...');
        window.location.reload(true);
        return;
    }
    else {
        console.log('Found add to cart button!');
    }
    
    try {
        console.log(`Calling AddToCart() for SKU: ${SKU}...`);
        miniBasket = window.document.getElementsByClassName('miniBasket')[0];
        var observer = new MutationObserver(function() {
            if (miniBasket.style.display === 'block') {
                observer.disconnect();
                console.log("miniBasket shown, checking out...");
                window.location.href = "https://mwave.com.au/checkout"
            }
        });
        observer.observe(miniBasket, { attributes: true, childList: false });

        var addToCartForm = window.document.getElementById(`AddToCart_2${SKU}`);
        console.log(addToCartForm);
        addToCartForm.addEventListener('submit', function(event) { event.preventDefault(); });
        //addToCartForm.submit();
        console.log('ok');
    }
    catch(err) {
        console.log('Exception while add to cart:');
        console.log(err.message);
        return;
    }
}

if (window.document.readyState !== 'loading') {
    doBuy(null);
} else {
    window.document.addEventListener('DOMContentLoaded', doBuy);
}