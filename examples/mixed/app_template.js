import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Tab, Tabs, TabList, TabPanel } from '../../src/main';
import { MixTab, MixTabs} from '../../src/main';

Modal.setAppElement(document.getElementById('example'));
Modal.injectCSS();

const App = React.createClass({
  getInitialState() {
    return {
      isModalOpen: false,
      selectedIndex: -1,
      tabs: [
        { label: '1', content: 'This is foo' },
        { label: 'Bar', content: 'This is bar' },
        { label: 'Baz', content: 'This is baz' },
        { label: 'Zap', content: 'This is zap' },
      ],
    };
  },

  render() {
    return (
      <div style={{ padding: 50 }}>
        <p>
          <button onClick={this.addTab}>+ Add</button>
        </p>
        <Tabs selectedIndex={this.state.selectedIndex}>
          <TabList>
            {this.state.tabs.map((tab, i) => {
              return (
                <MixTab key={i}>
                  {tab.label} <a href="#" onClick={this.removeTab.bind(this, i)}>✕</a>
                </MixTab>
              );
            })}
          </TabList>
          {this.state.tabs.map((tab, i) => {
            return <TabPanel key={i}>{tab.content}</TabPanel>;
          })}
        </Tabs>
      </div>
    );
  },

  addTab() {
    const label = 'new label';
    const content = 'new content';

    this.state.tabs.push({
      label: label,
      content: content,
    });
    this.setState({
      selectedIndex: this.state.tabs.length - 1,
    });
  },

  removeTab(index) {
    this.state.tabs.splice(index, 1);
    this.forceUpdate();
  },
});

ReactDOM.render(<App />, document.getElementById('example'));


ReactDOM.render(

  <MixTabs selectedIndex='2'>
      <TabList>

            <MixTab key='1'>
                first
            </MixTab>

            <MixTab key='2'>
                second
            </MixTab>

      </TabList>

      <TabPanel key='1'> first content </TabPanel>
      <TabPanel key='2'> second content </TabPanel>

  </MixTabs>


  , document.getElementById('declarative'));
