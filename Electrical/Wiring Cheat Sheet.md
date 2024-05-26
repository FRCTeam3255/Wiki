# Wiring Cheat Sheet

!!! note

    This document serves as SuperNURDs wiring standards to match or exceed FRC standards.

!!! important

    Based on the [2024 Game Manual](https://firstfrc.blob.core.windows.net/frc2024/Manual/Sections/2024GameManual-08ROBOTConstructionRules.pdf)

## Gauge to Breaker Standard

| Wire Gauge | Breaker Size                                                                                                                                                                                                                                                                      |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10 AWG     | [40A 🟠 Breaker](https://www.revrobotics.com/rev-11-1863/)                                                                                                                                                                                                                       |
| 12 AWG     | [40A 🟠 Breaker](https://www.revrobotics.com/rev-11-1863/)                                                                                                                                                                                                                       |
| 18 AWG     | [20A 🟡 Breaker](https://www.revrobotics.com/rev-11-1861/)                                                                                                                                                                                                                       |
| 22 AWG     | 5A Breaker or [10A 🔴 Fuse](https://www.andymark.com/products/10-amp-mini-red-fuse?via=Z2lkOi8vYW5keW1hcmsvV29ya2FyZWE6Ok5hdmlnYXRpb246OlNlYXJjaFJlc3VsdHMvJTdCJTIyYnV0dG9uJTIyJTNBJTIyc2VhcmNoJTIyJTJDJTIycSUyMiUzQSUyMmZ1c2UlMjIlMkMlMjJ1dGY4JTIyJTNBJTIyJUUyJTlDJTkzJTIyJTdE) |

## Device Connection Details

### Standard Components

| Device                                                                                                                                                                                                                                                                            | Wire Gauge                                 | PDH Port                         | Voltage/Amps   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | -------------------------------- | -------------- |
| [Battery](https://www.andymark.com/products/mk-es17-12-12v-sla-battery-set-of-2?via=Z2lkOi8vYW5keW1hcmsvV29ya2FyZWE6Ok5hdmlnYXRpb246OlNlYXJjaFJlc3VsdHMvJTdCJTIyYnV0dG9uJTIyJTNBJTIyc2VhcmNoJTIyJTJDJTIycSUyMiUzQSUyMkJhdHRlcnklMjIlMkMlMjJ1dGY4JTIyJTNBJTIyJUUyJTlDJTkzJTIyJTdE) | 4 AWG ^[6 AWG minimum]                     | Main Power Port                  | 12V            |
| [Kraken Motors](https://wcproducts.com/products/kraken)                                                                                                                                                                                                                           | 10 AWG                                     | Breaker Port (40A 🟠)           | 12V / 40A      |
| [Falcon Motors](https://store.ctr-electronics.com/falcon-500-powered-by-talon-fx/)                                                                                                                                                                                                | 12 AWG                                     | Breaker Port (40A 🟠)           | 12V / 40A      |
| [CANdle (Power)](https://store.ctr-electronics.com/candle/)                                                                                                                                                                                                                       | 18 AWG                                     | Breaker Port (20A 🟡)           | 6V-28V / 6A    |
| [roboRIO](https://www.ni.com/docs/en-US/bundle/roborio-frc-specs/page/specs.html)                                                                                                                                                                                                 | 18 AWG ^[22 AWG minimum]                   | Fuse Port (10A 🔴)              | 7V-16V / \~4A  |
| [CANCoder (Power)](https://store.ctr-electronics.com/cancoder/)                                                                                                                                                                                                                   | 18 AWG ^[22 AWG Multi-spliced into 18 AWG] | Fuse Port (10A 🔴)              | 6V-16V / 0.06A |
| [Limelight (POE)](https://limelightvision.io/collections/products/products/limelight-3g)                                                                                                                                                                                          | 18 AWG ^[22 AWG actual] (POE injector)     | Fuse Port (10A 🔴) (Switchable) | 4.1V-16V       |
| [Pigeon 2](https://store.ctr-electronics.com/pigeon-2/)                                                                                                                                                                                                                           | 18 AWG ^[22 AWG actual]                    | Fuse Port (10A 🔴)              | 6V–28V / 0.05A |
| [CAN Wire](https://wcproducts.com/products/wire)                                                                                                                                                                                                                                  | 18 AWG ^[22 AWG actual]                    | CAN PORT 🟢🟡                  |                |

### Nonstandard Components

| Device                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Wire Gauge                | PDH Port                         | Voltage/Amps  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | -------------------------------- | ------------- |
| [Buckboost](https://www.amazon.com/dp/B07YZBLCY5?ref_=cm_sw_r_mwn_dp_RTA53JTPWSH5JCAQQY3N&language=en-US&th=1)                                                                                                                                                                                                                                                                                                                                                                                 | 18 AWG ^=[16 AWG actual]  | Fuse Port (10A 🔴) (Switchable) | 8V-40V / 3A   |
| [RPM](https://www.revrobotics.com/rev-11-1856/)                                                                                                                                                                                                                                                                                                                                                                                                                                                | 18 AWG ^=[22 AWG minimum] | Fuse Port (10A 🔴)              | 5V-18V / 1A   |
| [Brainbox](https://www.digikey.com/en/products/detail/brainboxes/SW-005/10707220?utm_adgroup=&utm_source=google&utm_medium=cpc&utm_campaign=PMax%20Shopping_Product_Low%20ROAS%20Categories&utm_term=&utm_content=&utm_id=go_cmp-20243063506_adg-_ad-__dev-c_ext-_prd-10707220_sig-CjwKCAiAgeeqBhBAEiwAoDDhn4cIbYoBl8Z6SP9xnkMEmNVM-WrD_xpfsFmYmj6y0Cb7H9kOBvuzMhoCeBUQAvD_BwE&gad_source=1&gclid=CjwKCAiAgeeqBhBAEiwAoDDhn4cIbYoBl8Z6SP9xnkMEmNVM-WrD_xpfsFmYmj6y0Cb7H9kOBvuzMhoCeBUQAvD_BwE) | 18 AWG                    | Breaker Port (20A 🟡)           | 5V-30V / 0.1A |

## PDH Details

| PDH Port | Quantity |
| -------- | -------- |
| Fuse Ports | 3 |
| Fuse Ports (Switchable) | 1 |
| Breaker Ports | 20 (18 for motors, 2 for system) |
