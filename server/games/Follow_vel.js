import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as THREE from 'three'
//import * as OBJLoader from 'three-obj-loader';
import { setParam } from "../src/actions";
//OBJLoader(THREE);

//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair.png")
//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair_yellow.png" );

class Follow_vel extends Component {
  constructor(props) {
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }

  componentDidMount() {

    var bar_width = 75.0
    var bar_height = 200.0
    var init = 0
    var falling = 0
    var fall_dir = 0
    var fall_speed = 0

    var bar;

    var group = new THREE.Group();

    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    var scene = new THREE.Scene()
    scene.background = new THREE.Color( 0x99ccff );
    
    var camera = new THREE.OrthographicCamera( - width / 2, width / 2, height / 2, - height / 2, -100, 500000);
    camera.position.set( 0,0,10);

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)

    scene.add( camera );

    var blockGeometry = new THREE.BoxGeometry( bar_width, bar_height, 200 );
    var blockMaterial = new THREE.MeshLambertMaterial({ color: 0x51677F });
    var block = new THREE.Mesh( blockGeometry, blockMaterial );

    var blockGeometry2 = new THREE.BoxGeometry( bar_width - 25, bar_height - 25, 200 );
    var blockMaterial2 = new THREE.MeshLambertMaterial({ color: 0xFEFFD1 });
    var block2 = new THREE.Mesh( blockGeometry2, blockMaterial2 );

    var blockGeometry3 = new THREE.BoxGeometry( bar_width - 25, 5, 200 );
    var blockMaterial3 = new THREE.MeshLambertMaterial({ color: 0x000000 });
    var block3 = new THREE.Mesh( blockGeometry3, blockMaterial3 );

    var barGeometry = new THREE.BoxGeometry( bar_width - 25, 1 , 210 );
    var barMaterial = new THREE.MeshLambertMaterial({ color: 0x458B74 });
    bar = new THREE.Mesh( barGeometry, barMaterial );
  
    block.position.set(0.0, 0.0, 0.0);
    scene.add( block );

    block2.position.set(0.0, 0.0, 0.0);
    scene.add( block2 );

    block3.position.set(0.0, 0.0, 0.0);
    scene.add( block3 );

    bar.position.set(0.0, 0.0, 0.0);
    scene.add( bar )
  
    var spotLight1 = new THREE.SpotLight( 0xffffff, 1 );
    spotLight1.position.set( -width/3, 200, 200 );
    var spotLight2 = new THREE.SpotLight( 0xffffff, 1 );
    spotLight2.position.set( -width/3, -200, 200 );
    spotLight2.rotation.set( -180, 0, 0 );

    //var directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
    //scene.add( directionalLight );

    var light = new THREE.HemisphereLight( 0xffffff, 0xffffff, 1 );
    scene.add( light );
    scene.add(spotLight1);

    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.bar = bar;

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

    var bar_set = Math.abs(this.props.v - this.props.vdes)
    this.bar.scale.set(1, bar_set + 0.01, 1)
    this.bar.position.set(0, bar_set/2.0, 0)

    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      
      <div
        style={{ width: '300px', height: '400px' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

function mapStateToProps(state) {
  
  //map state variables to the component's state 
  return {
    v: state.v,
    vdes: state.vdes
  }
}


export default connect(
  mapStateToProps,
  {} //add importing action functions here
)(Follow_vel);