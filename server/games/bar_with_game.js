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

    var plateMaterial = new THREE.MeshBasicMaterial( { color: 0x86a5d6 } );
    var barMaterial = new THREE.MeshBasicMaterial( { color: 0xd1d1d1 } );
    var desMaterial = new THREE.MeshBasicMaterial( { color: 0xff7272, transparent: true, opacity: 0.5 } );
    var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x86a5d6 });

    var plate = new THREE.Mesh( geometry, plateMaterial );
    var bar = new THREE.Mesh( geometry, barMaterial );
    var desPos = new THREE.Mesh( geometry, desMaterial );
    var cube = new THREE.Mesh( geometry, cubeMaterial)

    plate.position.set(width/8, 0.0, 0.0);
    plate.scale.set(1.25, 0.25, 1.0);

    bar.position.set(width/8, 0.0, -25);
    bar.scale.set(0.75, 4.0, 1.0);

    desPos.position.set(width/8, 0.0, 50);
    desPos.scale.set(1.5, 0.5, 1.0);

    cube.position.set( -width/8, 0.0, 0.0);

    var spotLight1 = new THREE.SpotLight( 0xffffff, 1 );
    spotLight1.position.set( -width/3, 200, 200 );
    var light = new THREE.HemisphereLight( 0xffffff, 0xffffff, 1 );
    scene.add( light );
    scene.add(spotLight1)

    group.add( plate );
    scene.add( bar );
    scene.add(desPos);
    scene.add(cube);


    this.scene = scene
    this.camera = camera
    this.renderer = renderer

    this.plate = plate
    this.bar = bar
    this.desPos = desPos
    this.cube = cube

    this.group = group;
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

    this.desPos.position.y = this.props.xdes / 40.0
    this.group.position.y = this.props.x / 40.0

    if(this.group.position.y > this.desPos.position.y - 30 && this.group.position.y < this.desPos.position.y + 30)
    {
      this.points += 1;
      this.desPos.material.color.setHex(0x7fffa3)

      //var html_text = "Points: " + points;
      //text2.innerHTML = html_text

      this.cube.rotation.x += 0.008;
      this.cube.rotation.y += 0.008;
      this.cube.rotation.z += 0.008;

    }else{
      this.desPos.material.color.setHex(0xff7272)
    }

/*
    this.cube.position.x = this.props.xdes 
    this.cube2.position.x = this.props.x 

    if(this.cube2.position.x > this.cube.position.x - 50 && this.cube2.position.x < this.cube.position.x + 50){
      this.points += 1;
      console.log(this.points);
    }
 */

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