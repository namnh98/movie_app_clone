import { View, TouchableOpacity, ViewStyle, TextStyle, Text, Insets } from 'react-native';
import React from 'react';

interface ButtonProps {
  content: any;
  contentStyle?: ViewStyle | TextStyle;
  onPressButton?: () => void;
  buttonStyle?: ViewStyle;
  activeOpacity?: number;
  hitSlop?: any;
}

const AppButton = (props: ButtonProps) => {
  const {
    content,
    contentStyle = {},
    onPressButton,
    buttonStyle,
    activeOpacity,
    hitSlop = 2,
    ...rest
  } = props;

  const renderChildren = (content: any, style: ViewStyle | TextStyle) => {
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
    <TouchableOpacity
      onPress={onPressButton}
      style={buttonStyle}
      activeOpacity={activeOpacity}
      hitSlop={hitSlop}
      {...rest}>
      {renderChildren(content, contentStyle)}
    </TouchableOpacity>
  );
};

export default AppButton;
