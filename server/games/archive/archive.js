import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as THREE from 'three'
//import * as OBJLoader from 'three-obj-loader';
import { setParam } from "../src/actions";
//OBJLoader(THREE);

//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair.png")
//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair_yellow.png" );

class Follow_traj extends Component {
  constructor(props) {
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }

  componentDidMount() {

    var points = 0;
    var group = new THREE.Group();

    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    var scene = new THREE.Scene()
    scene.background = new THREE.Color( 0xBCBFFF );
    
    var camera = new THREE.OrthographicCamera( - width / 2, width / 2, height / 2, - height / 2, -100, 500000);
    camera.position.set( 0,0,5);

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)

    var geometry = new THREE.BoxGeometry( 100, 100, 100 );
    var geometry2 = new THREE.BoxGeometry( 80, 80, 80 );
    var material = new THREE.MeshBasicMaterial( { color: 0xffcc66 } );
    var cube = new THREE.Mesh( geometry, material );
    var material2 = new THREE.MeshBasicMaterial( { color: 0x4F99FF } );
    var cube2 = new THREE.Mesh( geometry2, material2 );
    cube.position.z = -100;
    cube2.position.z = 0;
    scene.add( cube );
    scene.add( cube2 );

    /*
    var textureLoader = new THREE.TextureLoader();

    var mapA = textureLoader.load( "sprite/crosshair.png" );
    var materialA = new THREE.SpriteMaterial( { map: mapA, color: 0xFFFFFF} );
    var mapB = textureLoader.load( "sprite/crosshair_yellow.png" );
    var materialB = new THREE.SpriteMaterial( { map: mapB, color: 0xFFFFFF} );
    var sprite1 = new THREE.Sprite( materialA );
    var sprite2 = new THREE.Sprite( materialB );

    sprite1.position.set( 0, 0, 100 );
    sprite1.scale.set(100,100,100);

    group.add(sprite1);
    scene.add( group );
    */
    scene.add( camera );

    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.material = material
    this.cube = cube
    this.cube2 = cube2;
    //this.group = group
    this.points = points

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

    this.cube.position.x = this.props.xdes 
    this.cube2.position.x = this.props.x

    console.log(this.cube.position.x)

    if(this.cube2.position.x > this.cube.position.x - 10 && this.cube2.position.x < this.cube.position.x + 10){
      this.points += 1;
      console.log(this.points);
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
    xdes: state.xdes
  }
}


export default connect(
  mapStateToProps,
  {} //add importing action functions here
)(Follow_traj);