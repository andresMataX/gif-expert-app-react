import React from 'react';
const { shallow } = require("enzyme");
const { GifGridItem } = require("../../components/GifGridItem");

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';

    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.props().src);
        // console.log(img.prop('src'));

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });
});