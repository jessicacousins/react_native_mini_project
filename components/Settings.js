import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";

const SettingsOption = ({ title, onPress }) => (
  <TouchableOpacity style={styles.option} onPress={onPress}>
    <Text style={styles.optionText}>{title}</Text>
  </TouchableOpacity>
);

const SettingsScreen = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  const toggleNotificationsSwitch = () =>
    setIsNotificationsEnabled((previousState) => !previousState);

  // TODO: need to create rest of this later
  const handleProfile = () => console.log("Profile");
  const handleAccountInformation = () => console.log("Account Information");
  const handleLoginAndSecurity = () => console.log("Login & Security");
  const handleDevices = () => console.log("Devices");
  const handleLogout = () => console.log("Logout");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.setting}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isNotificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleNotificationsSwitch}
          value={isNotificationsEnabled}
        />
      </View>

      <SettingsOption title="Profile" onPress={handleProfile} />
      <SettingsOption
        title="Account Information"
        onPress={handleAccountInformation}
      />
      <SettingsOption
        title="Login & Security"
        onPress={handleLoginAndSecurity}
      />
      <SettingsOption title="Devices" onPress={handleDevices} />
      <SettingsOption title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  settingText: {
    fontSize: 18,
  },
  option: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  optionText: {
    fontSize: 16,
  },
});

export default SettingsScreen;
