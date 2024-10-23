function applyHoverEffectToElements() {
    const builderResponse = window.upez__cart_settings;
    if (!builderResponse) {
        console.warn("Builder response not found.");
        return;
    }

    console.log("Builder response found:", builderResponse);

    const settingsToTrack = ["cart_width"];

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

    const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1 && cartElement.contains(node)) {
                    applyHoverToChildren(node);
                }
            });
        });
    });

    observer.observe(cartElement, { childList: true, subtree: true });

    function applyHoverToChildren(parentElement) {
        const cartChildren = parentElement.querySelectorAll('div, span, img, button');
        cartChildren.forEach(child => {
            addHoverListeners(child);
        });
    }

    function addHoverListeners(element) {
        const style = window.getComputedStyle(element);

        if (elementMatchesBuilderSetting(element, style) || element.tagName === 'BUTTON') {
            element.addEventListener("mouseenter", () => {
                console.log("Hover effect applied to:", element);
                element.style.border = "2px solid blue"; 
            });

            element.addEventListener("mouseleave", () => {
                element.style.border = "none"; 
            });
        }
    }

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

    applyHoverToChildren(cartElement);

    console.log("MutationObserver started, waiting for elements...");
}

applyHoverEffectToElements();
