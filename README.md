# Event shopping concept

An unsolicited product concept by [Daniela Valades](https://www.linkedin.com/in/danielavalades): save an event once (date, place and dress code for each part of the weekend), and the shopping feed fits it. Curators you follow come first, and anything you already own is left out.

This is a portfolio piece. It is not affiliated with, or endorsed by, any company whose product inspired it. All people, events and curators in the prototype are invented.

## What's here

- `site/index.html`: the case page, with the prototype embedded in a phone frame on desktop.
- `site/app.html`: the prototype itself, a mobile page at 390px wide. All data is seeded in the page; there is no backend.
- `site/process/`: every design round, with the option chosen in each.

Plain HTML, CSS and JavaScript, with no build step and no dependencies. To run it locally:

```
cd site && python3 -m http.server 8765
```

Then open http://localhost:8765/index.html.

## How it was built

Built with Claude Code, using separate builder, test-writer and reviewer agents, with an end-to-end test suite run at three screen sizes before every merge. Hosted on Vercel.

## Credits

Inter and Instrument Serif fonts are under the SIL Open Font License (`site/fonts/OFL.txt`). Photos on the design-process page are from Unsplash, credited on that page.
