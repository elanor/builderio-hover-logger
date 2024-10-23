function applyHoverEffectToElements() {
    const builderResponse = window.upez__cart_settings;
    if (!builderResponse) {
        console.warn("Builder response not found.");
        return;
    }

    console.log("Builder response found:", builderResponse);

    const settingsToTrack = ["cart_width"];

    // Select the element with the `cart_width` attribute
    const cartElement = Array.from(document.querySelectorAll('*')).find(el => {
        const style = window.getComputedStyle(el);
        const computedWidth = parseFloat(style.width);
        return settingsToTrack.includes('cart_width') && computedWidth === parseFloat(builderResponse.cart_width);
    });

    if (!cartElement) {
        console.warn("Cart element with `cart_width` not found.");
        return;
    }

    console.log("Cart element with `cart_width` found:", cartElement);

    // Observer to detect added nodes (e.g., dynamically loaded content)
    const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1 && cartElement.contains(node)) {
                    // Apply hover effect only to new children inside the cart element
                    applyHoverToChildren(node);
                }
            });
        });
    });

    observer.observe(cartElement, { childList: true, subtree: true });

    // Function to apply hover effect to all children of the cart element
    function applyHoverToChildren(parentElement) {
        // Target specific elements inside the cart (including the payment buttons)
        const cartChildren = parentElement.querySelectorAll('div, span, img, button, .shopify-payment-button, .amazon-pay-button, .paypal-button');
        cartChildren.forEach(child => {
            addHoverListeners(child);
        });
    }

    // Function to add hover listeners
    function addHoverListeners(element) {
        const style = window.getComputedStyle(element);

        if (elementMatchesBuilderSetting(element, style) || element.tagName === 'BUTTON') {
            element.addEventListener("mouseenter", () => {
                console.log("Hover effect applied to:", element);
                element.style.border = "2px solid blue"; // Change border on hover
            });

            element.addEventListener("mouseleave", () => {
                element.style.border = "none"; // Reset border on hover out
            });
        }
    }

    // Function to check if element matches builder settings
    function elementMatchesBuilderSetting(element, style) {
        return settingsToTrack.some(settingKey => {
            const settingValue = builderResponse[settingKey];
            switch (settingKey) {
                case 'cart_width':
                    const computedWidth = parseFloat(style.width);
                    return computedWidth === parseFloat(settingValue);
                default:
                    return false;
            }
        });
    }

    // Initial application of hover effect to current cart children
    applyHoverToChildren(cartElement);

    console.log("MutationObserver started, waiting for elements...");
}

// Run the hover effect function
applyHoverEffectToElements();
