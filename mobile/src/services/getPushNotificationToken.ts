import * as Notifications from 'expo-notifications';

/// Remote Push notifications (https://expo.dev/notifications)
//
/// Emulador/Simulator: Only Android.
/// Physical Device: Android and iOS.
///
/// Local Push notifications
//
/// Emulador/Simulator: Android and iOS.
/// Physical Device: Android and iOS.
export async function getPushNotificationToken() {
    const { granted } = await Notifications.getPermissionsAsync();

    if (!granted) {
        await Notifications.requestPermissionsAsync();

    }

    if (granted) {
        const pushToken = await Notifications.getExpoPushTokenAsync();
        console.log('NOTIFICATION TOKEN', pushToken.data);

        return pushToken.data;
    }
}
