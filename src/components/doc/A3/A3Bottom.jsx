import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useChangeCheckbox from '../../../hooks/useChangeCheckbox';
import useChangeD1 from '../../../hooks/useChangeD1';

const BottomBox = styled.div`
  margin-bottom: 15px;
  border: 2px solid #000;

  input {
    border: 1px solid #000;
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }

  > .top-title {
    padding: 5px;
    border-bottom: 1px solid #000;
    font-weight: 900;
  }

  > .top-description {
    font-size: 14px;

    table {
      width: 100%;
      border-collapse: collapse;

      thead {
        tr {
          border-bottom: 1px solid #000;
        }
      }
      tbody {
        td:first-child {
          width: 25px;
        }
      }

      tr {
        border-right: 0;
        border-left: 0;

        td {
          padding: 10px 0;
          border-right: 1px solid #000;
          border-bottom: 1px solid #000;
          text-align: center;
        }

        &:last-child {
          td {
            border-bottom: 0;
          }
        }

        td:last-child {
          border-right: 0;
        }
      }
    }
  }
`;

const A3Bottom = () => {
  const D2 = useSelector(state => state.docsInput.D2);
  
  const onChangeCheckbox = useChangeCheckbox();
  const onChangeText = useChangeD1();

  return (
    <>
    {D2 && (
        <BottomBox>
        <p className='top-title'>Description of Working System</p>
        <div className='top-description'>
          <table>
            <thead>
              <tr>
                <td colSpan='2'>Description of Inspection / Tests</td>
                <td>Carried out</td>
                <td>Not carried</td>
                <td>Remark</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>System secured</td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="0" name="CarriedOut" checked={!!D2[0].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="0" name="NotCarried" checked={!!D2[0].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="0" name="Remark" value={D2[0].Remark} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>2</td>
                <td>Foam liquid tank visually inspected and breather valve checked</td>
                <td>
                <input type='checkbox' data-form="D2" data-key="1" name="CarriedOut" checked={!!D2[1].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                <input type='checkbox' data-form="D2" data-key="1" name="NotCarried" checked={!!D2[1].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="1" name="Remark" value={D2[1].Remark} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>3</td>
                <td>Foam concentrate content and liquid level indicator inspected / checked</td>
                <td>
                <input type='checkbox' data-form="D2" data-key="2" name="CarriedOut" checked={!!D2[2].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                <input type='checkbox' data-form="D2" data-key="2" name="NotCarried" checked={!!D2[2].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="2" name="Remark" value={D2[2].Remark} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>4</td>
                <td>Distribution lines and nozzles/monitors visually inspected</td>
                <td>
                <input type='checkbox' data-form="D2" data-key="3" name="CarriedOut" checked={!!D2[3].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                <input type='checkbox' data-form="D2" data-key="3" name="NotCarried" checked={!!D2[3].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="3" name="Remark" value={D2[3].Remark} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>5</td>
                <td>All cabinet doors, hinges, locks and instruction on installation visually inspected</td>
                <td>
                <input type='checkbox' data-form="D2" data-key="4" name="CarriedOut" checked={!!D2[4].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                <input type='checkbox' data-form="D2" data-key="4" name="NotCarried" checked={!!D2[4].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="4" name="Remark" value={D2[4].Remark} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>6</td>
                <td>Foam mixing units inspect and correct setting of foam mix ratio checked</td>
                <td>
                <input type='checkbox' data-form="D2" data-key="5" name="CarriedOut" checked={!!D2[5].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                <input type='checkbox' data-form="D2" data-key="5" name="NotCarried" checked={!!D2[5].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="5" name="Remark" value={D2[5].Remark} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>7</td>
                <td>Control cabinet(s)/release stations inspected / function tested</td>
                <td>
                <input type='checkbox' data-form="D2" data-key="6" name="CarriedOut" checked={!!D2[6].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                <input type='checkbox' data-form="D2" data-key="6" name="NotCarried" checked={!!D2[6].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="6" name="Remark" value={D2[6].Remark} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>8</td>
                <td>Fan stop/fire dampers (if part of the system) inspected / tested</td>
                <td>
                <input type='checkbox' data-form="D2" data-key="7" name="CarriedOut" checked={!!D2[7].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                <input type='checkbox' data-form="D2" data-key="7" name="NotCarried" checked={!!D2[7].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="7" name="Remark" value={D2[7].Remark} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>9</td>
                <td>Foam tank valve(s) inspected / function tested</td>
                <td>
                <input type='checkbox' data-form="D2" data-key="8" name="CarriedOut" checked={!!D2[8].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                <input type='checkbox' data-form="D2" data-key="8" name="NotCarried" checked={!!D2[8].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="8" name="Remark" value={D2[8].Remark} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>10</td>
                <td>Warning alarms (Audio/visual) tested</td>
                <td>
                <input type='checkbox' data-form="D2" data-key="9" name="CarriedOut" checked={!!D2[9].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                <input type='checkbox' data-form="D2" data-key="9" name="NotCarried" checked={!!D2[9].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="9" name="Remark" value={D2[9].Remark} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>11</td>
                <td>Pressure switches and gauges visually inspected / function tested</td>
                <td>
                <input type='checkbox' data-form="D2" data-key="10" name="CarriedOut" checked={!!D2[10].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                <input type='checkbox' data-form="D2" data-key="10" name="NotCarried" checked={!!D2[10].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="10" name="Remark" value={D2[10].Remark} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>12</td>
                <td>Foam pump(s) – tested for correct rotation and pressure</td>
                <td>
                <input type='checkbox' data-form="D2" data-key="11" name="CarriedOut" checked={!!D2[11].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                <input type='checkbox' data-form="D2" data-key="11" name="NotCarried" checked={!!D2[11].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="11" name="Remark" value={D2[11].Remark} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>13</td>
                <td>System ran through test line. Flushed and re-set</td>
                <td>
                <input type='checkbox' data-form="D2" data-key="12" name="CarriedOut" checked={!!D2[12].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                <input type='checkbox' data-form="D2" data-key="12" name="NotCarried" checked={!!D2[12].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="12" name="Remark" value={D2[12].Remark} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>14</td>
                <td>Foam pump(s) including relief/overflow/de-airing valve inspected / function tested</td>
                <td>
                <input type='checkbox' data-form="D2" data-key="13" name="CarriedOut" checked={!!D2[13].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                <input type='checkbox' data-form="D2" data-key="13" name="NotCarried" checked={!!D2[13].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="13" name="Remark" value={D2[13].Remark} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>15</td>
                <td>Selection valves visually inspected and verified correct position / function tested</td>
                <td>
                <input type='checkbox' data-form="D2" data-key="14" name="CarriedOut" checked={!!D2[14].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                <input type='checkbox' data-form="D2" data-key="14" name="NotCarried" checked={!!D2[14].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="14" name="Remark" value={D2[14].Remark} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>16</td>
                <td>Control valve overhaul inspection.</td>
                <td>
                <input type='checkbox' data-form="D2" data-key="15" name="CarriedOut" checked={!!D2[15].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                <input type='checkbox' data-form="D2" data-key="15" name="NotCarried" checked={!!D2[15].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="15" name="Remark" value={D2[15].Remark} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>17</td>
                <td>Foam concentrate sample periodical test arranged according to Foam Test Service Report</td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="16" name="CarriedOut" checked={!!D2[16].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td colSpan='2'>ATTACH</td>
              </tr>
  
              <tr>
                <td>18</td>
                <td>System reconn, sealed, inspection date labels attached and system put back in servicet</td>
                <td>
                <input type='checkbox' data-form="D2" data-key="17" name="CarriedOut" checked={!!D2[17].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                <input type='checkbox' data-form="D2" data-key="17" name="NotCarried" checked={!!D2[17].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="17" name="Remark" value={D2[17].Remark} onChange={onChangeText}/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </BottomBox>
    )}
    </>
    
  );
};

export default A3Bottom;
