import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { Selection } from './Selection';

describe('Selection Component Snapshot', () => {

    it('displays correct properties', () => {
        const choice = 'some choice';
        const onSelectGenus = function() {};
        const onSelectSpecies = function() {};
        const card = {};
        const wrapper = shallow(<Selection choice onSelectGenus onSelectSpecies card/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
