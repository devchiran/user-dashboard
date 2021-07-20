import { render } from '@testing-library/react';
import List from './List';

test('List is created', () => {
    const dummyUsersList = [];
    const { getByTestId } = render(<List items={dummyUsersList} />);
    const listElement = getByTestId("user-list");
    expect(listElement).toBeTruthy();
});
test('Empty list info is showing', () => {
    const dummyUsersList = [];
    const { getByTestId } = render(<List items={dummyUsersList} />);
    const infoElement = getByTestId("user-list__info");
    expect(infoElement).toBeTruthy();
});
test('Empty list message', () => {
    const dummyUsersList = [];
    const { getByTestId } = render(<List items={dummyUsersList} />);
    const infoElement = getByTestId("user-list__info");
    expect(infoElement.textContent).toBe("No User Found");
});
test('List items are getting created', () => {
    const dummyUsersList = [{
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
    }, {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv"
    }];
    const { getAllByTestId } = render(<List items={dummyUsersList} />);
    const listElements = getAllByTestId("user-list__item");
    expect(listElements).toHaveLength(2);
});
