import { Fragment, useState } from 'react'
import styled from 'styled-components';
import { PTag } from './common'

const StyledDiv = styled.div`
  position: fixed;
  z-index: 1;
  background-color: black;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  ${(props) => (props.isopen === "true" ?
    `display: fixed;`
    :
    `display: none;`
  )}

  div {
    width: 80%;
    text-align: center;
    margin: auto;
    font-size: 35px;

    span {
      text-align: right;
      position: absolute;
      right: 0;
      top: 0;
      cursor: pointer;
      padding: 30px;
      &:hover {
        transform: scale(1.3);
      }
    }
  }
`;

const StyledPTag = styled.p`
  cursor: pointer;
`;

export default function Modal({ film }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    console.log('hi')
    setIsOpen(!isOpen);
  }

  return (
    <Fragment>
      <StyledPTag onClick={() => toggleModal()} className="text-blue-200 mt-1">
        {film.title}
      </StyledPTag>
      <StyledDiv isopen={String(isOpen)}>
        <div>
          <span onClick={() => toggleModal()}>X</span>
          <p>{film.opening_crawl}</p>
        </div>
      </StyledDiv>
    </Fragment>
  )
}