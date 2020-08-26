import { useState } from 'react';
import PropTypes from 'prop-types';

import MUITabs from '@material-ui/core/Tabs';
import MUITab from '@material-ui/core/Tab';

export const Tabs = ({ tabs, tabPanels }) => {
  const [currentTabIdx, setTabIdx] = useState(0);

  const handleChange = (event, newValue) => setTabIdx(newValue);

  return (
    <div className="d-flex flex-column">
      <MUITabs
        value={currentTabIdx}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs"
        classes={{
          root: 'mt-3 mb-2 border-bottom border-white-12',
        }}
      >
        {tabs.map(({ id, value }) => (
          <MUITab
            key={id}
            label={value}
            id={`scrollable-auto-tab-${id}`}
            aria-controls={`scrollable-auto-tabpanel-${id}`}
            classes={{
              root: 'text-mischka font-weight-bold',
              selected: 'text-blue',
            }}
          />
        ))}
      </MUITabs>
      {tabPanels.map(({ id, Component }) => (
        id === currentTabIdx && <Component key={id} />
      ))}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  })).isRequired,
  tabPanels: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
