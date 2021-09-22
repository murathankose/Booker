import React from 'react';
import { Button } from 'react-bootstrap';

type PopupProps = {

}
export const PopupButton:React.FC<PopupProps>  = ({ children, ...props }) => {
  return (
    <Button className="m-md-2" {...props}>
      {children}
    </Button>
  );
};
