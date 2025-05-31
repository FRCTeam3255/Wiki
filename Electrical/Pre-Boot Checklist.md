# Pre/First-Boot Checklist

## Before Power On

1. Confirm all wires (and their connection points) are labeled
2. Confirm there is no exposed wire (you should not be able to see any bare metal)
   1. Check for loose or disconnect ferules
   2. Check for any fraying wire at connection points
3. Run continuity test
   1. Set multimeter to Ω
   2. Touch one end of the multimeter (color does not matter) into the **red 🔴** main power hole on the PDH
   3. Close the main breaker
   4. Touch the other end to various metal parts of the frame and robot
   5. The multimeter should continue to say **OL (open loop)**. If it says anything but **OL** you have a short that needs to be fixed
   6. Repeat steps 2 to 4 for the **black ⚫️** hole
   7. Open the main breaker
4. Connect battery and close breaker

## After Power On

1. Configure Radio
2. Deploy Code
3. Set CAN IDs
4. Update CAN firmware using Phoenix Tuner
5. Clear stick faults on PDH using Rev Hardware Client
   1. Connect to robot using USB-C port on the PDH
