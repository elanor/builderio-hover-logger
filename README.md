# Hover Effect for UPEZ Cart Slider
## Task Overview

This task is focused on adding a hover effect and logging actions for elements in a UPEZ cart slider. The hover effect should highlight elements when the user hovers over them and log the hovered setting ID and the template ID to the console.
### Task Details

- Objective: When the user hovers over elements that have a builder-id and associated templateSetting, a 5px solid blue border should be applied around the element, and the following message should be logged in the console:

Hovered setting id: <setting_id> of template id: <template_id>

Network Response: The response includes cart elements loaded dynamically from a `Builder.io` template. These elements have unique builder-id values and are associated with specific settings via templateSetting.

URL for Testing: The provided URL for testing this behavior in the console:

`https://upez-frontend.vercel.app/api/internal-preview-cart?domain=dreamrecovery.io`

### Steps to Implement

- Add Hover Effect: A JavaScript function was created to apply a hover effect to elements in the UPEZ cart slider that contain a specific builder-id and templateSetting.

- Log Actions: When an element is hovered, the setting ID (templateSetting) and template ID (builder-id) should be logged to the browser's console.

- Use of MutationObserver: Since the cart slider content is dynamically loaded, a MutationObserver was used to monitor changes in the DOM and apply the hover effect when the relevant elements are added.

### Console Testing

To test the script, the following code should be pasted into the browser's Console after loading the given URL.

## Issues Encountered

Despite multiple attempts and testing using the provided network response and builder-id values, the hover effect does not work as expected. The script attempts to find elements by their builder-id, but the necessary DOM elements do not appear or are not being detected.
Potential Reasons for the Hover Effect Not Working:

- Elements not being rendered: The builder-id elements might not be present in the DOM at the time the script is executed.
- Iframe or cross-origin restrictions: If the elements are inside iframes, accessing them might be restricted by cross-origin policies, preventing the script from applying the hover effect.
- Dynamic Loading: The elements may be loaded after a delay or based on user interaction, which may require more advanced handling or debugging.

## Conclusion

The hover effect was designed as per the task, but due to the dynamic nature of the UPEZ cart slider and possibly the absence of the expected elements in the DOM, the desired behavior could not be fully achieved. Further investigation into how the elements are loaded and structured might be required.