import React from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import { useSwipeable } from "react-swipeable";

const SwipeableTabs = ({ selectedIndex, onSelect, children, tabsStyle, tabNames, tabListStlyle, tabStyle, selectedTabStyle }) => {
  const totalTabs = React.Children.count(children);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (selectedIndex < totalTabs - 1) {
        onSelect(selectedIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (selectedIndex > 0) {
        onSelect(selectedIndex - 1);
      }
    },
  });

  return (
    <div>
      <Tabs selectedIndex={selectedIndex} onSelect={onSelect} className={tabsStyle}>
        {tabNames.length > 0 && (
          <TabList className={tabListStlyle}>
            {tabNames.map((name, index) => (
              <Tab
                key={index}
                selectedClassName={selectedTabStyle}
                className={tabStyle}
              >
                {name}
              </Tab>
            ))}
          </TabList>
        )}
        <div {...handlers}>{React.Children.toArray(children)}</div>
      </Tabs>
    </div>
  );
};

export default SwipeableTabs;
