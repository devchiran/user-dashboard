import { render } from '@testing-library/react';
import Posts from './Posts';

test('Posts is created', () => {
    const dummyPosts = [];
    const { getByTestId } = render(<Posts name="Test" posts={dummyPosts} />);
    const listElement = getByTestId("posts-list");
    expect(listElement).toBeTruthy();
});
test('Post items is created', () => {
    const dummyPosts = [{
        "userId": 1,
        "id": 1,
        "title": "User 1",
        "body": "Post 1"
    }];
    const { getByTestId, getAllByTestId } = render(<Posts name="Test" posts={dummyPosts} />);
    const listElement = getAllByTestId("posts-list__item");
    const titleElement = getByTestId("posts-list__title");
    const bodyElement = getByTestId("posts-list__body");
    expect(listElement).toHaveLength(1);
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent).toBe('User 1');
    expect(bodyElement).toBeTruthy();
    expect(bodyElement.textContent).toBe('Post 1');
});
test('List is created.', () => {
    const dummyPosts = [{
        "userId": 1,
        "id": 1,
        "title": "User 1-1",
        "body": "Post 1"
    }, {
        "userId": 1,
        "id": 2,
        "title": "User 1-2",
        "body": "Post 1-2"
    }];
    const { getAllByTestId } = render(<Posts name="Test" posts={dummyPosts} />);
    const listElement = getAllByTestId("posts-list__item");
    expect(listElement).toHaveLength(2);
});
