import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Timer = ({ focusTask }) => {
	return (
		<View style={styles.container}>
			<View style={{ paddingTop: 40 }}>
				<Text style={styles.title}>Focusing on:</Text>
				<Text style={styles.task}>{focusTask}</Text>
			</View>
		</View>
	)
}

export default Timer

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		color: '#fff',
		textAlign: 'center',
	},
	task: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: 'bold',
	},
})
