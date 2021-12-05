import React, { useEffect } from "react";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  Animated,
  FlatList,
  TouchableOpacity,
} from "react-native";

const ScenesList = ({
  scenes,
  onSlidePress,
  onChangeSlide,
  sceneNumber = 0,
  orientation,
}) => {
  const { width, height } = Dimensions.get("screen");
  const imageW = orientation === "portrait" ? width * 0.9 : width * 0.9;
  const imageH = orientation === "portrait" ?  imageW * 1.54: height * 0.95

  const flatListRef = React.useRef();
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const onViewRef = React.useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems[0]) {
      onChangeSlide(viewableItems[0].index);
    }
  });

  const viewConfigRef = React.useRef({
    minimumViewTime: 300,
    itemVisiblePercentThreshold: 50,
  });

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
      <TouchableOpacity onPress={onSlidePress} opacity={0.1}>
        <Image
          source={item.image}
          style={{
            width: imageW,
            height: imageH,
            resizeMode: "cover",
            borderRadius: 16,
          }}
        />
      </TouchableOpacity>
    </View>
  );

  useEffect(() => {
    flatListRef.current.scrollToIndex({
      animated: true,
      index: sceneNumber,
      viewOffset: 0,
      viewPosition: 0,
    });
  }, [sceneNumber]);

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
            <TouchableOpacity onPress={onSlidePress} opacity={0.1}>
              <Animated.Image
                key={`image-${index}`}
                source={scene.image}
                style={[StyleSheet.absoluteFillObject, { opacity }]}
                blurRadius={10}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <Animated.FlatList
        data={scenes}
        ref={flatListRef}
        keyExtractor={(_, index) => index.toString()}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        horizontal
        disableIntervalMomentum
        pagingEnabled
        renderItem={renderItem}
      />
    </View>
  );
};

export default ScenesList;

const styles = StyleSheet.create({});
