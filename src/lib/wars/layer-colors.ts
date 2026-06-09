// The two cross-war LAYER colors — reserved, used nowhere else in the war app.
//
// Every war has two theatre-independent layers that behave identically: the
// narrative spine ("How the War Happened") and the causes/society/aftermath layer
// ("Off the Battlefield"). They are NOT theatres and never borrow a theatre's
// color. Both wars' configs, every landing page, the home tabs, and the
// breadcrumb all read these two values, so a third war inherits them for free.
//
// Keep these in lockstep with the CSS custom properties --warstory / --otbf in
// src/app/war-civil-war/war-skin.css (the JS values drive config + breadcrumb
// dots; the CSS vars drive theme-correct drop caps / chips / chapter numbers).

// Deep oxblood / wine-red. Its darkness and wine cast keep it apart from the warm
// terracotta of the sides (Confederate brick, British red), the rust theatre, and
// the off-field orange. Light mode is a true deep oxblood (good on parchment); dark
// mode lifts to a garnet-rose so it stays visibly red on the warm-dark background.
export const WAR_STORY_COLOR = { light: '#7a1f2e', dark: '#cb6470', dot: '#ad3346' }
export const WAR_OFFFIELD_COLOR = { light: '#c2611f', dark: '#e07f3c', dot: '#d96a26' }

// The reserved THEATRE palette — used only to color a theatre and the battles inside
// it, in any war. Seeing one of these = "I'm in the battle layer." A war assigns one
// per theatre; the same color can mean "a theatre" across different wars. (ACW's four
// theatres still inline these same hexes via --th-* CSS vars; F&I's single theatre
// draws plum from here.) Keep in lockstep with --th-* in war-skin.css.
export const THEATRE_PALETTE = {
  plum:  { light: '#8a5b86', dark: '#c79cd0', dot: '#8a5b86' },
  green: { light: '#4e8a52', dark: '#84c089', dot: '#4e8a52' },
  gold:  { light: '#b3852f', dark: '#d8b25a', dot: '#b3852f' },
  teal:  { light: '#2c7d99', dark: '#5fb0cc', dot: '#2c7d99' },
  rust:  { light: '#b3502f', dark: '#d98a5a', dot: '#b3502f' },
}
