# Filly

Quick app to auto fill very long weekly form with stock answers (don't ask)


### TODO 
- sort out tsconfig and allowing async functions in page.evaluate
- sort type on request in test 
- formfiller take loaded page (puppeteer page OR fake browserPage (JSDom - needs to handle puppeteer functions eg .click to do something sensible in jsdom( implement interface)))
- formfiller calls functions (fill(), submit()) on this
- fakeBrowserPage load() should load html file to test on 
- separate integration test against test airtable acc 
