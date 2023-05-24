import { render } from '@testing-library/react';
import HomePage from '../pages/LoggedHomePage';

describe('HomePage', () => {
    it('should render correctly', () => {
        const { container } = render(<HomePage />);
        expect(container).toMatchSnapshot();
    });
    });