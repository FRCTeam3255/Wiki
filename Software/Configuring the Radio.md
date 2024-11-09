# Configuring the Radio

1. Connect to directly the robot's radio via ethernet.

2. Navigate to the robot's IP address: **10.TE.AM.1**, where **TE.AM** is its team number. Usually, our IP would be **10.32.55.1** if our team number hasn't been changed for an offseason event. If that doesn't work, the default radio IP address is **192.168.69.1** but after a firmware update, it can also default the team number to 1, so also try **10.0.1.1** if the previous IP didn't work.

3. ![image](../.images/Software/Configuring_the_Radio/Screenshot%202024-11-09%20132551.png)
- Enter 3255 for our team number
- Enter our robot's name for the SSID Suffix
- Enter our Wifi password for both WPA keys: Usually, we use **SuperNURDs**

4. Configure!!

## Installing Firmware

1. Go to [FRC Vivid Hosting](https://frc-radio.vivid-hosting.net/miscellaneous/firmware-releases) to look for the latest firmware update.

2. ![image](../.images/Software/Configuring_the_Radio/Screenshot%202024-11-09%20112613.png)
Download the firmware file and copy the SHA-256 code underneath it.

3. Connect to the robot's radio and navigate to its IP address.

4. ![image](../.images/Software/Configuring_the_Radio/Screenshot%202024-11-09%20133050.png)
Scroll down to firmware upload, select the recently downloaded firmware file, and paste in the SHA-256 code into the Checksum. 

5. Click upload and wait 2-3 minutes while the radio is updating and rebooting. Do not turn off power during this process.

6. Once new firmware is installed, previous Wifi settings will not be saved and you will have to configure the radio again. 