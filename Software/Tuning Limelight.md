# Tuning Limelight

Follow these steps to tune the Limelight camera exposure and sensor gain settings for optimal AprilTag detection.

## Prerequisites
- Laptop with the [Limelight Hardware Client](https://docs.limelightvision.io/docs/docs-limelight/getting-started/limelight-hardware-client) installed
- Robot powered on and connected to the network

## Steps

1. **Find Limelight IPs**
    - Open the Limelight Hardware Client on your laptop
    - The client will display the IP addresses of all connected Limelights

2. **Open the Limelight Tuner**
    - Click on a Limelight's IP address in the Hardware Client to open the tuner in your browser
    - Alternatively, if the Limelight is connected via USB, navigate directly to [http://172.28.0.1:5801/](http://172.28.0.1:5801/) in your browser

3. **Set Initial Values**
    - Set **Exposure** to `0`
    - Set **Sensor Gain** to `0`

4. **Increase Sensor Gain**
    - Gradually increase **Sensor Gain** until the AprilTags are clearly visible in the camera feed

5. **Adjust Exposure if Needed**
    - If you reach the maximum **Sensor Gain** and the tags are still not visible, begin increasing **Exposure** until the tags can be detected
