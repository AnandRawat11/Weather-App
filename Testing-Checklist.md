# Testing Checklist – Weather & Disaster Early-Warning Board

**Project:** Weather & Disaster Early-Warning Board  
**Role:** Testing & Documentation Lead  
**Testing type:** Manual UI / functional testing

> Mark an item only after you have personally checked it.

## Dashboard and UI
- [ ] Dashboard opens without a visible layout issue.
- [ ] Main sections and labels are readable.
- [ ] Buttons and controls are visible and usable.
- [ ] Layout remains usable at different screen sizes.

## Forecast and Map Layers
- [ ] Forecast-day selection responds to clicks.
- [ ] TEMP layer button responds.
- [ ] RADAR layer button responds.
- [ ] CLOUDS layer button responds.
- [ ] Selected layer/state is visually clear.

## Alerts and Notifications
- [ ] Notification control responds to clicks.
- [ ] Fire Alert action displays the expected alert state.
- [ ] Alert text is readable and clearly distinguishable.

## Simulation Controls
- [ ] Simulation speed controls respond.
- [ ] Pause/resume control responds, if available.
- [ ] Reset returns the simulation to its initial state.
- [ ] Scenario controls update the displayed UI as expected.

## Theme and General Usability
- [ ] Theme toggle works.
- [ ] No obvious text overflow or overlapping elements.
- [ ] Browser console is checked for errors, if possible.

## Notes
Record any failed check in `Test-Execution-Report.md` and use `Bug-Report-Template.md` to document the issue.
