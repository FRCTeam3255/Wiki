# Configuring the Radio

## VividHosting (New - Black)

<img src="https://github.com/user-attachments/assets/85f24bad-50f7-4886-a943-8c965cca2e05" alt="VividHosting Radio">

1. Connect to directly the robot's radio via ethernet.

2. Navigate to the radio's configuration page. Try these IPs in order until one loads:

    | Order | IP | Reason |
    |-------|----|--------|
    | 1 | `http://10.32.55.1` | Team IP (`http://10.TE.AM.1`) — for team 3255 the digits split as **32** and **55**, so the IP is `10.32.55.1`. Replace with your team's numbers. |
    | 2 | `http://192.168.69.1` | Factory default radio IP |
    | 3 | `http://10.0.1.1` | Default after a firmware update (radio resets team number to 1) |

    !!! important
        You must be **disconnected from school or enterprise internet** before connecting to the radio — the radio's network will not be reachable otherwise.

    !!! important
        Use **`http://`**, not `https://`. The radio does not support HTTPS and the page will fail to load if you use a secure connection.

3. Configure the radio settings:
    - Enter 3255 for our team number
    - Enter our robot's name for the SSID Suffix
    - Enter our Wifi password for both WPA keys: Usually, we use **SuperNURDs**
    - For the robot radio, set mode to **Robot Radio Mode**
    - For the field radio, enter the same team number, **SSID Suffix**, and WPA keys, but choose **Access Point Mode**

![image](../.images/Software/Configuring_the_Radio/Screenshot%202024-11-09%20132551.png)

4. Configure!!

!!! important
    REQUIREMENT: PRINT AND ADD LABEL

    ```
    NAME: <SSID used>
    PASS: <password used (should be SuperNURDs)>
    ```

## Installing Firmware

1. Go to [FRC Vivid Hosting](https://frc-radio.vivid-hosting.net/miscellaneous/firmware-releases) to look for the latest firmware update.

2. Download the firmware file and copy the SHA-256 code underneath it.
![image](../.images/Software/Configuring_the_Radio/Screenshot%202024-11-09%20112613.png)

3. Connect to the robot's radio and navigate to its IP address.

4. Scroll down to firmware upload, select the recently downloaded firmware file, and paste in the SHA-256 code into the Checksum. 
![image](../.images/Software/Configuring_the_Radio/Screenshot%202024-11-09%20133050.png)

5. Click upload and wait 2-3 minutes while the radio is updating and rebooting. Do not turn off power during this process.

6. Once new firmware is installed, previous Wifi settings will not be saved and you will have to configure the radio again.

## OpenMesh (Old - White)

If you are using an OpenMesh radio (White Radio) please follow the <a href="https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-3/openmesh.html#using-the-openmesh-om5p-radio">FRC Guide</a>.

<img src="https://docs.wpilib.org/en/stable/_images/openmesh-radio.png">