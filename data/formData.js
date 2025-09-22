const validFormData = { 
    firstName: 'Test', 
    lastName: 'User', 
    email: 'TestUser@gmail.com', 
    phone1: '1231112233', 
    phone2: '1231112233', 
    addressLine1: 'Test street 123', 
    city: 'Calgary', 
    province: 'AB', 
    postalCode: 'T3H4W8' 
};

const validFormDataCyrillic = {
    ...validFormData,
  firstName: 'Тест',
  lastName: 'Тест',
  
};

const spacePostalCode = {
  ...validFormData,
  postalCode: 'T3H 4W8'
};

const invalidEmail = {
  ...validFormData,
  email: 'TestUser.@gmail.com'
};

async function fillAndSubmitForm(page, data = validFormData) {
  await page.fill('#firstName', data.firstName);
  await page.fill('#lastName', data.lastName);
  await page.fill('#email', data.email);
  await page.fill('#phone1', data.phone1);
  await page.fill('#phone2', data.phone2);
  await page.fill('#addressLine1', data.addressLine1);
  await page.fill('#city', data.city);
  await page.selectOption('select[name="province"]', data.province);
  await page.fill('#postalCode', data.postalCode);
  await page.click("button[type='submit']");
};

export { fillAndSubmitForm, validFormData, spacePostalCode, invalidEmail, validFormDataCyrillic};