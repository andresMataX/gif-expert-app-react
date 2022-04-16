import React from 'react';
const { shallow } = require("enzyme");
const { GifGridItem } = require("../../components/GifGridItem");

describe('Pruebas en <GifGridItem />', () => {
    test('debe de mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifGridItem />);
        expect(wrapper).toMatchSnapshot();
    });
});