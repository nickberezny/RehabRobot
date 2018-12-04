import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as THREE from 'three'
import * as OBJLoader from 'three-obj-loader';
import { setParam } from "../src/actions";
OBJLoader(THREE);
InputStream is = (InputStream) MyTest.class.getResourcesAsStream(test.csv))

class Scene extends Component {
  constructor(props) {
    super(props)

    this.loader = new THREE.OBJLoader()
    this.scene = new THREE.Scene()

    this.loader.load(
      // resource URL
      'robot_base_model.obj',
      // called when resource is loaded
      function ( object ) {
        this.scene.add( object );
      },
      // called when loading is in progresses
      function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      },
      // called when loading has errors
      function ( error ) {
        console.log( 'An error happened' );
      }
    );

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }

  componentDidMount() {
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )

    // instantiate a loader
    

    // load a resource
    

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: '#433F81' })
    const cube = new THREE.Mesh(geometry, material)

    camera.position.z = 4
    this.scene.add(cube)
    renderer.setClearColor('#000000')
    renderer.setSize(width, height)

    this.scene = this.scene
    this.camera = camera
    this.renderer = renderer
    this.material = material
    this.cube = cube

    this.mount.appendChild(this.renderer.domElement)
    this.start()
  }

  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }

  animate() {
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01
    this.cube.position.x = this.props.x

    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div
        style={{ width: '900px', height: '400px' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

function mapStateToProps(state) {
  
  //map state variables to the component's state 
  return {
    x: state.x
  }
}


export default connect(
  mapStateToProps,
  {} //add importing action functions here
)(Scene);