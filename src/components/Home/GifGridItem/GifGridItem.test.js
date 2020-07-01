import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from './GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

  const title = 'Mi título';
  const url = 'https://localhost:3000'

  test('Debe mostrar el componente correctamente', () => {

    const wrapper = shallow(<GifGridItem title={title} url={url} />)
    expect(wrapper).toMatchSnapshot();

  })

})
