import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as THREE from 'three'
//import * as OBJLoader from 'three-obj-loader';
import { setParam } from "../src/actions";
//OBJLoader(THREE);

//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair.png")
//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair_yellow.png" );

class Balance_game extends Component {
  constructor(props) {
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }

  componentDidMount() {

    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
  
    var scene = new THREE.Scene()
    scene.background = new THREE.Color( 0x99ccff );
    
    var camera = new THREE.OrthographicCamera( - width / 2, width / 2, height / 2, - height / 2, -100, 500000);
    camera.position.set( 0,0,5);
    scene.add( camera );

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)

    var columnMaterial = new THREE.MeshBasicMaterial( { color: 0xAFAFAF} );
    var groundMaterial = new THREE.MeshBasicMaterial( { color: 0x137200} );
    var characterMaterial = new THREE.MeshBasicMaterial( { color: 0x6400CF} );
    var ballMaterial = new THREE.MeshBasicMaterial( { color: 0x00239B} );

    var column = new THREE.Mesh( new THREE.BoxBufferGeometry( 50, 200, 10 ), columnMaterial );
    column.position.set(0,-100,0)
    scene.add(column)

    var ground = new THREE.Mesh( new THREE.BoxBufferGeometry( 1000, 50, 10 ), groundMaterial );
    ground.position.set(0,-175,0)
    scene.add(ground)

    var character = new THREE.Mesh(new THREE.CircleBufferGeometry( 25, 32 ), characterMaterial );
    character.position.set(0,25,0)
    scene.add(character)

    var ball = new THREE.Mesh(new THREE.CircleBufferGeometry( 10, 32 ), ballMaterial );
    ball.position.set(100 ,25,0)
    scene.add(ball)

    var spotLight1 = new THREE.SpotLight( 0xffffff, 1 );
    spotLight1.position.set( -width/3, 200, 200 );

    var light = new THREE.HemisphereLight( 0xffffff, 0xffffff, 1 );
    scene.add( light );
    
    scene.add(spotLight1)
    scene.add( camera );

    this.scene = scene
    this.camera = camera
    this.renderer = renderer

    this.character = character
    this.ball = ball

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

    this.character.position.x = this.props.x - this.props.xdes
    this.ball.position.x = this.props.x_ball - this.props.xdes

    if(Math.abs(this.character.position.x)>40)
    {
      //ball should fall, game over
      console.log('fall')
    }

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
    x: state.x,
    x_ball: state.x_ball,
    xdes: state.xdes
  }
}


export default connect(
  mapStateToProps,
  {} //add importing action functions here
)(Balance_game);