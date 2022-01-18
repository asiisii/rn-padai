import React from 'react'
import { StatusBar } from 'expo-status-bar'

//formik
import { Form, Formik } from 'formik'
//icons
import { Octicons } from '@expo/vector-icons'

import {
	Colors,
	StyledContainer,
	InnerContainer,
	PageLogo,
	PageTitle,
	SubTitle,
	StyledFormArea,
	LeftIcon,
	StyledInputLabel,
	StyledTextInput,
	RightIcon,
} from '../components/styles'
import { View } from 'react-native'

//colors
const { brand, darkLight } = Colors

export const Login = () => {
	return (
		<StyledContainer>
			<StatusBar styled='dark' />
			<InnerContainer>
				<PageLogo source={require('../assets/img3.png')} resizeMode='cover' />
				<PageTitle>You Owe Me</PageTitle>
				<SubTitle>Account Login</SubTitle>
				<Formik
					initialValues={{ email: '', password: '' }}
					onSubmit={values => {
						console.log(values)
					}}
				>
					{' '}
					{(handleChange, handleBlur, handleSubmit, values) => (
						<StyledFormArea>
							<MyTextInput
								label='Email Address'
								icon='mail'
								placeholder='example@example.com'
								placeholderTextColor={darkLight}
								onChangeText={handleChange('email')}
								onBlur={handleBlur('email')}
								value={values.email}
								keyboardType='email-address'
							/>
						</StyledFormArea>
					)}
				</Formik>
			</InnerContainer>
		</StyledContainer>
	)
}

const MyTextInput = ({ label, icon, ...props }) => {
	return (
		<View>
			<LeftIcon>
				<Octicons name={icon} size={30} color={brand} />
			</LeftIcon>
			<StyledInputLabel>{label}</StyledInputLabel>
			<StyledTextInput {...props} />
		</View>
	)
}
