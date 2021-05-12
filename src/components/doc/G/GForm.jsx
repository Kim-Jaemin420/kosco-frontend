import React from 'react';
import styled from 'styled-components';
import Info from '../common/Info';
import DynTemporaryStorageButton from '../common/DynTemporaryStorageButton';
import DynInspectionCompleteButton from '../common/DynInspectionCompleteButton';
import GBottom from './GBottom';
import GBottom2 from './GBottom2';
import GBottom3 from './GBottom3';
import GTop from './GTop';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
  }`;
  
const GForm = ({ onChange, onRemove, onInsert, onChangeTextArea, showModal, showCommModal }) => {
  return (
    <form>
      <Info />
      <GTop />
      <GBottom onChange={onChange} onRemove={onRemove} onInsert={onInsert} />
      <GBottom2 onChangeTextArea={onChangeTextArea}/>
      <GBottom3 />
      <ButtonBox>
        <DynTemporaryStorageButton showModal={showModal}/>
        <DynInspectionCompleteButton showCommModal={showCommModal}/>
      </ButtonBox>
    </form>
  );
};

export default GForm;
