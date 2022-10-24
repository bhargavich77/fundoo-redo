import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Signin from '../../pagesfundo/signIn/signin'
import Signup from '../../pagesfundo/signUp/signup'
import Dashboard from '../../pagesfundo/Dashboard/Dashboard'
import header from '../header/header';
import Takenoteone from '../takenoteone/takenoteone';
import Takenotetwo from '../takenotetwo/takenotetwo';
import Takenotethree from '../takenotethree/takenotethree';

function Router() {
  return (
    <div>
        <BrowserRouter >
                <Switch>
                    <Route exact path="/" component={Signin} />
                    <Route path="/SignUp" component={Signup} />
                    <Route path="/Dashboard" component={Dashboard} />
                    <Route path="/Header" component={header} />
                    <Route path="/NoteOne" component={Takenoteone} />
                    <Route path="/NoteTwo" component={Takenotetwo} />
                    <Route path="/NoteThree" component={Takenotethree} />

                 </Switch>
        </BrowserRouter>
    </div>
  )
}

export default Router