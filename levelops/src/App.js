import React, { useReducer } from 'react';

import Header from './components/header'
import Section from './components/section'
import MainContent from './components/layouts/mainContent'
import FilterControls from './components/filterControls'
import Widget from './components/widget';
import GraphView from './components/graphView'
import GridView from './components/gridView'
import Footer from './components/footer'
import data from './data/tickets.json'

export const JiraContext = React.createContext();

const initialState = data.records;

const UserFilter = (state, criteria) => {
  const criteriaMap = {};

  criteria.map(rule => {
    criteriaMap[rule.param] ? criteriaMap[rule.param].push(rule.value) : criteriaMap[rule.param] = [rule.value]
  });

  const filtered = initialState.filter(data => {
    let match = true;
    Object.keys(criteriaMap).map(rule => match = match && criteriaMap[rule].includes(data[rule]));
    return match;
  });

  return (filtered.length > 0) ? filtered : initialState;
}

function App() {
  const [JiraData, dispatch] = useReducer(UserFilter, initialState);
  return (
    <div className="App">
      <Header></Header>
      <JiraContext.Provider value={{ JiraState: JiraData, filterDispatch: dispatch }}>
        <MainContent>
          <div className="sidebar">
            <Section>
              <FilterControls></FilterControls>
            </Section>
          </div>
          <div className="main">
            <Section styles="flex-nowrap">
              <Widget param="status" value="TODO" color="gray"></Widget>
              <Widget param="status" value="IN PROGRESS" color="yellow"></Widget>
              <Widget param="status" value="DONE" color="green"></Widget>
            </Section>
            <Section styles="flex-wrap spacing-y">
              <GraphView></GraphView>
              <GridView></GridView>
            </Section>
          </div>
        </MainContent>
      </JiraContext.Provider>
      <Footer></Footer>
    </div>
  );
}

export default App;
