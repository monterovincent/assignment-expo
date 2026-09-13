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
      {/* Main post photo. require() needs a literal, hardcoded path — you
    can't build this path from a variable, that's a Metro bundler
    limitation, not a React Native one */}
      <Image
        source={require("../../assets/images/post-photo.jpeg")}
        style={styles.postImage}
        resizeMode="cover"
      />
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
});
