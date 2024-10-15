// EtcModal.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* 어두운 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalWrapper = styled.div`
  width: 580px;
  height: 360px;
  border-radius: 12px;
  background: ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.fontcolor};
  position: relative;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: 768px) {
    height: 340px;
    margin: 10px;
  }
`;
const TextAreaWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  @media (max-width: 768px) {
    border-radius: 0;
    width: 100%;
    height: 100%;
    box-shadow: none;
    border-radius: 0px 0px 0px 0px;
  }
`;

const TextArea = styled.textarea`
  background: ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.fontcolor};
  border: none;
  font-size: 16px;
  width: 100%;
  height: 100%;
  resize: none;
  padding: 0px;
  font-family: var(--pretendard-font);
  font-weight: 300;
  &::placeholder {
    color: #bababa;
    opacity: 1;
    font-size: 16px;
    transition: opacity 0.3s;
  }
  &:focus {
    &::placeholder {
      opacity: 0;
    }
    outline: none;
  }
`;

const Buttons = styled.div`
  width: 100%;
  border-top: 1px solid rgba(204, 204, 204, 0.4);
  height: auto;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 10px;
`;

const UploadButton = styled.button`
  background: ${(props) => props.theme.btnBgColor};
  color: ${(props) => props.theme.logoColor};
  border: 1px solid ${(props) => props.theme.borderstroke};
  padding: 10px 20px;
  border-radius: 12px;
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.2s;
  &:hover {
    background: ${(props) => props.theme.mouseHoverBg};
    color: ${(props) => props.theme.mouseHoverFontcolor};
  }
`;
const DelButton = styled.button`
  background: ${(props) => props.theme.mouseHoverBg};
  color: ${(props) => props.theme.fontcolor};
  padding: 10px 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-right: 10px;
`;

const EtcModal = ({ post, onSave, onCancel }) => {
  const [newContent, setNewContent] = useState(post); // 수정할 내용을 상태로 관리

  const handleSave = () => {
    onSave(newContent); // 부모 컴포넌트로 수정된 내용 전달
  };

  return (
    <ModalOverlay>
      <ModalWrapper>
        <TextAreaWrapper>
          <TextArea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            placeholder="내용을 입력하세요 ..."
          />
        </TextAreaWrapper>
        <Buttons>
          <UploadButton onClick={handleSave}>게시</UploadButton>
          <DelButton cancel onClick={onCancel}>
            취소
          </DelButton>
        </Buttons>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default EtcModal;
