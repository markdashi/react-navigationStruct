/**
 * @providesModule TextTools
 */
import React from 'react';
import { Text, StyleSheet} from 'react-native';

export const H3 = ({title, style, numberOfLines, children}) => <Text style={[styles.H3, style]} numberOfLines={numberOfLines || 0}>{title || children}</Text>;

export const Tip = ({title, style, numberOfLines, children}) => <Text style={[styles.tip, style]} numberOfLines={numberOfLines || 0}>{title || children}</Text>;

const styles = StyleSheet.create({
    H3: {
        fontSize: 16,
        fontWeight: '300',
        color: 'black',
    },
    tip: {
        fontSize: 11,
        color: 'black',
    },
});