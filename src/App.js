import React from "react"
import React3 from "react-three-renderer"
import * as THREE from "three"

class App extends React.Component {
	constructor(props, context) {
		super(props, context)

		this.detectWindowChanges()

		// construct the position vector here, because if we use 'new' within render,
		// React will think that things have changed when they have not.
		this.cameraPosition = new THREE.Vector3(0, 0, 5)

		this.state = {
			cubeRotation: new THREE.Euler(),
			width: window.innerWidth,
			height: window.innerHeight
		}

		this._onAnimate = () => {}
	}

	detectWindowChanges() {
		window.addEventListener("resize", () =>
			this.setState({
				width: window.innerWidth,
				height: window.innerHeight
			})
		)
	}

	render() {
		const { width, height } = this.state

		return (
			<React3
				mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
				width={width}
				height={height}
				onAnimate={this._onAnimate}
			>
				<scene>
					<perspectiveCamera
						name="camera"
						fov={75}
						aspect={width / height}
						near={0.1}
						far={1000}
						position={this.cameraPosition}
					/>
					<mesh>
						<boxGeometry width={1} height={1} depth={1} />
						<meshBasicMaterial color={0x00ff00} />
					</mesh>
				</scene>
			</React3>
		)
	}
}

export default App
