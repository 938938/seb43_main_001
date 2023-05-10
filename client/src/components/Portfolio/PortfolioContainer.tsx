import React from 'react';

import * as S from './PortfolioContainer.style';
import TextBox from './TextBox';
import ImgBox from './ImgBox';
import TagBox from './TagBox';
import TextareaBox from './TextareaBox';
import DetailBox from './DetailBox';
import UserBox from './UserBox';

type PortfolioContainerProps = {
  isEdit: boolean;
};

const PortfolioContainer: React.FC<PortfolioContainerProps> = ({ isEdit }) => {
  return (
    <S.PortfolioLayout>
      {isEdit ? (
        <>
          <UserBox />
          <TextBox text={'제목'} />
          <ImgBox text={'대표 사진'} />
          <TextBox text={'깃허브 링크'} />
          <TextBox text={'배포 링크'} />
          <TagBox text={'기술스택(업무 툴/스킬)'} />
          <TextareaBox text={'프로젝트 소개글'} />
          <DetailBox text={'프로젝트 설명'} />
          <S.ButtonContainer>
            <S.PrevBtn>이전 페이지</S.PrevBtn>
            <S.SubmitBtn>수정 하기</S.SubmitBtn>
          </S.ButtonContainer>
        </>
      ) : (
        <>
          <UserBox />
          <TextBox text={'제목'} />
          <ImgBox text={'대표 사진'} />
          <TextBox text={'깃허브 링크'} />
          <TextBox text={'배포 링크'} />
          <TagBox text={'기술스택(업무 툴/스킬)'} />
          <TextareaBox text={'프로젝트 소개글'} />
          <DetailBox text={'프로젝트 설명'} />
          <S.ButtonContainer>
            <S.PrevBtn>이전 페이지</S.PrevBtn>
            <S.SubmitBtn>작성 하기</S.SubmitBtn>
          </S.ButtonContainer>
        </>
      )}
    </S.PortfolioLayout>
  );
};

export default PortfolioContainer;