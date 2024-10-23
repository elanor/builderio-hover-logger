# Upnova Cart Hover Effect Feature

## Overview

This project implements a hover effect for a custom cart slider built using the `Builder.io` template, as part of a Shopify store setup. The cart slider is dynamically generated, and certain elements within the slider are customizable using Builder.io settings. This project enhances the cart slider by highlighting specific elements related to certain template settings when they are hovered over and logs these actions to the console.

## Latest Modification:

- `Dynamic Builder Response`: The builder response is now dynamically fetched from window.upez__cart_settings, making the implementation adaptable without hardcoded builder-id attributes.
- `Simplified Tracking`: The code now only tracks the cart_width setting, which applies the hover effect to elements inside the cart that match the specified width.

## Features

- `Hover Effect`: A blue border (2px) is applied to elements when hovered, highlighting elements that match the cart_width setting.
- `Console Logging`: Logs the matched cart_width setting of elements that are hovered, making it easy to track user interaction with specific cart components.
- `Dynamic Matching`: Elements matching the cart_width setting are dynamically detected and monitored for hover interactions.

## Key Points:

- `MutationObserver`: The script uses a MutationObserver to detect when new elements are added to the DOM and applies hover listeners to elements that match the specified cart_width setting dynamically fetched from `window.upez__cart_settings`.
- Real-Time Builder Response: The builder response is no longer hardcoded but dynamically fetched to ensure the script works with updated `Builder.io` settings at runtime.
- Selective Hover Effect: The hover effect is applied strictly to the children of the cart that match the cart_width setting, rather than the entire cart container.
- Logging Matched Settings: Logs the cart_width setting when the hover effect is applied, enhancing debugging and ensuring correct elements are targeted.

## Usage

### How to Test:

URL for Testing: The provided URL for testing this behavior in the console: `https://upez-frontend.vercel.app/api/internal-preview-cart?domain=dreamrecovery.io`

**Steps:**
- Open the browser's developer tools.
- Navigate to the console tab.
- Paste the provided JavaScript code into the console.
- Press Enter to run the script.
- Hover over any element in the cart. If the element matches the cart_width setting, it will be highlighted with a blue border and - logged to the console.

## Elements Tracked:

Cart Width (cart_width): Elements within the cart slider that match the dynamically fetched cart_width from `Builder.io` settings.

## Conclusion

This implementation provides a dynamic hover effect for specific cart elements in the UPEZ cart slider using the Builder.io template. The combination of a MutationObserver and real-time Builder.io settings ensures that even dynamically added elements receive the hover effect. By dynamically fetching the builder response and focusing on the cart_width setting, the script adapts to runtime changes, enhancing user interaction tracking and debugging capabilities.