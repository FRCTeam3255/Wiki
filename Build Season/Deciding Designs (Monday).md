# Deciding Designs

## Agenda

|   Time   | Duration |                                                                   |
| :------: | :------: | ----------------------------------------------------------------- |
| 9:30 am  |  30 min  | Review weekend insights                                           |
| 10:00 am |  30 min  | Re-watch game animation/field tours                               |
| 10:30 am |  30 min  | Finish feature importance list if not complete                    |
| 11:00 am |   2 hr   | Rank feature importance list                                      |
| 1:00 pm  |   1 hr   | Lunch                                                             |
| 2:00 pm  |   1 hr   | Continue Rank feature importance list                             |
| 4:00 pm  |          | **Mechanical:** Design discussion [see below](#design-discussion) |
| 4:00 pm  |          | **Software:** Skeleton Robot                                      |

- 45 min per section research, 10 min per group presentation
- 3 groups Generate robot architecture based on ideas presented
- Present architectures
- Decide which concepts to prototype from the ideas presented (refer to [fundamentals list](#fundamentals-list)) - TARGET FOR MONDAY
- Create prototypes
  - If prototype doesn't work for category, pick from previous ideas (I.e. collector A didn't work, try collector B)
- Decide final design

## Design Discussion

- Break up into 3 groups for each section for research
- Old robots/designs and videos (see [research recommendations](#research-recommendations))
- Present each sections (1 design per group per section)
  - example: 3 groups research collector, 3 groups present collector, move on to next section
- Prototype
  - 3 prototypes per system

**Research, Present, Prototype**

!!! important
    1 single mechanism can cover multiple categories  
    Each step in process think about how you can combine with previous categories

### Order

1. Collector (repeat per game piece)
2. Releaser (repeat per scoring location)
3. Transfer
    1. (things that move game piece location)
    2. e.g. elevator, arm, wrist, belts, wheels
    3. Anything that move game piece from original collected position
4. Climber
5. Think optimizations/extras for each component (major competitive advantage/cycle time reduction)
    1. Turrets, hoods, ability to do two motions at once, game piece orientation changing (flip cone), etc.
6. What things can be combined/simplified

## Fundamentals List

- What’s quickest
- What’s most reliable
- What are failure modes
  - Invalid geometry
  - Collisions
  - Out of frame
- What is simple
- What are failure points
  - Motors
  - Chains
  - Pneumatics
  - Sensors
  - Durability
- Size/packing/weight/volume (extension limit/bumper rule)
- Does it meet feature importance list criteria
- Susceptibility to defense

## Research Recommendations

How to research robot designs (suggested order)

1. Find similar old games (FRC, FTC, VEX)
2. Find successful robots from that game (TBA, champs)
3. Match footage
4. Watch robot reveals
5. Behind the bumpers
6. Look at Ri3D
