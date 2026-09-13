import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

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
});
