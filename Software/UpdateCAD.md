1.Export any component that can move
ex:drivetrain, elevator base stage, elevator 2nd stage, elevator carriage 
-think about what big parts move
-right click on whatever part you want to hide then press suppress until you only have desired component
-save file as "step AP214" in downloads
-if it says "one or more components are hidden or suppressed", click no
-Repeat steps for all parts

2.Open up CAD assistant
-open your exported file
-color the model
-export and click save as a glb file then save
-when saving the file, save in your repo the Robot_ foder in the assets folder. Name as "model" for the base (drivetrain), model_0 for the second stage (ex: elevator base), model_1 for third stage (ex: elevator 2nd stage), etc.
-Repeat steps for all parts

3.start sim, open up Advantage Scope

4.Go to config.json file in your code, copy down following code, make sure every components has its own set of code. And then, change the configs until all robot parts are facing forwand and have the right rotationmnhjb ,