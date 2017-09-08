import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { Selection } from '../components/Selection';

describe('Selection Component Snapshot', () => {

    it('displays correct properties', () => {
        const wrapper = shallow(<Selection />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
