# Wiring Cheat Sheet

> [!Note]
> This document serves as SuperNURDs wiring standards to match or exceed FRC stanards.
 
> [!Important]
> Based on the [2023 Game Manual](https://firstfrc.blob.core.windows.net/frc2023/Manual/Sections/2023FRCGameManual-09.pdf)

## Gauge to Breaker Standard
| Wire Gauge | Breaker Size |
| ---------- | ------------ |
| 12 AWG | [40A](https://www.revrobotics.com/rev-11-1863/) Breaker |
| 18 AWG | [20A](https://www.revrobotics.com/rev-11-1861/) Breaker |
| 22 AWG | 5A Breaker or 10A Fuse |

## Device Connection Details
| Device | Voltage/Amps | Wire Gauge | PDH Port |
| ------ | ------------ | ---------- | -------- |
| [Battery](https://www.andymark.com/products/mk-es17-12-12v-sla-battery-set-of-2?via=Z2lkOi8vYW5keW1hcmsvV29ya2FyZWE6Ok5hdmlnYXRpb246OlNlYXJjaFJlc3VsdHMvJTdCJTIyYnV0dG9uJTIyJTNBJTIyc2VhcmNoJTIyJTJDJTIycSUyMiUzQSUyMkJhdHRlcnklMjIlMkMlMjJ1dGY4JTIyJTNBJTIyJUUyJTlDJTkzJTIyJTdE) | 12V | 6 AWG | Main Power Port |
| [Motors](https://wcproducts.com/products/kraken) | 12V / 40A | 12 AWG | Breaker Port ([40A](https://www.revrobotics.com/rev-11-1863/)) |
| [CANdle (Power)](https://store.ctr-electronics.com/candle/) | 6V-28V / 6A | 18 AWG | Breaker Port ([20A](https://www.revrobotics.com/rev-11-1861/)) |
| [Brainbox](https://www.digikey.com/en/products/detail/brainboxes/SW-005/10707220?utm_adgroup=&utm_source=google&utm_medium=cpc&utm_campaign=PMax%20Shopping_Product_Low%20ROAS%20Categories&utm_term=&utm_content=&utm_id=go_cmp-20243063506_adg-_ad-__dev-c_ext-_prd-10707220_sig-CjwKCAiAgeeqBhBAEiwAoDDhn4cIbYoBl8Z6SP9xnkMEmNVM-WrD_xpfsFmYmj6y0Cb7H9kOBvuzMhoCeBUQAvD_BwE&gad_source=1&gclid=CjwKCAiAgeeqBhBAEiwAoDDhn4cIbYoBl8Z6SP9xnkMEmNVM-WrD_xpfsFmYmj6y0Cb7H9kOBvuzMhoCeBUQAvD_BwE) | 5V-30V / 0.1A | 18 AWG | Breaker Port ([20A](https://www.revrobotics.com/rev-11-1861/)) |
| [roboRIO](https://www.ni.com/docs/en-US/bundle/roborio-frc-specs/page/specs.html) | 7V-16V / \~4A | 18 AWG\* (22 min) | Fuse Port (10A) |
| [RPM](https://www.revrobotics.com/rev-11-1856/) | 5V-18V / 1A | 18 AWG\* (22 min) | Fuse Port (10A) |
| [CANCoder (Power)](https://store.ctr-electronics.com/cancoder/) | 6V-16V / 0.06A | 22 AWG | Fuse Port (10A) |
| [Buckboost](https://www.amazon.com/dp/B07YZBLCY5?ref_=cm_sw_r_mwn_dp_RTA53JTPWSH5JCAQQY3N&language=en-US&th=1) | 8V-40V / 3A | 18 AWG* (16 Act) | Fuse Port (10A) (Switchable) |
| [Pigeon 2](https://store.ctr-electronics.com/pigeon-2/) | 6V–28V / 0.05A | 22 AWG | Fuse Port (10A) |
| CAN Wire |  | 22 AWG |

## PDH Details
| PDH Port | Quantity |
| -------- | -------- |
| Fuse Ports | 3 |
| Fuse Ports (Switchable) | 1 |
| Breaker Ports | 20 (18 for motors, 2 for system) |
