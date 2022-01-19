import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'

//formik
import { Form, Formik } from 'formik'
//icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'
//date picker for birthdate
import DateTimePicker from '@react-native-community/datetimepicker'

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
	StyledButton,
	ButtonText,
	MsgBox,
	Line,
	ExtraView,
	ExtraText,
	TextLink,
	TextLinkContent,
} from '../components/styles'
import { View, TouchableOpacity } from 'react-native'

//colors
const { brand, darkLight, primary } = Colors

export const Signup = () => {
	const [hidePassword, setHidePassword] = useState(true)
	const [show, setShow] = useState(false)
	const [date, setDate] = useState(new Date(2022, 0, 1))

	//actual date of birth to be sent
	const [dob, setDob] = useState()

	const onChange = (e, selectedDate) => {
		const currentDate = selectedDate || date
		setShow(false)
		setDate(currentDate)
		setDob(currentDate)
	}

	const showDatePicker = () => {
		setShow(true)
	}

	return (
		<StyledContainer>
			<StatusBar styled='dark' />
			<InnerContainer>
				<PageTitle>You Owe Me</PageTitle>
				<SubTitle>Account Signup</SubTitle>

				{show && (
					<View>
						<DateTimePicker
							testID='dateTimePicker'
							style={{ width: 320, backgroundColor: 'white' }}
							value={date}
							mode='date'
							is24Hour={true}
							display='default'
							onChange={onChange}
						/>
					</View>
				)}

				<Formik
					initialValues={{
						fullName: '',
						email: '',
						dateOfBirth: '',
						password: '',
						confirmPassword: '',
					}}
					onSubmit={values => {
						console.log(values)
					}}
				>
					{({ handleChange, handleBlur, handleSubmit, values }) => (
						<StyledFormArea>
							<MyTextInput
								label='Full Name'
								icon='person'
								placeholder='Joe Doe'
								placeholderTextColor={darkLight}
								onChangeText={handleChange('fullName')}
								onBlur={handleBlur('fullName')}
								value={values.fullName}
							/>
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
							<MyTextInput
								label='Date of Birth'
								format='YYYY-MM-DD'
								placeholder='Select date'
								placeholderTextColor={darkLight}
								onChangeText={handleChange('dateOfBirth')}
								onBlur={handleBlur('dateOfBirth')}
								value={dob ? dob.toDateString() : ''}
								icon='calendar'
								editable={false}
								isDate={true}
								showDatePicker={showDatePicker}
							/>
							<MyTextInput
								label='Password'
								icon='lock'
								placeholder='password1'
								placeholderTextColor={darkLight}
								onChangeText={handleChange('password')}
								onBlur={handleBlur('password')}
								value={values.password}
								secureTextEntry={hidePassword}
								isPassword={true}
								hidePassword={hidePassword}
								setHidePassword={setHidePassword}
							/>
							<MyTextInput
								label='Confirm Password'
								icon='lock'
								placeholder='password1'
								placeholderTextColor={darkLight}
								onChangeText={handleChange('confirmPassword')}
								onBlur={handleBlur('confirmPassword')}
								value={values.password}
								secureTextEntry={hidePassword}
								isPassword={true}
								hidePassword={hidePassword}
								setHidePassword={setHidePassword}
							/>
							<MsgBox>...</MsgBox>
							<StyledButton onPress={handleSubmit}>
								<ButtonText>Login</ButtonText>
							</StyledButton>
							<Line />
							<ExtraView>
								<ExtraText>Already have an account?</ExtraText>
								<TextLink>
									<TextLinkContent>Login</TextLinkContent>
								</TextLink>
							</ExtraView>
						</StyledFormArea>
					)}
				</Formik>
			</InnerContainer>
		</StyledContainer>
	)
}

const MyTextInput = ({
	label,
	icon,
	isPassword,
	hidePassword,
	setHidePassword,
	isDate,
	showDatePicker,
	...props
}) => {
	return (
		<View>
			<LeftIcon>
				<Octicons name={icon} size={30} color={brand} />
			</LeftIcon>
			<StyledInputLabel>{label}</StyledInputLabel>
			{isDate && (
				<TouchableOpacity onPress={showDatePicker}>
					<StyledTextInput {...props} />
				</TouchableOpacity>
			)}
			{!isDate && <StyledTextInput {...props} />}
			{isPassword && (
				<RightIcon onPress={() => setHidePassword(!hidePassword)}>
					<Ionicons
						name={hidePassword ? 'md-eye-off' : 'md-eye'}
						size={30}
						color={darkLight}
					/>
				</RightIcon>
			)}
		</View>
	)
}
