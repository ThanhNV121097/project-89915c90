# Test Cases — Build character counter page

Risk level: low. Single static UI, no data loss or auth. Focus on core interaction, visible content, and browser-only behavior.

## Scenario: Page shows approved character counter layout
**Given** page is opened in fresh browser state
**When** page finishes rendering
**Then** one centered card appears on light grey background with heading, subline, textarea, live character count, Clear button, and privacy hint; count starts at 0 characters
**Check:** render_url

## Scenario: Typing updates count on every keystroke, including spaces
**Given** page is open and textarea is empty
**When** user types `a b` into textarea, one keystroke at a time
**Then** count changes after each keystroke and final visible count is `3 characters`
**Check:** interact_page

## Scenario: Clear empties input and resets count
**Given** page is open and textarea contains text with non-zero count
**When** user clicks Clear button
**Then** textarea becomes empty and visible count returns to `0 characters`
**Check:** interact_page

## Scenario: Page stays browser-only with no backend or database dependency
**Given** page is opened from the deployed URL
**When** page loads and is inspected for data source behavior
**Then** content renders without needing any API response or database record, and no backend-driven content is required for the page to function
**Check:** fetch_url
