import React, {ReactNode} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login, MainPage, Register } from './Pages';
interface IProps {
  children: ReactNode;
}
export const Routes = ({ children, ...props }:IProps) => {
  return (
    <Router {...props}>
      {children}
      <Route exact path="/" component={MainPage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Router>
  );
};
