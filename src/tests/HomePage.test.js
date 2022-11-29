import { render } from '@testing-library/react';
import HomePage from '../pages/HomePage';

describe('HomePage', () => {
    it('should render correctly', () => {
        const { container } = render(<HomePage />);
        expect(container).toMatchSnapshot();
    });
    });