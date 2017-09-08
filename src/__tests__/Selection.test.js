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


// describe('Choice Component Test', () => {

//     it('displays correct properties', () => {
//         const wrapper = shallow(<Choice genus='' species='' />);
//         expect(toJSON(wrapper)).toMatchSnapshot();
//     });
// });

// describe('Card Component Test', () => {

//     it('displays correct properties', () => {
//         const wrapper = shallow(<Card name={name} genus={genus} species={species} description={description} url={url} />);
//         expect(toJSON(wrapper)).toMatchSnapshot();
//     });

// });