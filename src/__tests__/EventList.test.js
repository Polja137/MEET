import React from 'react';
import Event from '../Event'; 
import { shallow } from 'enzyme';
import EventList from '../EventList';

describe('<EventList /> component', () => {
  test('render correct number of events', () => {
    const EventListWrapper = shallow(<EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]} />);
    expect(EventListWrapper.find(Event)).toHaveLength(4);
  });
});