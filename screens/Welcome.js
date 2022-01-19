import React from 'react'
import { StatusBar } from 'expo-status-bar'

import {
	Avatar,
	WelcomeImage,
	PageTitle,
	SubTitle,
	StyledFormArea,
	StyledButton,
	InnerContainer,
	WelcomeContainer,
	ButtonText,
	Line,
} from '../components/styles'

export const Welcome = () => {
	return (
		<>
			<StatusBar styled='light' />
			<InnerContainer>
				<WelcomeImage
					source={require('../assets/img1.png')}
					resizeMode='cover'
				/>
				<WelcomeContainer>
					<PageTitle welcome={true}>Welcome!</PageTitle>
					<SubTitle welcome={true}>Asiisii</SubTitle>
					<SubTitle welcome={true}>example@text.com</SubTitle>
					<StyledFormArea>
						<Avatar source={require('../assets/img3.png')} resizeMode='cover' />
						<Line />
						<StyledButton onPress={() => {}}>
							<ButtonText>Logout</ButtonText>
						</StyledButton>
					</StyledFormArea>
				</WelcomeContainer>
			</InnerContainer>
		</>
	)
}
