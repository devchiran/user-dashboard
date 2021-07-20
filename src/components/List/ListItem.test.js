import { render } from '@testing-library/react';
import ListItem from './ListItem';

test('List item inner content is created', () => {
    const dummyUsersList = {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Leanne@gmail.com",
            };
    const { getByTestId } = render(<ListItem data={dummyUsersList} />);
    const listElement = getByTestId("user-list__btn");
    expect(listElement).toBeTruthy();
});
test('List item inner content is create', () => {
    const dummyUsersList = {
                "id": 1,
                "name": "Leanne",
                "username": "Bret",
                "email": "Leanne@gmail.com",
            };
    const { getByTestId } = render(<ListItem data={dummyUsersList} />);
    const nameElement = getByTestId("user-list__items-name");
    const usernameElement = getByTestId("user-list__items-username");
    const emailElement = getByTestId("user-list__items-email");
    expect(nameElement.textContent).toBe('Leanne');
    expect(usernameElement.textContent).toBe('Bret');
    expect(emailElement.textContent).toBe('Leanne@gmail.com');
});
