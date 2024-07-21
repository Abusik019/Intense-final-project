import React from "react";
import { Pagination } from "antd";

const PaginationItem = ({ current, pageSize, total, onChange }) => (
    <Pagination 
        current={current} 
        pageSize={pageSize} 
        total={total} 
        onChange={onChange} 
    />
);

export default PaginationItem;
