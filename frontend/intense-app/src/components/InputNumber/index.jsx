import { InputNumber } from 'antd';

const InputNumberElement = ({ getInputNumberValue }) => (
  <InputNumber min={1} max={100} defaultValue={1} onChange={(value) => getInputNumberValue(value)} changeOnWheel />
);
export default InputNumberElement;