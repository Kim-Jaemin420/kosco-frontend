import React from 'react';
import styled from 'styled-components';


const Button = styled.button `
    width: 87px;
    height: 32px;
    border-color: #1890ff;
    background: #1890ff;
    font-size: 14px;
    border-style: none;
    color: #fff;
`;

const DynInspectionCompleteButton = ({showCommModal }) => {
  return (
      <Button type='submit' onClick={showCommModal}>검사 완료</Button>
  );
};

export default DynInspectionCompleteButton;
