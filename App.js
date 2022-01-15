import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
	Image,
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Pressable,
} from 'react-native'
import { Task } from './src/features/task/Task'
import Welcome from './src/screens/Welcome'
import Timer from './src/features/timer/Timer'

export default function App() {
	const [focusTask, setFocusTask] = useState('Sleeping')
	return (
		<SafeAreaView style={styles.container}>
			{/* <Welcome /> */}
			{focusTask ? (
				<Timer focusTask={focusTask} />
			) : (
				<Task addTask={setFocusTask} />
			)}
			<StatusBar style='auto' />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#5052BA',
		borderColor: 'purple',
		borderWidth: 15,
	},
})
