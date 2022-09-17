import React from 'react';

interface ErrorMessageProps {
  children: string
}

const Message = (props: ErrorMessageProps) => {
  const {children} = props

  return (
    <h3 className='title-font font-medium text-xl text-center'>
      {children}
    </h3>
  );
};

export default Message;
