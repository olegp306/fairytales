import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  StatusBar,
  SafeAreaView,
  Animated,
} from "react-native";

const { width, height } = Dimensions.get("screen");

const imageW = width * 0.7;
const imageH = imageW * 1.54;

const ScenesList = ({ scenes }) => {
  // console.log("ScenesList scenes", scenes[0]);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  onViewableItemsChanged = ({ viewableItems, changed }) => {
    console.log("Visible items are", viewableItems);
    console.log("Changed in this iteration", changed);
  };

  const renderItem = ({ item }) => (
    <View
      style={{
        width,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 50,
      }}
    >
      <Image
        source={item.image}
        style={{
          width: imageW,
          height: imageH,
          resizeMode: "cover",
          borderRadius: "16",
        }}
      />
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <View style={StyleSheet.absoluteFillObject}>
        {scenes.map((scene, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.Image
              key={`image-${index}`}
              source={scene.image}
              style={[StyleSheet.absoluteFillObject, { opacity }]}
              blurRadius={40}
            />
          );
        })}
      </View>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        data={scenes}
        keyExtractor={(i, index) => index}
        horizontal
        pagingEnabled
        renderItem={renderItem}
      ></Animated.FlatList>
    </View>
  );
};

export default ScenesList;

const styles = StyleSheet.create({});
