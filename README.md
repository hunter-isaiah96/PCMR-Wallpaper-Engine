# Why did I make this?

Honestly I was tired and needed to find something to keep me from falling asleep... I made it to about 7pm after being up since 10:00pm the previous day ... yea, us web developers don't really sleep all that much, it's true.

# Personalization

To change ['behold', 'true gloriousness', the main text color, and the color of PC and the separator], open index.html in any text editor and scroll to the bottom where you will see a variable called configuration and change each one accordingly.
**Here's what you should be looking for**:

```
const configuration = {
  top_text: 'behold',
  bottom_text: 'true gloriousness.',
  main_color: '#FF3333',
  text_color: '#fff',
  blur_amount: 5
};
```

To change the image, simply replace the image 'background.jpg' in the image folder