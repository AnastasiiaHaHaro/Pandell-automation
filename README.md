# Pandell-automation
Tech assessment
# Project Pandell - Playwright Form Tests

Automated tests for a web form using **Playwright Test**. Includes **positive** and **negative** scenarios.

---

## Project Structure
Project-Pandell/
├─ tests/
│ ├─ positive/ # Positive form tests
│ │ └─ formPositive.spec.js
│ ├─ negative/ # Negative form tests
│ │ └─ formNegative.spec.js
├─ data/
│ └─ formData.js # Test data and helper function
├─ package.json
├─ playwright.config.js
└─ README.md

---

## Setup

1. Node.js v18+ required.
2. Install dependencies:

npm install
npx playwright install

Running Tests

All tests:
npx playwright test

Positive tests only:
npx playwright test tests/positive/formPositive.spec.js

Negative tests only:
npx playwright test tests/negative/formNegative.spec.js

With GUI and debug:
npx playwright test tests/positive/formPositive.spec.js --headed --debug

Test Scenarios
Positive Tests

Form submission with valid data → Success message + correct values.
Form submission with Cyrillic names → Success message + Cyrillic values.

Negative Tests

Postal code with space → Validation error.
Invalid email → Validation error.

Test Data (from data/formData.js)
validFormData           // Standard valid form input
validFormDataCyrillic   // Cyrillic first and last name
spacePostalCode         // Postal code with space (invalid)
invalidEmail            // Invalid email format

Expected Output

Positive tests: "Saved" message with correct field values.
Negative tests: "Validation failed" with error details.

Author
Anastasiia Haharo




