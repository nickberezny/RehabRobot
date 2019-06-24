import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as THREE from 'three'
//import * as OBJLoader from 'three-obj-loader';
import { setParam } from "../src/actions";
//OBJLoader(THREE);

//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair.png")
//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair_yellow.png" );

class Follow_game extends Component {
  constructor(props) {
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }

  componentDidMount() {

    var points = 0;
    var maxStroke = 200;
    var text;

    var group = new THREE.Group();

    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    var scene = new THREE.Scene()
    scene.background = new THREE.Color( 0xf7fdff );
    
    var camera = new THREE.OrthographicCamera( - width / 2, width / 2, height / 2, - height / 2, -100, 500000);
    camera.position.set( 0,0,5);
    scene.add( camera );

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)

    var geometry = new THREE.BoxGeometry( 100, 100, 100 );

    var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xE86D00 });

    var cube = new THREE.Mesh( geometry, cubeMaterial)

    cube.position.set( 0.0, 0.0, 0.0);

    var spotLight1 = new THREE.SpotLight( 0xffffff, 1 );
    spotLight1.position.set( -width/3, 200, 200 );
    var light = new THREE.HemisphereLight( 0xffffff, 0xffffff, 1 );
    scene.add( light );
    scene.add(spotLight1)

    scene.add(cube);

    this.scene = scene
    this.camera = camera
    this.renderer = renderer

    this.cube = cube

    //this.group = group;
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

    this.factor = 280.0 / this.props.x_end

    console.log('x_end' + this.props.x_end)
    console.log('x cube' + this.factor*this.props.x)
    console.log('xdes cube' + this.factor*this.props.xdes )

    if(this.factor*this.props.x > this.factor*this.props.xdes - 20.0 && this.factor*this.props.x < this.factor*this.props.xdes + 20.0)
    {
      //this.points += 1;
      
      this.cube.rotation.x += 0.02;
      this.cube.rotation.y += 0.01;
      this.cube.rotation.z += 0.015;

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
        style={{ width: '800px', height: '800px' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

function mapStateToProps(state) {
  
  //map state variables to the component's state 
  return {
    x: state.x,
    xdes: state.xdes,
    x_end: state.x_end,
  }
}


export default connect(
  mapStateToProps,
  {} //add importing action functions here
)(Follow_game);