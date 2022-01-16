import React, { useState } from 'react'
import { StyleSheet, Text, View, Platform, Vibration } from 'react-native'
import { ProgressBar } from 'react-native-paper'
import CountDown from '../../components/CountDown'
import RoundedButton from '../../components/RoundedButton'
import { spacing } from '../../utils/sizes'
import Timing from './Timing'
import { useKeepAwake } from 'expo-keep-awake'

const DEFAULT_TIME = 0.1

const Timer = ({ focusTask, onTimerEnd, clearSubject }) => {
	useKeepAwake()
	const interval = React.useRef(null)
	const [minutes, setMinutes] = useState(DEFAULT_TIME)
	const [isStarted, setIsStarted] = useState(false)
	const [progress, setProgress] = useState(1)

	const onProgress = progress => {
		setProgress(progress)
	}

	const vibrate = () => {
		if (Platform.OS === 'ios') {
			const inteval = setInterval(() => Vibration.vibrate(), 1000)
			setTimeout(() => clearInterval(inteval), 10000)
		} else {
			Vibration.vibrate(10000)
		}
	}

	const onEnd = () => {
		vibrate()
		setMinutes(DEFAULT_TIME)
		setProgress(1)
		setIsStarted(false)
		onTimerEnd()
	}

	const changeTime = min => {
		setMinutes(min)
		setProgress(1)
		setIsStarted(false)
	}

	return (
		<View style={styles.container}>
			<View style={styles.countdown}>
				<CountDown
					minutes={minutes}
					isPaused={!isStarted}
					onProgress={onProgress}
					onEnd={onEnd}
				/>
			</View>
			<View style={{ paddingTop: spacing.xxl }}>
				<Text style={styles.title}>Focusing on:</Text>
				<Text style={styles.task}>{focusTask}</Text>
			</View>
			<View style={{ paddingTop: spacing.sm }}>
				<ProgressBar
					progress={progress}
					color='#5384e2'
					style={{ height: 10 }}
				/>
			</View>
			<View style={styles.btnWrapper}>
				<Timing changeTime={changeTime} />
			</View>
			<View style={styles.btnWrapper}>
				{
					<RoundedButton
						title={!isStarted ? 'start' : 'pause'}
						onPress={() => setIsStarted(!isStarted)}
					/>
				}
			</View>
			<View style={styles.clearSubject}>
				<RoundedButton title='-' size={50} onPress={() => clearSubject()} />
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
	countdown: {
		flex: 0.5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	btnWrapper: {
		flex: 0.3,
		flexDirection: 'row',
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	clearSubject: {
		paddingBottom: 25,
		paddingLeft: 25,
	},
})
