import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function Index() {
  //IsLiked starts false(outline heart , Black), set ISLiked only
  const [isLiked, setIsLiked] = useState(false);
  //Runs on every tap
  function handleHeartPress() {
    setIsLiked((prev) => !prev);
    Alert.alert("Alert", "Alert Button pressed");
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* Nav bar: back icon | centered title stack | invisible spacer */}
      <View style={styles.navBar}>
        <Ionicons name="chevron-back" size={26} color="#000" />

        <View style={styles.navTitleWrap}>
          <Text style={styles.navSubtitle}>OOTD_EVERYDAY</Text>
          <Text style={styles.navTitle}>Posts</Text>
        </View>

        <View style={styles.navSpacer} />
      </View>

      {/* Everything below scrolls if it's taller than the screen; the tab
          bar sits outside this, further down, so it always stays visible */}
      <ScrollView style={styles.scrollArea}>
        {/* Post header: avatar circle | username + "via" text | options icon */}
        <View style={styles.postHeader}>
          <Ionicons name="person-circle" size={36} color="#ccc" />

          <View style={styles.postHeaderText}>
            <Text style={styles.username}>ootd_everyday</Text>
            <Text style={styles.viaText}>via frenchie_fry39</Text>
          </View>

          <Ionicons name="ellipsis-horizontal" size={20} color="#000" />
        </View>

        {/* Main post photo */}
        <Image
          source={require("../../assets/images/post-photo.jpeg")}
          style={styles.postImage}
          resizeMode="cover"
        />

        {/* Icon row: heart/comment/share grouped left, bookmark alone on the right */}
        <View style={styles.iconRow}>
          <View style={styles.iconRowLeft}>
            <Pressable onPress={handleHeartPress}>
              <Ionicons
                name={isLiked ? "heart" : "heart-outline"}
                size={26}
                color={isLiked ? "red" : "#000"}
              />
            </Pressable>
            <Ionicons name="chatbubble-outline" size={24} color="#000" />
            <Ionicons name="paper-plane-outline" size={24} color="#000" />
          </View>
          <Ionicons name="bookmark-outline" size={24} color="#000" />
        </View>

        {/* Likes line: overlapping avatars + "Liked by X and N others" */}
        <View style={styles.likesRow}>
          <View style={styles.avatarStack}>
            <Ionicons
              name="person-circle"
              size={18}
              color="#ccc"
              style={styles.avatarStackItem1}
            />
            <Ionicons
              name="person-circle"
              size={18}
              color="#bbb"
              style={styles.avatarStackItem2}
            />
            <Ionicons
              name="person-circle"
              size={18}
              color="#aaa"
              style={styles.avatarStackItem3}
            />
          </View>

          <Text style={styles.likesText}>
            Liked by <Text style={styles.likesTextBold}>paisley.print.48</Text>{" "}
            and 7 others
          </Text>
        </View>

        {/* Caption */}
        <Text style={styles.caption}>
          <Text style={styles.captionBold}>frenchie_fry39</Text> Fresh shot on a
          sunny day! 🌤️
        </Text>

        {/* Comments section */}
        <Text style={styles.viewComments}>View all 12 comments</Text>

        <Text style={styles.commentLine}>
          <Text style={styles.commentBold}>lil_wyatt838</Text> Awesome tones
        </Text>
        <Text style={styles.commentLine}>
          <Text style={styles.commentBold}>pia.in.a.pod</Text> Gorg. Love it! ❤️
        </Text>

        <Text style={styles.timestamp}>1 day ago</Text>
      </ScrollView>

      {/* Tab bar sits OUTSIDE the ScrollView — a fixed sibling, always visible */}
      <View style={styles.tabBar}>
        <Ionicons name="home-outline" size={26} color="#000" />
        <Ionicons name="search-outline" size={26} color="#000" />
        <Ionicons name="film-outline" size={26} color="#000" />
        <Ionicons name="bag-outline" size={26} color="#000" />
        <Ionicons name="person-circle-outline" size={26} color="#000" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ddd",
  },
  navTitleWrap: {
    alignItems: "center",
  },
  navSubtitle: {
    fontSize: 10,
    fontWeight: "600",
    color: "#8e8e8e",
  },
  navTitle: {
    fontSize: 16,
    fontWeight: "700",
  },
  navSpacer: {
    width: 26,
  },
  scrollArea: {
    flex: 1,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 10,
  },
  postHeaderText: {
    flex: 1,
  },
  username: {
    fontSize: 14,
    fontWeight: "700",
  },
  viaText: {
    fontSize: 12,
    color: "#8e8e8e",
  },
  postImage: {
    width: "100%",
    height: screenWidth * (5 / 4),
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  iconRowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  likesRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingBottom: 4,
    gap: 6,
  },
  avatarStack: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarStackItem1: {
    zIndex: 3,
  },
  avatarStackItem2: {
    marginLeft: -8,
    zIndex: 2,
  },
  avatarStackItem3: {
    marginLeft: -8,
    zIndex: 1,
  },
  likesText: {
    fontSize: 13,
    color: "#000",
  },
  likesTextBold: {
    fontWeight: "700",
  },
  caption: {
    fontSize: 13,
    paddingHorizontal: 12,
    paddingBottom: 4,
    lineHeight: 18,
  },
  captionBold: {
    fontWeight: "700",
  },
  viewComments: {
    fontSize: 13,
    color: "#8e8e8e",
    paddingHorizontal: 12,
    paddingBottom: 4,
  },
  commentLine: {
    fontSize: 13,
    paddingHorizontal: 12,
    paddingBottom: 2,
  },
  commentBold: {
    fontWeight: "700",
  },
  timestamp: {
    fontSize: 11,
    color: "#8e8e8e",
    paddingHorizontal: 12,
    paddingTop: 4,
    paddingBottom: 10,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#ddd",
  },
});
