import React, { useReducer } from 'react';

import Header from './components/header'
import Section from './components/section'
import FilterControls from './components/filterControls'
import Widget from './components/widget';
import FilterView from './components/filterView'
import GridView from './components/gridView'
import Footer from './components/footer'
import data from './data/tickets.json'

export const JiraContext = React.createContext();

const initialState = data.records;
const UserFilter = (state, action) => {
  const filtered = initialState.filter(data => action.includes(data.assignee));
  return (filtered.length > 0) ? filtered : initialState;
}

function App() {
  const [JiraData, dispatch] = useReducer(UserFilter, initialState);
  return (
    <div className="App">
      <Header></Header>
      <JiraContext.Provider value={{ JiraState: JiraData, filterDispatch: dispatch }}>
        <Section styles="bg-gray-50">
          <FilterControls></FilterControls>
        </Section>
        <Section styles="bg-gray-50 no-wrap-child">
          <Widget></Widget>
          <Widget></Widget>
          <Widget></Widget>
          <Widget></Widget>
        </Section>
        <Section styles="bg-gray-50">
          <FilterView></FilterView>
          <GridView></GridView>
        </Section>
      </JiraContext.Provider>
      <Footer></Footer>
    </div>
  );
}

export default App;
