function applyHoverEffectAndLogHoveredActions() {
    // Use actual template settings from the provided JSON and screenshots
    const builderResponse = {
        blocks: [
            {
                id: "builder-104bf03ab7241519dc9d982fc154da8",  // Example block for 'cart_inner_background'
                bindings: {
                    templateSetting: "cart_inner_background"  // Cart Inner Background setting
                }
            },
            {
                id: "builder-e756a38c7844eb588bf37494daf6fb",  // Example block for 'backdrop_color'
                bindings: {
                    templateSetting: "backdrop_color"  // Backdrop Color setting
                }
            }
        ]
    };

    // Function to apply hover effects and log hovered actions
    function applyHoverAndLog(block) {
        const element = document.querySelector(`[builder-id='${block.id}']`);

        if (element) {
            console.log(`Element found with builder-id=${block.id}`);

            // Add hover effect
            element.addEventListener("mouseenter", () => {
                element.style.border = "5px solid blue";  // Apply blue border on hover
                console.log(`Hovered setting id: ${block.bindings.templateSetting} of template id: ${block.id}`);
            });

            // Remove hover effect when the mouse leaves
            element.addEventListener("mouseleave", () => {
                element.style.border = "none";  // Remove border on mouse leave
            });
        } else {
            console.log(`Element with builder-id=${block.id} not found yet.`);
        }
    }

    // MutationObserver to watch for DOM changes and apply hover effect
    const observer = new MutationObserver((mutationsList, observer) => {
        builderResponse.blocks.forEach((block) => {
            if (block.bindings && block.bindings.templateSetting) {
                applyHoverAndLog(block);
            }
        });
    });

    // Start observing changes in the DOM
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Log to indicate the observer has started
    console.log("MutationObserver started, waiting for elements...");
}

// Apply the hover effect and log hovered actions on elements with bindings
applyHoverEffectAndLogHoveredActions();
