import styled from 'styled-components'

export const Container = styled.View`
  flex:1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  margin: 6px;
  align-items: center;
`

export const TitleHeader = styled.Text.attrs({
  numberOfLines: 1
})`
  font-size: 32px;
  font-weight: 700;
  flex-shrink: 1;
  color: ${({ theme }) => theme.colors.line};
  text-transform: uppercase;
`

export const DescriptionHeader = styled.Text.attrs({
  // numberOfLines: 1
})`
  font-size: 18px;
  font-weight: 300;
  flex-shrink: 1;
  color: ${({ theme }) => theme.colors.line};
`

export const Circle = styled.View`
  width: ${({ circleSize }) => circleSize ? circleSize : 100}px;
  height: ${({ circleSize }) => circleSize ? circleSize : 100}px;
  background-color: ${({ theme }) => theme.colors.title};
  border-width: 12px;
  border-radius: ${({ circleSize }) => circleSize ? circleSize / 2 : 50}px;
  border-color: ${({ theme }) => theme.colors.circleColor}
`

export const SubContainerCircle = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const TitleTime = styled.Text.attrs({
  numberOfLines: 1
})`
  font-size: 46px;
  font-weight: 700;
  /* flex-shrink: 1; */
  color: ${({ theme }) => theme.colors.line}
`

export const SubContainerButtons = styled.View`
  flex-direction: row;
  width: 80%;
  justify-content: center;
`

export const ButtonInteractive = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.circleColor};
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 100px;
  opacity: ${({ disabled }) => disabled ? 0.4 : 1}
`

export const TitleButton = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 20px;
  font-weight: 400;
  flex-shrink: 1;
  color: ${({ theme }) => theme.colors.line};
`

export const SubContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20%;
`