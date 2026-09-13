import { Ionicons } from "@expo/vector-icons";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function Index() {
  return (
    // SafeAreaView instead of View — keeps content clear of the notch/status bar on real devices
    <SafeAreaView style={styles.container}>
      {/* Nav bar: back icon | centered title stack | invisible spacer */}
      <View style={styles.navBar}>
        <Ionicons name="chevron-back" size={26} color="#000" />

        <View style={styles.navTitleWrap}>
          <Text style={styles.navSubtitle}>OOTD_EVERYDAY</Text>
          <Text style={styles.navTitle}>Posts</Text>
        </View>

        {/* Same width as the icon on the left — without this the title drifts right,
            since space-between only has 2 real elements to balance without it */}
        <View style={styles.navSpacer} />
      </View>
      {/* Post header: avatar circle | username + "via" text | options icon */}
      <View style={styles.postHeader}>
        {/* Using a placeholder icon instead of a real photo for the avatar —
      keeps this fast to build; swap for an <Image> later if you want
      a real profile picture instead */}
        <Ionicons name="person-circle" size={36} color="#ccc" />

        {/* flex: 1 here is the key decision — it makes this View greedily take
      up all the leftover horizontal space between the avatar and the
      "..." icon, which is what pushes ... all the way to the right edge
      without needing manual spacing math */}
        <View style={styles.postHeaderText}>
          <Text style={styles.username}>ootd_everyday</Text>
          <Text style={styles.viaText}>via frenchie_fry39</Text>
        </View>

        <Ionicons name="ellipsis-horizontal" size={20} color="#000" />
      </View>
      {/* Main post photo. require() needs a literal, hardcoded path —
    can't build this path from a variable, that's a Metro bundler
    limitation, not a React Native one */}
      <Image
        source={require("../../assets/images/post-photo.jpeg")}
        style={styles.postImage}
        resizeMode="cover"
      />
      {/* Icon row:heart/comment/share grouped on the left, bookmark alone on the right */}
      <View style={styles.iconRow}>
        <View style={styles.iconRowLeft}>
          <Ionicons name="heart-outline" size={26} color="#000" />
          <Ionicons name="chatbubble-outline" size={24} color="#000" />
          <Ionicons name="paper-plane-outline" size={24} color="#000" />
        </View>
        <Ionicons name="bookmark-outline" size={24} color="#000" />
      </View>
      {/* Likes line: a few overlapping small avatars + "Liked by X and N others" text */}
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
      {/* Caption: bold username + caption text, same line, wraps naturally if long */}
      <Text style={styles.caption}>
        <Text style={styles.captionBold}>frenchie_fry39</Text> Fresh shot on a
        sunny day! 🌤️
      </Text>
      {/* Comments section: "view all" link, 2 sample comments, timestamp */}
      <Text style={styles.viewComments}>View all 12 comments</Text>

      <Text style={styles.commentLine}>
        <Text style={styles.commentBold}>lil_wyatt838</Text> Awesome tones
      </Text>
      <Text style={styles.commentLine}>
        <Text style={styles.commentBold}>pia.in.a.pod</Text> Gorg. Love it! ❤️
      </Text>

      <Text style={styles.timestamp}>1 day ago</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // fill the full screen height, not just wrap content
    backgroundColor: "#fff",
  },
  navBar: {
    flexDirection: "row", // RN defaults to column — row needed for a horizontal bar
    alignItems: "center", // vertically center icon + text in the row
    justifyContent: "space-between", // spreads the 3 children to left / center / right
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth, // thinnest line possible, scales per screen density
    borderBottomColor: "#ddd",
  },
  navTitleWrap: {
    alignItems: "center", // center the two text lines above each other
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
    width: 26, // must match the Ionicons `size` above, or centering breaks
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 10, // spacing between avatar / text block / icon — cleaner than manual margins
  },
  postHeaderText: {
    flex: 1, // this is what right-aligns the ... icon
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
    width: "100%", // fill the screen edge-to-edge, like Instagram does
    height: screenWidth * (5 / 4), // manually recreates a 4:5 width:height ratio
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", //pushes the left group and bookmark to opposite edges
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  iconRowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16, //spacing between heart comment and share icons
  },
  likesRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingBottom: 4,
    gap: 6, // space between the avatar stack and the "Liked by..." text
  },
  avatarStack: {
    flexDirection: "row",
    alignItems: "center",
  },
  // Each avatar overlaps the one before it using a negative left margin —
  // pulling each icon backward on top of the previous one. The first one
  // has no overlap since there's nothing before it to overlap onto.
  avatarStackItem1: {
    zIndex: 3, // stacking order: 1st avatar drawn on top of 2nd and 3rd
  },
  avatarStackItem2: {
    marginLeft: -8, // pulls this circle 8px left, onto the first one
    zIndex: 2,
  },
  avatarStackItem3: {
    marginLeft: -8,
    zIndex: 1, // lowest — sits behind the other two
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
    lineHeight: 18, // slightly taller than fontSize — gives text room to breathe if it wraps to 2 lines
  },
  captionBold: {
    fontWeight: "700",
  },
  viewComments: {
    fontSize: 13,
    color: "#8e8e8e", // Instagram grays out this line since it's a secondary action, not primary content
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
});
