import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import BorderItem from "../Common/Border_de";
import { IconWrapper, InformationIcon, FollowerIcon } from "../Common/Icon";

// 스타일 정의

const BorderWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.isSmallScreen ? "column" : props.isTablet ? "column" : "row"};
  align-items: flex-start;
  justify-content: center;
  width: ${(props) =>
    props.isSmallScreen ? "100vw" : props.isTablet ? "800px" : "1200px"};
  height: auto;
  padding: ${(props) =>
    props.isSmallScreen ? "20px" : props.isTablet ? "0 30px" : "0px"};
  gap: ${(props) =>
    props.isSmallScreen ? "20px" : props.isTablet ? "20px" : "40px"};
  box-sizing: border-box;
  /* overflow-x: hidden; */
`;

const InsitesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) =>
    props.isSmallScreen ? "0px" : props.isTablet ? "0 20px" : "0px"};
  width: ${(props) =>
    props.isSmallScreen ? "100%" : props.isTablet ? "650px" : "auto"};
  gap: ${(props) => (props.isSmallScreen ? "0" : "10px")};
  margin: ${(props) =>
    props.isSmallScreen
      ? "20px 0"
      : props.isTablet
      ? "20px 0"
      : "0"}; /* 박스 간 간격 제거 */
  background: ${(props) => props.theme.borderColor};
  border-radius: 20px;
`;

const InsitesTitle = styled.div`
  margin-top: ${(props) =>
    props.isSmallScreen ? "20px" : props.isTablet ? "30px" : "40px"};
  font-size: ${(props) =>
    props.isSmallScreen ? "16px" : props.isTablet ? "16px" : "18px"};
  font-weight: 500;
`;

const BorderItemTitle = styled.div`
  width: ${(props) => (props.isSmallScreen ? "calc(100% - 40px)" : "480px")};
  height: ${(props) => (props.isSmallScreen ? "100%" : "25px")};
  font-size: ${(props) =>
    props.isSmallScreen ? "14px" : props.isTablet ? "14px" : "18px"};
  padding: 0 20px;
  font-weight: bold;
  margin: 0 0 20px;
  color: ${(props) => props.theme.fontColor};
`;

const Info = styled.div`
  width: ${(props) =>
    props.isSmallScreen ? "100%" : props.isTablet ? "auto" : "auto"};
  display: flex;
  gap: 20px;
`;

const BorderItemInfo = styled.div`
  height: 42px;
  color: #999;
  font-size: ${(props) =>
    props.isSmallScreen ? "12px" : props.isTablet ? "12px" : "14px"};
  font-weight: 300;
`;

const FollowerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) =>
    props.isSmallScreen ? "100%" : props.isTablet ? "100%" : "auto"};
  height: ${(props) => (props.isSmallScreen ? "100%" : "100%")};
  padding: ${(props) => (props.isSmallScreen ? "20px 0" : "0 ")};
  box-sizing: border-box; // 크기 조정
`;

const TotalInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const FollowerInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-self: start;
  padding: 10px 30px;
`;

const FollowerInfo = styled.div`
  width: ${(props) =>
    props.isSmallScreen ? "200px" : props.isTablet ? "100%" : "436px"};
  height: ${(props) =>
    props.isSmallScreen ? "200px" : props.isTablet ? "100%" : "317px"};
  margin: ${(props) =>
    props.isSmallScreen ? "0" : props.isTablet ? "0" : "16px 0"};
`;

const TotalNum = styled.div`
  font-size: ${(props) =>
    props.isSmallScreen ? "16px" : props.isTablet ? "30px" : "40px"};
  margin-bottom: ${(props) =>
    props.isSmallScreen ? "16px" : props.isTablet ? "16px" : "0"};
  font-weight: bold;
  margin-left: 8px;
`;

const TotalFollow = styled.div`
  color: #bababa;
  font-size: ${(props) =>
    props.isSmallScreen ? "0.8rem" : props.isTablet ? "1rem" : "1rem"};
  margin-top: ${(props) =>
    props.isSmallScreen ? "0" : props.isTablet ? "0" : "12px"};
  margin-bottom: ${(props) =>
    props.isSmallScreen ? "12px" : props.isTablet ? "12px" : "0"};
`;

