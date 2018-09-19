import React from 'react';
import Auxi from '../../hoc/Auxi';
import './layout.scss';

const layout = (props) => (
  <Auxi>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="content">
      {props.children}
    </main>
  </Auxi>
)

export default layout