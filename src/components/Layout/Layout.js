import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const layout = (props) =>(
    <Aux>
        <Toolbar></Toolbar>
        <div>
            SideDrawer, Backdrop
        </div>
        <main className = {classes.Content}>
            {props.children}
        </main>
    </Aux>
);


export default layout;