import React from 'react';
import { Text, View } from 'react-native';
import { Camera, Permissions, FaceDetector } from 'expo';
import CameraComponent from './components/Camera';

export default class HomeScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      const options = { mode: FaceDetector.Constants.Mode.fast }
      const result = await FaceDetector.detectFacesAsync(photo.uri, options);
      
      if (result.faces.length) {
        this.props.navigation.navigate('Quiz');
      }
    }
  };

  startQuiz = () => {

  };

  render() {
    const {
      hasCameraPermission,
      type
    } = this.state;

    return (
      hasCameraPermission === null
        ?
        <View />
        :
        hasCameraPermission === false
          ?
          <Text>No access to camera</Text>
          :
          <CameraComponent
            type={type}
            snap={this.snap}
            parentThis={this}
          />
    );
  }
}