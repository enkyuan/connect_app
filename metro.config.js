// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const { withMonicon } = require("@monicon/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

/** sample usage for icons array
 * icons: [
 *  "mdi:home",
 *  "feather:activity",
 *  "logos:active-campaign",
"lucide:badge-check",
*/
const configWithMonicon = withMonicon(config, {
    // Load all icons from the listed collections
    collections: [
        "ph",
        "fa6-brands"
    ],
})

module.exports = withNativeWind(configWithMonicon, { input: "./global.css" });