export const Line = styled.hr`
  width: 96%;
  margin: 20px 0;
  border: none;
  height: 1px;
  background-color: #bababa;
`;

// 데이터
const items = [
  {
    title: "조회수",
    info: "팔로워가 100명 이상이 되면 어떤 사람들이 회원님의 콘텐츠를 조회했는지에 관한 정보를 더 확인할 수 있습니다.",
  },
  {
    title: "반응",
    info: "팔로워가 100명 이상이 되면 어떤 사람들이 회원님의 콘텐츠를 조회했는지에 관한 정보를 더 확인할 수 있습니다.",
  },
  {
    title: "팔로워",
    info: "팔로워가 100명 이상이 되면 어떤 사람들이 회원님의 콘텐츠를 조회했는지에 관한 정보를 더 확인할 수 있습니다.",
  },
];

const itemsSecondBox = [
  {
    title: "조회수",
    info: "팔로워가 100명 이상이 되면 어떤 사람들이 회원님의 콘텐츠를 조회했는지에 관한 정보를 더 확인할 수 있습니다.",
  },
  {
    title: "반응",
    info: "팔로워가 100명 이상이 되면 어떤 사람들이 회원님의 콘텐츠를 조회했는지에 관한 정보를 더 확인할 수 있습니다.",
  },
];

// 컴포넌트
const Insiteitem_de = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 769px) and (max-width: 1024px)",
  });

  return (
    <BorderWrapper isSmallScreen={isSmallScreen} isTablet={isTablet}>
      {/* 1번째 인사이트 박스 */}
      <InsitesWrapper isSmallScreen={isSmallScreen} isTablet={isTablet}>
        {" "}
        <InsitesTitle isSmallScreen={isSmallScreen} isTablet={isTablet}>
          인사이트
        </InsitesTitle>
        {items.map((item) => (
          <BorderItem
            key={item.title}
            type="insitesWrapper"
            isSmallScreen={isSmallScreen}
            isTablet={isTablet}
          >
            <BorderItemTitle isSmallScreen={isSmallScreen} isTablet={isTablet}>
              {item.title}
            </BorderItemTitle>
            <Info>
              <IconWrapper
                background={"#e9e9e9"}
                borderRadius={"100%"}
                wrapperSize={"32px"}
                wrapperPadding={"8px"}
              >
                <InformationIcon width={"30px"} fill={"black"} zindex={"1"} />
              </IconWrapper>
              <BorderItemInfo isSmallScreen={isSmallScreen} isTablet={isTablet}>
                {item.info}
              </BorderItemInfo>
            </Info>
          </BorderItem>
        ))}
      </InsitesWrapper>
      {/* 2번째 인사이트 */}
      <InsitesWrapper isSmallScreen={isSmallScreen} isTablet={isTablet}>
        <InsitesTitle isSmallScreen={isSmallScreen} isTablet={isTablet}>
          팔로워
        </InsitesTitle>
        <FollowerWrapper isSmallScreen={isSmallScreen} isTablet={isTablet}>
          <FollowerInner isSmallScreen={isSmallScreen} isTablet={isTablet}>
            <TotalInfo isSmallScreen={isSmallScreen} isTablet={isTablet}>
              <TotalNum isSmallScreen={isSmallScreen} isTablet={isTablet}>
                1
              </TotalNum>
              <TotalFollow isSmallScreen={isSmallScreen} isTablet={isTablet}>
                총 팔로워
              </TotalFollow>
            </TotalInfo>
            <FollowerIcon /> <Line />
            <Info>
              <BorderItemInfo isSmallScreen={isSmallScreen} isTablet={isTablet}>
                팔로워가 100명 이상이 되면 어떤 사람들이 회원님의 콘텐츠를
                조회했는지에 관한 정보를 더 확인할 수 있습니다.
              </BorderItemInfo>
            </Info>
          </FollowerInner>
        </FollowerWrapper>
      </InsitesWrapper>
    </BorderWrapper>
  );
};

export default Insiteitem_de;
