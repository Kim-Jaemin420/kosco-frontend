import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SaveModal from "../../components/common/SaveModal";
import CompleteModal from "../../components/common/CompleteModal";
import OX2Form from "../../components/doc/OX2/OX2Form";
import useStorage from "../../hooks/useStorage";
import { addInitialState, addInitialStateD2, changeFieldD1, changeField, deleteInitialState, deleteInitialStateD2, storage, changeTextArea, changeDatePicker } from "../../redux/modules/ox2";

const OX2Container = () => {
  const dispatch = useDispatch();
  const [units, setUnits] = useState([]);
  const state = useSelector(state => state.ox2);
  const { visible, showModal, commVisible, showCommModal, hideModal } = useStorage()
  const datas = [
    'MASKS CHECKED',
    'BREATHING VALVE CHECKED',
    'PRESSURE REGULATOR CHECKED',
    'SUPPLY HOSE CONNECTION CHECKED',
    'OXYGEN INHALER CHECKED',
    'DEVICE WHIT FUNCTION TEST',
    'SERVICE LABEL PUT ON DEVICE',
    'DELETE',
  ];

  const nextId = useRef(2);
  const [lists, setLists] = useState([
    {
      id: 0,
    },
  ]);
  const nextIdD2 = useRef(1);
  const [D2Lists, setD2Lists] = useState([
    {
      id: 0,
    },
  ])
   
  const onInsert = useCallback(
    () => {
      setLists(lists.concat({
        id: nextId.current = lists.length ? Math.max(...lists.map(list => list.id)) + 1 : 0
      }));
      dispatch(
        addInitialState(nextId.current = lists.length ? Math.max(...lists.map(list => list.id)) + 1 : 0))
    },
    [dispatch, lists]
  );

  const onInsertD2 = useCallback(
    () => {
      setD2Lists(D2Lists.concat({
        id: nextIdD2.current = D2Lists.length ? Math.max(...D2Lists.map(list => list.id)) + 1 : 0
      }));
      dispatch(
        addInitialStateD2(nextIdD2.current = D2Lists.length ? Math.max(...D2Lists.map(list => list.id)) + 1 : 0))
    },
    [D2Lists, dispatch]
  );

  const onRemove = useCallback(
    id => {
      if (lists.length > 1) {
        setLists(lists.filter(list => list.id !== id));
        dispatch(
          deleteInitialState(...lists.filter(list => list.id === id))
        )
      }
    },
    [dispatch, lists],
  );

  const onRemoveD2 = useCallback(
    id => {
      if (D2Lists.length > 1) {
        setD2Lists(D2Lists.filter(list => list.id !== id));
        dispatch(
          deleteInitialStateD2(...D2Lists.filter(list => list.id === id))
        )
      }
    },
    [dispatch, D2Lists],
  );

  const onChangeD1 = ({ id, target }) => {
    const { name, checked } = target;
    dispatch(
      changeFieldD1({
        id,
        checked,
        name,
      })
    )
  }

  const onChange = ({ id, target }) => {
    const { value, name, dataset } = target;
    dispatch(
      changeField({
        name,
        id,
        value,
        dataset,
      })
    )
  }

  const onChangeTextArea = e => {
    const { value } = e.target;
    dispatch(
      changeTextArea(value)
    )
  }

  const onChangeDatePicker = ({ id, target }) => {
    const { name, value, form } = target;
    dispatch(
      changeDatePicker({
        name,
        id,
        value,
        form,
      })
    )
  }

  const onStorage = async ( e, form, path ) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/doc/${form}/inspection/${path}`, state, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}` },
        }
      );
      hideModal();
      console.log('res', res);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    dispatch(
      storage({
        RCVNO: localStorage.getItem('rcvNo'),
        VESSELNM: localStorage.getItem('shipNm'), 
      })
    )
  }, [dispatch])

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/checkedInfo`, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}` },
      });
      setUnits(res.data.data);
    })();
  }, []);

  return (
    <>
      {visible && (
        <SaveModal form="OX2" path="save" onStorage={onStorage} hideModal={hideModal}/>
      )}
      {commVisible && (
        <CompleteModal form="OX2" path="complete" onStorage={onStorage} hideModal={hideModal}/>
      )}
      <OX2Form
        units={units}
        onChangeD1={onChangeD1}
        onChange={onChange}
        onRemove={onRemove}
        onInsert={onInsert}
        lists={lists}
        D2Lists={D2Lists}
        onChangeTextArea={onChangeTextArea}
        datas={datas}
        onInsertD2={onInsertD2}
        onRemoveD2={onRemoveD2}
        onChangeDatePicker={onChangeDatePicker}
        showModal={showModal}
        showCommModal={showCommModal}
      />
    </>
  )
}

export default OX2Container;