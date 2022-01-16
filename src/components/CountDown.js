import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fontSizes, spacing } from '../utils/sizes'

const minutesToMillis = mins => mins * 1000 * 60
const formatTime = time => (time < 6 ? `0${time}` : time)

const CountDown = ({ minutes = 1, isPaused, onProgress, onEnd }) => {
	const [millis, setMillis] = useState(minutesToMillis(minutes))
	const interval = React.useRef(null)
	const countDown = () => {
		setMillis(time => {
			if (time === 0) {
        clearInterval(interval.current)
        onEnd()
				return time
			}
			const timeLeft = time - 1000
			onProgress(timeLeft / minutesToMillis(minutes))
			return timeLeft
		})
	}

	useEffect(() => {
		setMillis(minutesToMillis(minutes))
	}, [minutes])

	useEffect(() => {
		if (isPaused) {
			if (interval.current) clearInterval(interval.current)
			return
		}
		interval.current = setInterval(countDown, 1000)
		return () => clearInterval(interval.current)
	}, [isPaused])

	const mins = Math.floor(millis / 1000 / 60) % 60
	const secs = Math.floor(millis / 1000) % 60
	return (
		<Text style={styles.text}>
			{formatTime(mins)} : {formatTime(secs)}
		</Text>
	)
}

export default CountDown

const styles = StyleSheet.create({
	text: {
		fontSize: fontSizes.xxxxl,
		fontWeight: 'bold',
		color: '#fff',
		padding: spacing.lg,
		backgroundColor: 'rgba(94, 132, 226, 0.3)',
	},
})
