# Task: Move image below informational text

## Steps to complete:
1. [x] Move the `.box` div containing the image from above to below the `.content-container` div in index.html
2. [x] Verify the layout looks correct
3. [x] Make any necessary CSS adjustments if needed

## Current structure (before):
- header
- .box (image)
- .content-container (text)
- footer

## Target structure (after):
- header
- .content-container (text)
- .box (image)
- footer

## Changes made:
- Successfully moved the image container below the text content in index.html
- Updated CSS to center the image:
  - Changed `.box` from `display: inline-block` to `display: block`
  - Changed `.box` margin from `margin: 20px` to `margin: 20px auto` (centers horizontally)
  - Removed `float: right` from `.box img` to prevent unwanted floating behavior
