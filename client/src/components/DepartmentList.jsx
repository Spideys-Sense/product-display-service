import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ListWrapper = styled.h5`
  grid-area: 1 / 1 / 1 / 1;
  margin: 10px;
  bottom: 1px;
`;

const ListItem = styled.span`
  font-weight: normal;
  color: #666;
`;

const WordListItem = styled(ListItem)`
  border-bottom: 1px dashed #bbb;
`;

export default function DepartmentList(props) {
  const { department } = props;
  const splitWords = (department) => {
    let words = department.split(' ');
    words = words.map((word) => {
      if (word === '>') {
        return (
          <ListItem>{' > '}</ListItem>
        );
      }
      return (
        <WordListItem>{word}</WordListItem>
      );
    });
    return words;
  };
  const list = splitWords(department);
  return (
    <ListWrapper>
      {list}
    </ListWrapper>
  );
}

DepartmentList.propTypes = {
	  department: PropTypes.string.isRequired,
};

