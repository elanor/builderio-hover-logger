# UPEZ Cart Hover Effect Feature

## Overview

This project implements a hover effect for a custom cart slider built using the `Builder.io` template, as part of a Shopify store setup. The cart slider is dynamically generated, and certain elements within the slider are customizable using Builder.io settings. This project enhances the cart slider by highlighting specific elements related to certain template settings when they are hovered over, and logs these actions to the console.

## Features

- Hover Effect: A blue border (2px) is applied to elements when hovered, highlighting elements that match specified builder-id attributes.
- Console Logging: Logs the builder-id of elements that are hovered, making it easy to track user interaction with specific cart components.
- Dynamic Matching: Elements with specific builder-ids are dynamically detected and monitored for hover interactions.

## Key Points:

- `MutationObserver`: The script uses a MutationObserver to detect when new elements are added to the DOM and applies hover listeners to elements that match the specified builder-id attributes.
- Delay in Initialization: The code waits for 2 seconds after the MutationObserver starts before scanning the entire document for existing matching elements.
- Element Matching: Only elements with specific builder-id attributes as defined in builderResponse.blocks are processed and highlighted when hovered.

## Usage

### How to Test:

- URL for Testing: The provided URL for testing this behavior in the console:
`https://upez-frontend.vercel.app/api/internal-preview-cart?domain=dreamrecovery.io`
- Open the browser's developer tools.
- Navigate to the console tab.
- Paste the provided JavaScript code into the console.
- Press Enter to run the script.
- Hover over any element in the cart. If the element matches one of the builder-ids specified in the script, it will be highlighted with a - blue border and logged to the console.

### Elements Tracked:

- Upsell Container Background Color (builder-id: builder-cbdecd8ca961477da2954da574dbdfa7)
- Reward Section Background Color (builder-id: builder-2cd16967f9cd4633bd436dd951a1a9d1)
- Primary Checkout Button (builder-id: builder-5631b68cd5e5484ab94fb29f29a4ecfd)

## Conclusion

This implementation provides a dynamic hover effect for specific cart elements in the UPEZ cart slider using the Builder.io template. The combination of MutationObserver and dynamic DOM scanning ensures that even dynamically added elements receive the hover effect, enhancing user interaction tracking and debugging capabilities.