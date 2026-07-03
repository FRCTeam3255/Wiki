# Diagnosing Shorts

!!! warning

    A short circuit can damage components and prevent the robot from operating. Always diagnose and resolve shorts before powering on the robot.

!!! note

    This process is used when a continuity test (see [Pre/First-Boot Checklist](Pre-Boot Checklist.md)) shows a reading other than **OL (open loop)** between the PDH and the robot frame, indicating a short to ground.

## Supply List

1. Multimeter (set to Ω / continuity mode)

## Identifying a Short

1. Open the main breaker
2. Set the multimeter to Ω (resistance / continuity mode)
3. Insert one multimeter probe into the **red 🔴** main power hole on the PDH
4. Touch the other probe to various metal parts of the frame
5. If the multimeter reads anything other than **OL (open loop)**, a short is present on the positive power line
6. Repeat steps 3–5 using the **black ⚫️** main power hole to check for a short on the negative power line

## Isolating the Short

Once a short is confirmed, use the following process to identify which device or wire is causing it:

!!! important

    Removing a breaker from the PDH does **not** count as unplugging a device. The wiring is still connected and will still show the short. You must physically disconnect the power wires from the device or PDH port.

1. Keep the multimeter probes in place (one in the PDH, one touching the frame)
2. Unplug the power wires for one device at a time from the PDH
3. After each disconnection, check whether the multimeter now reads **OL**
4. When the reading returns to **OL**, the last device you unplugged is the source of the short
5. Inspect that device and its wiring for:
    - Exposed bare wire touching the frame or another conductor
    - A frayed wire at a connector or terminal
    - A loose ferrule allowing wire strands to contact metal
    - A wire pinched between frame members

## Resolving the Short

1. Fix the identified issue (re-crimp terminals, replace damaged wire, add insulation, etc.)
2. Re-run the continuity test to confirm the short is resolved before powering on
3. See the [Pre/First-Boot Checklist](Pre-Boot Checklist.md) for the full power-on procedure
