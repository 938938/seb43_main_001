import * as S from './Detail.style';

// react component
import DetailTitle from '../components/Detail/DetailTitle';
import ProjectImg from '../components/Detail/ProjectImg';
import Description from '../components/Detail/Description';
import ProjectContent from '../components/Detail/ProjectContent';
import Comment from '../components/Detail/Comment';

function Detail() {
  return (
    <S.Container>
      <DetailTitle />
      <ProjectImg />
      <Description />
      <ProjectContent />
      <Comment />
    </S.Container>
  );
}

export default Detail;
