import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import F2Container from '../../containers/doc/F2Container';

const F2 = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <DocsHeader docDesc="PILOT CYLINDER SPECIFICATION" />
      <F2Container />
    </AppWrapper>
  );
};

export default F2;
