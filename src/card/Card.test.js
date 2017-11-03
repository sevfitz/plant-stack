import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { Card } from './Card';


const description = 'English lavender is commonly grown as an ornamental plant. It is popular for its colourful flowers, its fragrance, and its ability to survive with low water consumption.';
const url = 'http://thegraphicsfairy.com/wp-content/uploads/2013/08/Lavender-Botanical-Printable-GraphicsFairysm.jpg';
const name = 'Lavender';
const genus = 'Lavandula';
const species = 'Angustifolia';

const testCard = { name, genus, species, description, url };
const testChoice = 'something';

describe('Card Component Test', () => {

    it('displays correct properties', () => {
        const wrapper = shallow(<Card card={testCard} choice={testChoice} />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
