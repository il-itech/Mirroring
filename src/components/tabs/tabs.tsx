import { useState, FC, ChangeEvent } from 'react';

import MUITabs from '@material-ui/core/Tabs';
import MUITab from '@material-ui/core/Tab';

import { Props } from './types';

export const Tabs: FC<Props> = ({ tabs, tabPanels }) => {
  const [currentTabIdx, setTabIdx] = useState(0);

  const handleChange = (
    event: ChangeEvent<{}>,
    newValue: number,
  ) => setTabIdx(newValue);

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
