import React from 'react';
import { render } from '@testing-library/react';
import CoverArt from '../components/CoverArt';

describe('CoverArt Component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<CoverArt />);
    expect(asFragment()).toMatchSnapshot();
  });
});
