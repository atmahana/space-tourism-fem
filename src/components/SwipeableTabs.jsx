import React from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";

const SwipeableTabs = ({
  children,
  tabsStyle,
  tabNames,
  tabListStlyle,
  tabStyle,
  selectedTabStyle,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const totalTabs = tabNames.length;
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (selectedIndex < totalTabs - 1) {
        setSelectedIndex(selectedIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      }
    },
  });

  const next = () => setSelectedIndex((selectedIndex) => (selectedIndex === children.length - 1 ? 0 : selectedIndex + 1))

  React.useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div>
      <Tabs className={tabsStyle} selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)}>
        <TabList className={tabListStlyle}>
          {tabNames.map((name, index) => (
            <Tab className={tabStyle} selectedClassName={selectedTabStyle} key={index}>{name}</Tab>
          ))}
        </TabList>
        <div {...handlers}>
          {React.Children.toArray(children).map((child, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {child}
            </motion.div>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default SwipeableTabs;
