function applyHoverEffectAndLogHoveredActions() {
    const builderResponse = {
        settings: [
            {
                id: "cart_width", 
                label: "Cart Width"
            },
            {
                id: "cart_inner_background",  
                label: "Cart Inner Background"
            },
            {
                id: "backdrop_color",  
                label: "Backdrop Color"
            }
        ]
    };

    function applyHoverAndLog(settingId) {
        const elements = document.querySelectorAll(`[data-setting-id='${settingId}']`);

        elements.forEach(element => {
            console.log(`Element found with setting ID: ${settingId}`);

            element.addEventListener("mouseenter", () => {
                element.style.border = "5px solid blue";  
                console.log(`Hovered setting id: ${settingId}`);
            });

            element.addEventListener("mouseleave", () => {
                element.style.border = "none";  
            });
        });

        if (elements.length === 0) {
            console.log(`No element found with setting ID: ${settingId}`);
        }
    }

    builderResponse.settings.forEach((setting) => {
        if (setting.id) {
            applyHoverAndLog(setting.id);
        }
    });

    console.log("Hover effect applied to elements based on template settings.");
}

applyHoverEffectAndLogHoveredActions();
