import React from 'react'
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	ImageBackground,
	Dimensions,
	TextInput,
} from 'react-native'
import RoundedButton from '../../components/RoundedButton'
import { fontSizes, spacing } from '../../utils/sizes'

export const Task = ({ addTask }) => {
	const [task, setTask] = React.useState('')
	return (
		<View style={styles.container}>
			<View style={styles.textSection}>
				<Text style={styles.title}>What are you working on?</Text>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.task}
						value={task}
						onChangeText={setTask}
						// onSubmitEditing={({nativeEvent}) => addTask(nativeEvent.text)}
						placeholder='learn React Native'
					/>

					<RoundedButton title='+' size={50} onPress={() => addTask(task)} />
				</View>
			</View>
			{/* <Text>Things you've been working on</Text>
			<Text>Nothing yet</Text> */}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		// width: '100%',
		flex: 1,
		borderColor: 'orange',
		borderWidth: 13,
	},
	textSection: {
		flex: 0.5,
		justifyContent: 'center',
		padding: spacing.md,
		borderWidth: 23,
		borderColor: 'black',
		// padding: 10,
	},

	task: {
		height: 40,
		margin: spacing.sm,
		borderWidth: 5,
		borderColor: 'skyblue',
		// padding: 10,
		flex: 1,
	},
	title: {
		fontWeight: 'bold',
		fontSize: fontSizes.xl,
		color: '#fff',
	},
	inputContainer: {
		paddingTop: spacing.lg,
		flexDirection: 'row',
		alignItems: 'center',
	},
})
