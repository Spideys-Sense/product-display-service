import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ListWrapper = styled.h5`
  grid-area: 1 / 1 / 1 / 1;
  margin: 10px;
  bottom: 1px;
  border: 1px green dashed;
`;

export default function DepartmentList(props) {
  const { department } = props;
  return (
    <ListWrapper>
      {department}
    </ListWrapper>
  );
}

DepartmentList.propTypes = {
  department: PropTypes.string.isRequired,
};
