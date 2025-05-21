import { icons } from "@/constants/icons";
import React, { useEffect, useRef } from "react";
import { Image, TextInput, TouchableWithoutFeedback, View } from "react-native";

interface Props {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
  autoFocus?: boolean;
}

const SearchBar = ({
  placeholder,
  value,
  onChangeText,
  onPress,
  autoFocus = false,
}: Props) => {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      // ⚠️ Задержка необходима, иначе не успевает сфокусироваться после навигации
      const timeout = setTimeout(() => {
        inputRef.current?.focus();
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [autoFocus]);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
        <Image
          source={icons.search}
          className="w-5 h-5"
          resizeMode="contain"
          tintColor="#AB8BFF"
        />
        <TextInput
          ref={inputRef}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          className="flex-1 ml-2 text-white"
          placeholderTextColor="#A8B5DB"
          editable={!onPress}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchBar;
