import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { spacing } from './src/utils/sizes'
import {
	Image,
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Pressable,
	Platform,
} from 'react-native'
import { Task } from './src/features/task/Task'
import Welcome from './src/screens/Welcome'
import Timer from './src/features/timer/Timer'

const STATUSES = {
	COMPLETE: 1,
	CANCELLED: 2,
}

export default function App() {
	const [focusTask, setFocusTask] = useState('Coding')
	const [focusHistory, setFocusHistory] = useState([])

	const addFocusHistorySubjectWithStatus = (task, status) => {
		setFocusHistory([
			...focusHistory,
			{ key: String(focusHistory.length + 1), task, status },
		])
	}
	return (
		<SafeAreaView style={styles.container}>
			{/* <Welcome /> */}
			{focusTask ? (
				<Timer
					focusTask={focusTask}
					onTimerEnd={() => {
						addFocusHistorySubjectWithStatus(focusSubject, STATUSES.COMPLETE)
						setFocusTask(null)
					}}
					clearSubject={() => {
						addFocusHistorySubjectWithStatus(focusSubject, STATUSES.CANCELLED)
						setFocusTask(null)
					}}
				/>
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
		paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg,
		backgroundColor: '#5052BA',
		borderColor: 'purple',
		borderWidth: 15,
	},
})
