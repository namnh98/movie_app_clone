import { Text, View } from 'react-native';
import React from 'react';
import styles from './ModalViewCSStyle';

const ModalViewCS = (props) => {
  const {
    title = true,
    SubTitle = true,
    renderContent,
    containerText2,
    titleContent = '',
    SubContent = '',
  } = props;

  const renderTitle = () => {
    return (
      <View style={[styles.containerText, containerText2]}>
        <Text style={styles.Title}>{titleContent}</Text>
        {SubTitle ? <Text style={styles.SubTitle}>{SubContent}</Text> : null}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {title ? renderTitle() : null}
      {renderContent}
    </View>
  );
};

export default ModalViewCS;
