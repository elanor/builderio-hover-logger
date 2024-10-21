function applyHoverEffectAndLogHoveredActions() {
    const builderResponse = {
        "blocks": [
            {
                "id": "builder-13ecfa353fab46e9b34fb041db6dad26",
                "bindings": {
                    "templateSetting": "someBindingExample"
                }
            },
            {
                "id": "builder-a73af2a72bef4a978f5fedab8e5181a2",
                "bindings": {
                    "templateSetting": "anotherBindingExample"
                }
            }
        ]
    };

    function applyHoverAndLog(block) {
        const element = document.querySelector(`[builder-id='${block.id}']`);

        if (element) {
            console.log(`Element found with builder-id=${block.id}`);

            element.addEventListener("mouseenter", () => {
                element.style.border = "5px solid blue";  
                console.log(`Hovered setting id: ${block.bindings.templateSetting} of template id: ${block.id}`);
            });

            element.addEventListener("mouseleave", () => {
                element.style.border = "none";  
            });
        } else {
            console.log(`Element with builder-id=${block.id} not found yet.`);
        }
    }

    const observer = new MutationObserver((mutationsList, observer) => {
        builderResponse.blocks.forEach((block) => {
            if (block.bindings && block.bindings.templateSetting) {
                applyHoverAndLog(block);
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    
    console.log("MutationObserver started, waiting for elements...");
}

applyHoverEffectAndLogHoveredActions();
