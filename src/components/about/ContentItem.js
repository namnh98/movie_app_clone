import { Text, View } from 'react-native';
import React from 'react';
import styles from './ContentItemStyle';

const ContentItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Tag}>
        <Text style={styles.fontStyle}>14:40</Text>
        <Text style={styles.subfontStyle}>Рус</Text>
      </View>
      <View style={styles.TagContent}>
        <Text style={styles.Title}>Kinopark 8 IMAX Saryarka</Text>
        <View style={styles.SpanList}>
          <Text style={styles.SpanText}>3500 ₸</Text>
          <Text style={styles.SpanText}>1500 ₸</Text>
          <Text style={styles.SpanText}>2500 ₸</Text>
          <Text style={styles.SpanText}>4000 ₸</Text>
        </View>
      </View>
    </View>
  );
};

export default ContentItem;
