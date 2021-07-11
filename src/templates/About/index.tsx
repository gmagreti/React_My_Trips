import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolor
        asperiores ex aspernatur, vero unde voluptas a expedita, quod reiciendis
        natus vel, quasi amet impedit tenetur. Culpa esse a itaque.
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
