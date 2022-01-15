import React from 'react'
import { Image, StyleSheet, Text, View, Pressable } from 'react-native'

const Welcome = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.pgTitle}>Plan your work and stay productive</Text>
			<Image
				style={styles.imgBg}
				source={require('../../assets/welcome.png')}
			/>
			<Pressable style={styles.btn}>
				<Text style={styles.btnText}>Lets Go!</Text>
			</Pressable>
		</View>
	)
}

export default Welcome

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#5052BA',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	imgBg: {
		width: 325,
		height: 325,
		shadowColor: '#221E44',
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.9,
		shadowRadius: 13,
	},
	btn: {
		height: 50,
		width: 300,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#221E44',
	},
	btnText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '500',
		textTransform: 'uppercase',
	},
	pgTitle: {
		color: '#fff',
		fontSize: 20,
		fontWeight: '900',
		textTransform: 'uppercase',
		textAlign: 'center',
	},
})
