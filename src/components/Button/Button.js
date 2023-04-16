import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Button = (props) => {
  const {
    TypeTagChild = '',
    content = null,
    ContentStyle,
    PatchImage,
    ImageStyle,
    ContainerStyle,
    RenderChilds,
    allotContent = false,
    ...reset
  } = props;

  const RenderChild = () => {
    switch (TypeTagChild) {
      case 'Text':
        return <Text style={ContentStyle}>{content}</Text>;
      case 'icon':
        return <Image source={PatchImage} style={ImageStyle} />;
      default:
        return <View />;
    }
  };

  return (
    <TouchableOpacity hitSlop={2} style={[ContainerStyle]} {...reset}>
      {allotContent && typeof RenderChilds === 'function'
        ? RenderChilds
        : RenderChild()}
    </TouchableOpacity>
  );
};

export default Button;
