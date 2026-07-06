/* MinimalMirror secure config for MagicMirror v2.37.0. */
let config = {
	address: "localhost",
	port: 8080,
	basePath: "/",
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

	useHttps: false,
	httpsPrivateKey: "",
	httpsCertificate: "",

	cors: "disabled",
	hideConfigSecrets: true,

	language: "en",
	locale: "it-IT",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert"
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "calendar",
			header: "AGENDA",
			position: "bottom_left",
			config: {
				calendars: [
					{
						symbol: "person-running",
						url: "${SECRET_MINIMALMIRROR_ICAL_URL}"
					}
				]
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Corriere Della Sera",
						url: "https://xml2.corriereobjects.it/rss/homepage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "MMM-OClock",
			position: "top_left",
			config: {
				locale: "it-IT",
				canvasWidth: 300,
				canvasHeight: 300,
				centerColor: "#FFFFFF",
				centerR: 50,
				centerTextFormat: "YYYY",
				centerFont: "bold 20px Roboto",
				centerTextColor: "#000000",
				hands: ["second", "minute", "hour"],
				handType: "round",
				handWidth: [25, 25, 25],
				handTextFormat: ["s", "m", "h"],
				handFont: "bold 16px Roboto",
				useNail: true,
				nailSize: 40,
				nailBgColor: "#000000",
				nailTextColor: "#FFFFFF",
				space: 7,
				colorType: "hsv",
				colorTypeStatic: ["red", "orange", "yellow", "green", "blue", "purple"],
				colorTypeRadiation: ["#333333", "red"],
				colorTypeTransform: ["blue", "red"],
				colorTypeHSV: 0.25,
				handConversionMap: {
					year: "YYYY",
					month: "M",
					date: "D",
					week: "w",
					day: "e",
					hour: "h",
					minute: "m",
					second: "s"
				},
				secondsUpdateInterval: 1,
				birthYear: false,
				birthMonth: 0,
				lifeExpectancy: 85,
				linearLife: false,
				ageBarColor: [],
				scale: 1,
				canvasStyle: ""
			}
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 46.0711,
				lon: 13.2346
			}
		},
		{
			module: "MMM-NowPlayingOnSpotify",
			position: "bottom_right",
			config: {
				updatesEvery: 5,
				showCoverArt: true,
				clientID: "${SECRET_SPOTIFY_CLIENT_ID}",
				clientSecret: "${SECRET_SPOTIFY_CLIENT_SECRET}",
				refreshToken: "${SECRET_SPOTIFY_REFRESH_TOKEN}"
			}
		},
		{
			module: "MMM-QRCode",
			position: "bottom_right",
			config: {
				text: "https://github.com/KouateMuhamed/MinimalMirror",
				showRaw: true
			}
		}
	]
};

if (typeof module !== "undefined") {
	module.exports = config;
}
