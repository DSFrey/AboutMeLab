# LAB - 02

## AboutMeLab

### Author: Daniel Frey

### Links and Resources

- Background image from [wikimedia](https://upload.wikimedia.org/wikipedia/commons/8/86/Cedar_Rapids_-_Mays_Island.jpg)

### Reflections and Comments

Overall, I would say this went pretty smoothly. I used a different method to initialize the javascript, which caused some initial troubles but ended up helping me be more aware of putting everything in functions instead of just having free-floating code.

When I was working with my result alert, I wanted to give the same message for two different scores. I tried to do `case(2||3)`, but that didn't work. I ended up using

    case (3): 
    case (4):
        alert(`Not bad, ${userName}. You got ${quizScore} correct.`);
        break;

Is there a cleaner way to do that with the case function?

I estimated I would take about 1.5 hours to finish the lab, and I ended up taking about 3 hours. Still, the javascript portion that was the main focus of the lab only took about an hour; I spent way too much time trying to decide what content to write and more more time than expected trying new things in css.
