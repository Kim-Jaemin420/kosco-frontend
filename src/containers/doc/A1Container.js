import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import A1Form from '../../components/doc/A1/A1Form';
import useStorage from '../../hooks/useStorage';
import SaveModal from '../../components/common/SaveModal';
import CompleteModal from '../../components/common/CompleteModal';
import useTempModal from '../../hooks/useTempModal';
import useCompModal from '../../hooks/useCompModal';
import getItemData from '../../components/common/getItemData';

const A1Container = () => {
  const CERT_NO = JSON.parse(localStorage.getItem('certNo'));

  // const { tempVisible, showTempModal, hideTempModal } = useTempModal();

  // const [compVisible, showCompModal, hideCompModal] = useCompModal();

  const {
    onProductsDescription,
    onInspectionDescription,
    onStorage,
    visible,
    showModal,
    commVisible,
    showCommModal,
    hideModal,
    state,
    setState,
  } = useStorage({
    H: {
      RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
      VESSELNM: JSON.parse(localStorage.getItem('shipNm')) || '',
    },
    D1: {
      0: '',
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: '',
      10: '',
      11: '',
      12: '',
      13: '',
    },
    D2: {
      0: 1,
      1: 1,
      2: 1,
      3: 1,
      4: 1,
      5: 1,
      6: 1,
      7: 1,
      8: 1,
      9: 1,
      10: 1,
      11: 1,
      12: 1,
      13: 1,
      14: 1,
      15: 1,
      16: 1,
      17: 1,
      18: 1,
      19: 1,
      20: 1,
      21: 1,
    },
  });

  useEffect(() => {
    if (CERT_NO) {
      getItemData(CERT_NO, setState);
    }
  }, [CERT_NO, setState]);

  return (
    <>
      {visible && (
        <SaveModal
          form='A1'
          path='save'
          onStorage={onStorage}
          hideTempModal={hideModal}
        />
      )}
      {commVisible && (
        <CompleteModal
          form='A1'
          path='complete'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      <A1Form
        onProductsDescription={onProductsDescription}
        onInspectionDescription={onInspectionDescription}
        showModal={showModal}
        showCommModal={showCommModal}
        state={state}
      />
    </>
  );
};

export default A1Container;
