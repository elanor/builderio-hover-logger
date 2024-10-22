function applyHoverEffectAndLogHoveredActions() {
    const builderResponse = {
        blocks: [
            {
                id: "builder-cbdecd8ca961477da2954da574dbdfa7",
                bindings: {
                    templateSetting: "upsell_container_bg_color"
                }
            },
            {
                id: "builder-2cd16967f9cd4633bd436dd951a1a9d1",
                bindings: {
                    templateSetting: "reward_section_background_color"
                }
            },
            {
                id: "builder-5631b68cd5e5484ab94fb29f29a4ecfd",  
                bindings: {
                    templateSetting: "primary_color"  
                }
            }
        ]
    };

    function applyHoverAndLog(element) {
        if (element.getAttribute('data-hover-listener-attached') === 'true') {
            return;
        }

        element.addEventListener("mouseenter", (event) => {
            const target = event.target;
            target.style.border = "2px solid blue";
            console.log(`Hovered over element with builder-id: ${element.getAttribute('builder-id')}`);
        });

        element.addEventListener("mouseleave", (event) => {
            const target = event.target;
            target.style.border = "none";
        });

        element.setAttribute('data-hover-listener-attached', 'true');
    }

    function checkIfElementMatchesSetting(setting, element) {
        const builderId = element.getAttribute('builder-id');
        if (builderId && builderId === setting.id) {
            return true;
        }
        return false;
    }

    const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    builderResponse.blocks.forEach((setting) => {
                        if (checkIfElementMatchesSetting(setting, node)) {
                            applyHoverAndLog(node);
                        }
                    });
                }
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    console.log("MutationObserver started, waiting for elements...");

    setTimeout(() => {
        document.querySelectorAll('*').forEach(element => {
            builderResponse.blocks.forEach((setting) => {
                if (checkIfElementMatchesSetting(setting, element)) {
                    applyHoverAndLog(element);
                }
            });
        });
    }, 2000);  
}

applyHoverEffectAndLogHoveredActions();
