import { View, TouchableOpacity, ViewStyle, TextStyle, Text } from 'react-native';
import React from 'react';

interface ButtonProps {
  content?: any;
  contentStyle?: ViewStyle | TextStyle;
  onPressButton?: () => void;
}

const AppButton = (props: ButtonProps) => {
  const { content, contentStyle, onPressButton, ...rest } = props;

  const renderChildren = (content, style) => {
    if (!content) {
      return null;
    }

    switch (typeof content) {
      case 'string':
      case 'number':
        return (
          <Text style={style} allowFontScaling={false}>
            {content}
          </Text>
        );

      case 'function':
        return <View style={style}>{content?.()}</View>;

      default:
        return <View />;
    }
  };

  return (
    <TouchableOpacity onPress={onPressButton} {...rest}>
      {renderChildren(content, contentStyle)}
    </TouchableOpacity>
  );
};

export default AppButton;
