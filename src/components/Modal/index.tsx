import { ReactNode } from 'react';

import * as S from './styles'
interface ModalProps{
    children: ReactNode;
}

export const Modal = ({children}:ModalProps) => {

  return (
  <>
    <S.Container>
      <h2>Certeza?</h2>
    {children}
    </S.Container>
    </>
  )
}

