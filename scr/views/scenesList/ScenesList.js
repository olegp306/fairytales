import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  StatusBar,
  SafeAreaView,
  Animated,
  FlatList,
} from "react-native";

const { width, height } = Dimensions.get("screen");

const imageW = width * 0.7;
const imageH = imageW * 1.54;

const ScenesList = ({ scenes }) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const onViewableItemsChanged = ({ viewableItems, changed }) => {
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
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 20,
      }}
    >
      <Image
        source={item.image}
        style={{
          width: imageW,
          height: imageH,
          resizeMode: "cover",
          borderRadius: 16,
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
              blurRadius={10}
            />
          );
        })}
      </View>
      <Animated.FlatList
        data={scenes}
        keyExtractor={(_, index) => index.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        horizontal
        pagingEnabled
        renderItem={renderItem}
      />
    </View>
  );
};

export default ScenesList;

const styles = StyleSheet.create({});
