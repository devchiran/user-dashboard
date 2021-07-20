import { render } from '@testing-library/react';
import Details from './Details';

let dummyDetails = {};
beforeEach(() => {
    dummyDetails = {
        "id": 1,
        "name": "Leanne",
        "username": "Bret",
        "email": "Leanne@gmail.com",
        "address": {
          "street": "Peter st",
          "suite": "Apt. 556",
          "city": "Vancouver",
          "zipcode": "A9B8C7"
        },
        "phone": "1-999-888-7777",
        "website": "bret.org",
        "company": {
          "name": "Romag",
          "catchPhrase": "Multi-layered",
          "bs": "real-time markets"
        }
    };
})

test('Contact details are created', () => {
    const { getByTestId } = render(<Details data={dummyDetails} />);
    const titleElement = getByTestId("contact__title");
    const usernameElement = getByTestId("contact__username");
    const emailElement = getByTestId("contact__email");
    const phoneElement = getByTestId("contact__phone");
    const websiteElement = getByTestId("contact__website");
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent).toBe('Contact Info');
    expect(usernameElement.textContent).toBe('Username: Bret');
    expect(emailElement.textContent).toBe('Email: Leanne@gmail.com');
    expect(phoneElement.textContent).toBe('Phone: 1-999-888-7777');
    expect(websiteElement.textContent).toBe('Website: bret.org');
});
test('Address details are created', () => {
    const { getByTestId } = render(<Details data={dummyDetails} />);
    const titleElement = getByTestId("address__title");
    const detailsElement = getByTestId("address__details");
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent).toBe('Address');
    expect(detailsElement.textContent).toBe('Apt. 556 Peter st, Vancouver, A9B8C7');
});
test('Company details are created', () => {
    const { getByTestId } = render(<Details data={dummyDetails} />);
    const titleElement = getByTestId("company__title");
    const nameElement = getByTestId("company__name");
    const bsElement = getByTestId("company__bs");
    const phraseElement = getByTestId("company__phrase");
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent).toBe('Company');
    expect(nameElement.textContent).toBe('Romag');
    expect(bsElement.textContent).toBe('real-time markets');
    expect(phraseElement.textContent).toBe('"Multi-layered"');
});
