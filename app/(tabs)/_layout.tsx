import { images } from '../../constants/images';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';

const TabIcon = ({ focused, icon, title }: any) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="mt-4 flex min-h-16 w-full min-w-[112px] flex-1 flex-row items-center justify-center overflow-hidden rounded-full">
        <Image source={icon} tintColor="#151312" className="size-5" />
        <Text className="text-secondary ml-2 text-base font-semibold">{title}</Text>
      </ImageBackground>
    );
  }

  return (
    <View className="mt-4 size-full items-center justify-center rounded-full">
      <Image source={icon} tintColor="#A8B5DB" />
    </View>
  );
};

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: '#0f0D23',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: 'absolute',
          overflow: 'hidden',
          borderWidth: 1,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
        }}
      />
      <Tabs.Screen
        name="Saved"
        options={{
          title: 'Saved',
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
        }}
      />
    </Tabs>
  );
};

export default _Layout;
