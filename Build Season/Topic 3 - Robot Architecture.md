# Topic 3: Robot Architecture

This occurs the Monday following kickoff

## Agenda

### Monday

|   Time   | Duration |                                                                                              |
| :------: | :------: | -------------------------------------------------------------------------------------------- |
| 9:00 am  |  30 min  | Review weekend insights                                                                      |
| 9:30 am  |  30 min  | Re-watch game animation/field tours                                                          |
| 10:00 am |  30 min  | Add to feature importance                                                                    |
| 10:30 am |   2 hr   | Rank feature importance list                                                                 |
| 12:30 pm |  30 min  | **Lunch**                                                                                    |
| 1:00 pm  |  15 min  | Break (Mentors create Architecture Groups)                                                   |
| 1:15 pm  | 1.75 hr  | General Robot Architecture Creation - Round 1                                                |
| 3:00 pm  |  30 min  | **Dinner**                                                                                   |
| 3:30 pm  |   2 hr   | General Round 1 Robot Architecture Presentation<br>Consolidation/Feature Importance Checkoff |
| 5:30 pm  |  30 min  | Clean up                                                                                     |
| 6:00 pm  |    -     | Meeting ends                                                                                 |

### Tuesday

|  Time   | Duration |                                                                                                                                                         |
| :-----: | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2:30 pm |  15 min  | Review Team Updates (Manual Updates)<br>Re-watch game animation                                                                                         |
| 2:45 pm |  15 min  | Review feature importance list                                                                                                                          |
| 3:00 pm |  50 min  | Re-present concept ideas                                                                                                                                |
| 3:50 pm |   1 hr   | Break into two groups                                                                                                                                   |
| 4:50 pm |  40 min  | Present ideas<br>15 min per group<br>Last 5 min,cover feature importance list                                                                           |
| 5:30 pm |  15 min  | Break                                                                                                                                                   |
| 5:45 pm |  15 min  | Find similarities and differences<br>Similarities are locked in                                                                                         |
| 6:00 pm |  30 min  | Comparative analysis spreadsheet of differences (features vs complexity)<br>Define ACTIONS of contention<br>Break down by mutually exclusive mechanisms |
| 6:30 pm |  15 min  | Design Decided, Split Architecture into Mechanisms                                                                                                      |
| 6:45 pm |  15 min  | Break<br>Mentors Make Mechanism groups                                                                                                                  |
| 7:00 pm |  30 min  | Work on base structures/variable prototypes in groups<br>Software creates base robot/structures code                                                    |
| 7:30 pm |  15 min  | Clean up                                                                                                                                                |
| 7:45 pm |    -     | Meeting ends                                                                                                                                            |

<!-- - 45 min per section research, 10 min per group presentation
- 3 groups Generate robot architecture based on ideas presented
- Present architectures
- Decide which concepts to prototype from the ideas presented (refer to [fundamentals list](#fundamentals-list)) - TARGET FOR MONDAY
- Create prototypes
  - If prototype doesn't work for category, pick from previous ideas (I.e. collector A didn't work, try collector B)
- Decide final design -->

<!-- ## Design Discussion

- Break up into 3 groups for each section for research
- Old robots/designs and videos (see [research recommendations](#research-recommendations))
- Present each sections (1 design per group per section)
  - example: 3 groups research collector, 3 groups present collector, move on to next section
- Prototype
  - 3 prototypes per system

**Research, Present, Prototype** -->

<!-- !!! important
    1 single mechanism can cover multiple categories  
    Each step in process think about how you can combine with previous categories -->

<!-- ### Order

1. Collector (repeat per game piece)
2. Releaser (repeat per scoring location)
3. Transfer
    1. (things that move game piece location)
    2. e.g. elevator, arm, wrist, belts, wheels
    3. Anything that move game piece from original collected position
4. Climber
5. Think optimizations/extras for each component (major competitive advantage/cycle time reduction)
    1. Turrets, hoods, ability to do two motions at once, game piece orientation changing (flip cone), etc.
6. What things can be combined/simplified -->

## Feature ranking

- assume solo robot
- no difficulty
- all features in isolation (one does not affect another) (most of the time)
- rank 5 = Minimum Viable Robot (regional 1)
- rank 4 = Competitive Robot (regional 1)
- rank 3 = Optimizations (target regional 1)
- rank 2 = try to do it but not too hard (optional)
- rank 1 = if its free do it (optional)
- rank 0 = not doing - wont even test

## Philosophy

- Say, this scoring element is similar to a past game
- Say this climb is similar to this past game
- Come up with a robot that does all of these
- Each mechanism has video behind it, ex 2020 bot with, a 2019 climber
- When they present the robots structure, “we are doing a 2020 style robot, with and under the bumper intake, elevator climber, and shooter in center with turret”

## What is an architecture?

- General 2D view
- Bounding boxes
- Types of motion (ex pivots/degrees of freedom)
- Example: This is where the intake will be, this is where shooter will be. Intake is arm intake is elevator etc...
- Base structures - things like arms, elevator, drivetrain
<!-- - End effectors -->
<!-- - Is it dual intake
- Is there a transfer? -->

## General Robot architecture rankings

- Present them, give descriptor name, 2-3 people present
- Go in depth about each mechanism

### Whole group discussion

To decide on designs, look at feature importance list, and see which easily accomplish the highest features are
    - add complexity (Quantified via fundamentals list), failure modes

1. Which architectures are super similar? Which to combine?
2. Ask about mechanism mergers/ideas, “ie this is a better version of what I found”
3. Does it meet all requirements? (offseason only)
4. How many 5 features, how many 4 features, how many 3 Features, 2 Features, 1 Features does it satisfy
5. Add them up (Test)
6. Add complexity rating to architecture, (test)
    - Define complexity, Ex # of pivots/motion
7. Compare features vs complexity ratings
8. Reduce down to two architectures,
9. Make new groups
10. Tailor this architecture to this game even more
    - Think additional functionality, pass throughs, etc to save cycle time
    - complexity reductions, combine mechanisms
    - Steal ideas combine mechanisms
11. Present again
12. Total up the complexity and feature totals
13. Narrow down

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

## Variable prototypes designs

- Compression values, rough geometry
- On slots, 8020, hole patterns etc.
- Mounts to frame, for electronics
- Made out of HDPE
