import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Tab, Tabs, TabList, TabPanel } from '../../src/main';
import { MixTab, MixTabs} from '../../src/main';

Modal.setAppElement(document.getElementById('example'));
Modal.injectCSS();

ReactDOM.render(

  <MixTabs selectedIndex='2'>
      <TabList>

            <MixTab closable>
                first
            </MixTab>

            <MixTab invisible>
                second
            </MixTab>

      </TabList>

      <TabPanel> first content </TabPanel>
      <TabPanel> second content </TabPanel>

  </MixTabs>


  , document.getElementById('declarative'));
