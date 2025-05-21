import { icons } from "@/constants/icons";
import React from "react";
import { Image, Pressable, TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  console.log("MOVIE API KEY:", process.env.EXPO_PUBLIC_MOVIE_API_KEY);
  return (
    <Pressable onPress={onPress}>
      <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
        <Image
          source={icons.search}
          className="size-5"
          resizeMode="contain"
          tintColor="#ab8bff"
        />
        <TextInput
          editable={false}
          pointerEvents="none"
          placeholder={placeholder}
          placeholderTextColor="#a8b5db"
          className="flex-1 ml-2 text-white"
        />
      </View>
    </Pressable>
  );
};

export default SearchBar;
