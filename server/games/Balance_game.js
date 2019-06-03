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
    scene.background = new THREE.Color( 0xffffff );
    
    var camera = new THREE.OrthographicCamera( - width / 2, width / 2, height / 2, - height / 2, -100, 500000);
    camera.position.set( 0,0,5);
    scene.add( camera );

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)

    var columnMaterial = new THREE.MeshBasicMaterial( { color: 0xAFAFAF} );
    var groundMaterial = new THREE.MeshBasicMaterial( { color: 0x137200} );
    var characterMaterial = new THREE.MeshBasicMaterial( { color: 0x00A9E8} );
    var ballMaterial = new THREE.MeshBasicMaterial( { color: 0xE86D00} );

    //var column = new THREE.Mesh( new THREE.BoxBufferGeometry( 50, 200, 10 ), columnMaterial );
    //column.position.set(0,-100,0)
    //scene.add(column)

    var ground = new THREE.Mesh( new THREE.BoxBufferGeometry( 1000, 50, 10 ), groundMaterial );
    ground.position.set(0,-175,0)
    scene.add(ground)

    var character = new THREE.Mesh(new THREE.CircleBufferGeometry( 25, 32 ), characterMaterial );
    character.position.set(39,25,0)
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

    var textureLoader = new THREE.TextureLoader();

    var column_texture = textureLoader.load( "static/textures/column.png" );
    var column_mat = new THREE.MeshBasicMaterial( { color: 0xffffff, map: column_texture } );
    var column = new THREE.Mesh(new THREE.PlaneGeometry(130, 180), column_mat);
    column.position.set(5,-60,-200)
    scene.add(column)

    /*var grass_texture = textureLoader.load( "static/textures/grass_pic.jpg" );
    var grass_mat = new THREE.MeshBasicMaterial( { color: 0xffffff, map: grass_texture } );
    var grass = new THREE.Mesh(new THREE.PlaneGeometry(200, 100), grass_mat);
    grass.position.set(0,0,0)
    scene.add(grass)
    */

    var grass_geometry = new THREE.PlaneBufferGeometry( 2, 20 )

    /*for (var i = 0; i < 400; i++)
    {
      var material = new THREE.MeshBasicMaterial( {color: new THREE.Color().setHSL( 0.3, 0.75, ( i / 400 ) * 0.4 + 0.1 ), } );
      var grass_height = 50*Math.random() + 20;
      var grass_geometry = new THREE.PlaneBufferGeometry( 2, grass_height)
      var mesh = new THREE.Mesh(grass_geometry, material)
      mesh.position.set( 500 - 1000*Math.random() , -190 + grass_height/2, 10)
      mesh.rotation.set(0.0, 0.0 , Math.random()*0.25)
      scene.add(mesh)
    }*/

    this.scene = scene
    this.camera = camera
    this.renderer = renderer

    this.character = character
    this.x_prev = 0;
    this.v_horizontal = 0;
    this.v_verticle = 0;
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

    if(Math.abs(this.character.position.x)>40)
    {
      //ball should fall, game over
      this.character.position.x += this.v_horizontal //player continues to move horizontally 
      this.v_verticle += 9.8*0.01; //accelerate down at  approximately g
      if(this.character.position.y > -125) this.character.position.y -= this.v_verticle; //change player verticle position

      console.log('fall')
    }
    else
    {
      //ball has not fallen, game still on
      this.x_prev = this.character.position.x
      //this.character.position.x = this.props.x - this.props.xdes
      this.ball.position.x = this.props.x_ball - this.props.xdes
      this.v_horizontal = (this.character.x - this.x_prev)
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