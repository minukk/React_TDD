import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

export const PageHeader = () => {
  const { pathname } = useLocation();

  let title = '에러';

  if (pathname === '/') {
    title = '할 일 목록';
  } else if (pathname === '/add') {
    title = '할 일 추가';
  } else if (pathname.startsWith('/detail')) {
    title = '할 일 상세';
  }

  console.log(pathname);
  return (
    <Container>
      <Title>{title}</Title>
      {pathname !== '/' && <GoBack to="/">돌아가기</GoBack>}
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.div``;

const GoBack = styled(Link)``;
