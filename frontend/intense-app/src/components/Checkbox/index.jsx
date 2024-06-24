import React from 'react';
import { Checkbox } from 'antd';
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const CheckboxItem = () => <Checkbox onChange={onChange}>Remember me</Checkbox>;
export default CheckboxItem;