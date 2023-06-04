---
title: 'Prototyping in code'
date: '2022-08-28'
---

Most teams or makers will jump from design straight to production code when developing apps or new features.

But they are missing one step that can make everybody's life much easier: **prototyping the app in code**.
It will help you create the best product experience much faster. If you want to save time and frustration when building a new app or a feature next time, read on…

Here are some tips from my experience with building web apps in React.

Quick guide:

- Always prototype. Even the small, sure things.
- Simplify everything. The dummer the code looks the better.
- Don’t split code. Aim for easiest editing.
- Use UI kits and generative tools.
- Don’t use any prototype code in the production version.

## Prototyping is too important to skip

Doesn’t matter if you work in a big team or alone, prototyping allows getting to the best product UX and UI faster because it shortens the feedback loop by a mile and makes iterating so much easier.

You’ll always iterate on features. It’s rarely a banger on the first try. There will be use case not thought through. UI not understood. There will be new ideas. You get the point. Go through this on easy mode and only revise the prototype.

Besides that, you should always get feedback from customers and teammates before the development begins. It’s too late after it’s all built. And there’s no better way to get real feedback than using a real feeling thing – the prototype.

After getting feedback you can update it in a matter of minutes and test again. You’ll have a product users love in no time.

Now for the practical bits…

## Prototype a new app

This is the easiest to do (and a joy). There are no technical blocks to get through, and you can literally build whatever you can imagine. Speed is your friend here.

Try to squeeze everything in one file. Thinking how to split the code and then finding the right parts to update is wasted time right now.
Store data in the simplest structures. No optimizations or clean code needed or wanted.
And use a ready-made UI kit. Custom styling takes the most time and is pointless. You can customize the kit’s theme if needed.

You should be able to get a decent sized interactive app prototype made like this in couple hours tops.

## Adding a new feature can be simple too

You just need to forget most code exists.

Build the new feature in isolation - one file / component / place. Point is not having to hunt for stuff to change in multiple places. If you need to add new UI in multiple places, it’s better to import it there from your new feature file.

Use dummy data for the new feature. It’s much easier to manage the prototype experience when there’s easy control over the data it uses. Copy what API returns now, paste statically to code, add new data as needed.

As an extension of that, minimize dependencies on other app’s logic. Copy what you need or add proxies that extend business logic.

## Improve features quick and dirty style

I would prototype even feature improvements. You never know if a sneaky UX glitch hasn’t weaseled its way in.

There are no recommendations how to do this exactly. Other than make it as quick and dirty as possible.

## Final step – throw it all away

Even if PMs tell you “it’s great, ship it”, it’s not great. If you’ve been following my advice you have no pieces that should hit the customers.

Wait with the git reset tho. I mean, don’t use the code itself but use it as a guide. Go to the right places and implement the ideas from the prototype the right way.

“I haven’t followed your advice and got the perfect code on the first try”. Chances are it could be better. Try doing the same – rewrite the code from scratch, and you’ll make it better on the second try.

## Tools for happy prototyping

### React UI Kits

- for modern, fun look go with [Chakra UI](https://chakra-ui.com/)
- or common UI everybody’s used to – [Material UI](https://mui.com/)
- other branded design systems on the corporate style side:
  - Adobe’s [Spectrum](https://react-spectrum.adobe.com/react-spectrum/index.html)
  - Microsoft's [Fluent UI](https://developer.microsoft.com/en-us/fluentui#/)
  - [Ant design](https://ant.design/)
  - Uber’s [Baseweb](https://baseweb.design/)

In most cases – new products, startups, I recommend Chakra. It looks great and is easy to use.

#### Fake data

Generate fake data with [Faker](https://fakerjs.dev/). Use real-looking names, addresses, etc. to make the prototype more realistic.

### Component sandbox

If you need more complex or interaction-heavy components, best develop them in isolation in tools like [Storybook](https://storybook.js.org/) or [Ladle](https://storybook.js.org/)

<!-- ### Theme designer -->

<!-- To give the prototype a more branded feel – to make it more real – edit the theme easily with Duotone -->

_More maker/UX content coming. See you soon…_
