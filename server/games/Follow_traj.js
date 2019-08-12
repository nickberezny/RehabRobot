import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as THREE from 'three'
//import * as OBJLoader from 'three-obj-loader';
import { setParam } from "../src/actions";
//OBJLoader(THREE);

import RunButton from '../components/Generic/RunButton'

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
    
    var text5;
    var Geometry4;
    var Geometry3;
    var Geometry2;
    var Geometry1;

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

    var geometry = new THREE.BoxGeometry( 70, 70, 70 );

    var textMaterial = new THREE.MeshBasicMaterial( { color: 0x86a5d6 } );
    var plateMaterial = new THREE.MeshBasicMaterial( { color: 0x86a5d6 } );
    var barMaterial = new THREE.MeshBasicMaterial( { color: 0xd1d1d1 } );
    var desMaterial = new THREE.MeshBasicMaterial( { color: 0xff7272, transparent: true, opacity: 0.7 } );

    var plate = new THREE.Mesh( geometry, plateMaterial );
    var bar = new THREE.Mesh( geometry, barMaterial );
    var desPos = new THREE.Mesh( geometry, desMaterial );

    plate.position.set(0.0, 0.0, 50);
    plate.scale.set(1.25, 0.25, 1.0);

    bar.position.set(0.0, 0.0, -200);
    bar.scale.set(0.75, 4.0, 1.0);

    desPos.position.set(0.0, 0.0, 10);
    desPos.scale.set(1.5, 0.75, 1.0);

    var spotLight1 = new THREE.SpotLight( 0xffffff, 1 );
    spotLight1.position.set( -width/3, 200, 200 );
    var light = new THREE.HemisphereLight( 0xffffff, 0xffffff, 1 );
    scene.add( light );
    scene.add(spotLight1)

    //group.add( plate );
    scene.add( bar );
    scene.add(desPos);
    scene.add(plate);

    var loader = new THREE.FontLoader();
    this.loader = loader;

    loader.load( 'static/fonts/helvetiker_regular.typeface.json', function ( font ) {
       var Geometry5 = new THREE.TextGeometry( '5', {
        font: font,
        size: 50,
        height: 10,
        curveSegments: 12,
        bevelEnabled: false,
      } );

       text5 = new THREE.Mesh( Geometry5, textMaterial );
       text5.position.set(-20,0,0)
    });

    this.scene = scene
    this.camera = camera
    this.renderer = renderer

    this.plate = plate
    this.bar = bar
    this.desPos = desPos
    this.points = points

    this.textMaterial = textMaterial
    this.clock = new THREE.Clock()
    this.timer = 0.0;
    this.start_game = 0;
    
    this.mount.appendChild(this.renderer.domElement)

    console.log('Component Mount')

    this.start()

    console.log('Component Mount Done')
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

    if(!this.start_game)
    {
      //this.props.setParam('xdes', this.props.x_end)
      //this.props.setParam('x', this.props.x_end)
      this.props.setParam('xdes', 1000)
      this.props.setParam('x', 400)
      this.timer += this.clock.getDelta()
      
      var current_time = Math.round(5.8 - this.timer).toString()
      var textMaterial = this.textMaterial
      var scene = this.scene
      var text;
      var start_game = 0;

      if(this.timer > 4.9) 
      {
        this.start_game = 1;
        start_game = 1;
      }

      this.loader.load( 'static/fonts/helvetiker_regular.typeface.json', function ( font ) {
       var Geometry5 = new THREE.TextGeometry( current_time, {
        font: font,
        size: 50,
        height: 10,
        curveSegments: 12,
        bevelEnabled: false,
      } );

       var selectedObject = scene.getObjectByName('text');
       scene.remove(selectedObject)

       if(start_game == 0)
       {
         text = new THREE.Mesh( Geometry5, textMaterial );
         text.position.set(-20,0,0)
         text.name = 'text'
         scene.add(text)
        }

     });

      

    }
       
    
    this.factor = 280.0 / this.props.x_end
    //console.log(this.props.x_end)
    //console.log(this.factor)
    this.desPos.position.y = this.factor*this.props.xdes - 140.0
    this.plate.position.y = this.factor*this.props.x - 140.0

    //console.log(this.plate.position.y)

    if(this.plate.position.y > this.desPos.position.y - this.props.range && this.plate.position.y < this.desPos.position.y + this.props.range)
    {
      this.desPos.material.color.setHex(0x7fffa3)
      if(this.points < 6000) this.points += 2;   
    }else{
      this.desPos.material.color.setHex(0xff7272)
      if(this.points > 0) this.points -= 4;
    }

    var range = -(this.points-6000)*30.0/6000.0 + 5.0;
    this.props.setParam('range', range)

    this.desPos.scale.set(1.5, 0.75*((this.props.range+7)/35.0), 1.0);

    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
   
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div style={{ width: '400px', height: '800px' }} ref={(mount) => { this.mount = mount }} />
    )
  }
}

function mapStateToProps(state) {
  
  //map state variables to the component's state 
  return {
    x: state.x,
    xdes: state.xdes,
    x_end: state.x_end,
    range: state.range,
  }
}


export default connect(
  mapStateToProps,
  {setParam} //add importing action functions here
)(Follow_traj);