import React from 'react'
import { render } from 'react-dom'

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import GraphViewer from './GraphViewer'

import './index.scss'

render((
  <React.StrictMode>
    <Tabs defaultActiveKey="telegram">
      <Tab mountOnEnter className="position-relative" eventKey="telegram" title="Telegram">
        <GraphViewer gexfUrl="./gephi/telegram.gexf" />
      </Tab>
    </Tabs>
  </React.StrictMode>
), document.getElementById('root'))
