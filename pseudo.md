# Psuedocoing Challenge #3

- I need to ask my user how many characters should the password contain.
- (HOW do I ask that question? Is there some type of popup/prompt/etc.? Should I search popup on browser JS?)

- I need the user to relog the value *if* the character is less than 8 or greater than 128/

    ==> IF (password character is less than 8) {Tell the user to put in a longer password}
    ==> IF (password is greater than 128) {Tell user to put in shorter password}

## If all goes well up top
    -I need to ask user what kind of inputs they want. Numbers? Special Characters? Lowercase? Uppercase?
    - How does my computer know what a number is? What a spcial character is? Lowercase? Uppercase?
    - Do I need some type of STORAGE for each of these values?
    - IF (user picks special characters) {they need to use the sorage with special characters} x3


### AFTER grabbing whatever values/characters the user wants
The key here is that the password value is **randomized** and **it matches the length the user asked for**. 
    - Is there a way to RANDOMIZE the different values from the STORAGES above?
    -