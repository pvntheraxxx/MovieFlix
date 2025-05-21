import { icons } from "@/constants/icons";
import { fetchMovieDetails } from "@/services/api";
import useFetch from "@/services/useFetch";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

interface MovieInfoProps {
  label: string;
  value?: string | number | null;
}

const MovieInfo = ({ label, value }: MovieInfoProps) => (
  <View className="mt-4">
    <Text className="text-light-200 text-xs font-medium">{label}</Text>
    <Text className="text-light-100 text-sm font-semibold mt-1 leading-5">
      {value || "N/A"}
    </Text>
  </View>
);

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const { data: movie, loading } = useFetch(() =>
    fetchMovieDetails(id as string)
  );

  return (
    <View className="flex-1 bg-primary">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 80 }}>
        {/* Постер */}
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
          }}
          className="w-full h-[450px] rounded-b-3xl"
          resizeMode="cover"
        />

        {/* Контент */}
        <View className="px-4 mt-5">
          {/* Название */}
          <Text className="text-white text-xl font-bold mb-1">
            {movie?.title}
          </Text>

          {/* Дата и длительность */}
          <Text className="text-light-200 text-sm mb-2">
            {movie?.release_date?.split("-")[0]} • {movie?.runtime}m
          </Text>

          {/* Рейтинг */}
          <View className="flex-row items-center gap-x-2 mt-1">
            <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md">
              <Image source={icons.star} className="w-4 h-4 mr-1" />
              <Text className="text-white text-sm font-bold">
                {Math.round(movie?.vote_average ?? 0)}/10
              </Text>
            </View>
            <Text className="text-light-200 text-xs">
              ({movie?.vote_count} votes)
            </Text>
          </View>

          {/* Overview */}
          <MovieInfo label="Overview" value={movie?.overview} />

          {/* Жанры */}
          <MovieInfo
            label="Genres"
            value={movie?.genres?.map((g) => g.name).join(" • ") || "N/A"}
          />

          {/* Бюджет и сборы */}
          <View className="flex-row justify-between gap-x-5 mt-4">
            <MovieInfo
              label="Budget"
              value={`$${(movie?.budget ?? 0) / 1_000_000} million`}
            />
            <MovieInfo
              label="Revenue"
              value={`$${Math.round(
                (movie?.revenue ?? 0) / 1_000_000
              )} million`}
            />
          </View>

          {/* Продюсеры */}
          <MovieInfo
            label="Production Companies"
            value={
              movie?.production_companies?.map((c) => c.name).join(" - ") ||
              "N/A"
            }
          />
        </View>
      </ScrollView>

      {/* Кнопка назад */}
      <TouchableOpacity
        onPress={router.back}
        className="absolute bottom-5 left-5 right-5 bg-accent rounded-full py-3 flex-row justify-center items-center">
        <Image
          source={icons.arrow}
          className="w-5 h-5 mr-2 rotate-180"
          tintColor="#fff"
        />
        <Text className="text-white text-base font-semibold">Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieDetails;
