import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Tab, Tabs, TabList, TabPanel } from '../../src/main';
import { MixTab, MixTabs} from '../../src/main';

Modal.setAppElement(document.getElementById('example'));

ReactDOM.render(

  <MixTabs selectedIndex={2}>
      <TabList>
            <MixTab closable>
                first
            </MixTab>

            <MixTab invisible disabled>
               <input type="checkbox" />
            </MixTab>

             <MixTab>
                3: badge <span>(1)</span>
            </MixTab>
      </TabList>

      <TabPanel> first content </TabPanel>
      <TabPanel> second content </TabPanel>

  </MixTabs>


  , document.getElementById('declarative'));
