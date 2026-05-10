---
name: Eco-Cultural Design System
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#424844'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#727973'
  outline-variant: '#c2c8c2'
  surface-tint: '#496455'
  primary: '#173124'
  on-primary: '#ffffff'
  primary-container: '#2d4739'
  on-primary-container: '#98b5a3'
  inverse-primary: '#b0cdbb'
  secondary: '#974723'
  on-secondary: '#ffffff'
  secondary-container: '#ff996e'
  on-secondary-container: '#772f0c'
  tertiary: '#242f13'
  on-tertiary: '#ffffff'
  tertiary-container: '#3a4627'
  on-tertiary-container: '#a6b48d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ccead6'
  primary-fixed-dim: '#b0cdbb'
  on-primary-fixed: '#062014'
  on-primary-fixed-variant: '#324c3e'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#ffb598'
  on-secondary-fixed: '#370e00'
  on-secondary-fixed-variant: '#79300e'
  tertiary-fixed: '#dae8be'
  tertiary-fixed-dim: '#becca3'
  on-tertiary-fixed: '#141f05'
  on-tertiary-fixed-variant: '#3f4b2c'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 36px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Source Sans 3
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Source Sans 3
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Source Sans 3
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding-mobile: 24px
  container-padding-desktop: 80px
  gutter: 16px
  section-gap-mobile: 48px
  section-gap-desktop: 96px
---

## Brand & Style
This design system centers on an **Organic Editorial** aesthetic. It moves away from the clinical nature of standard modern apps, favoring a human-centric, tactile feel that reflects the Mediterranean landscape. The style is defined by intentional minimalism, where "luxury" is expressed through generous whitespace and meticulous typography rather than ornamentation.

The emotional response should be one of groundedness and curiosity. By utilizing a "paper-like" background and a natural palette, the interface feels like an extension of the physical environment in Greece. The transition from English to Greek is treated with equal typographic weight, ensuring a seamless bilingual experience that feels indigenous to both languages.

## Colors
The palette is derived from the Greek landscape: the deep shade of olive groves, the sun-baked soil, and the clarity of light on stone.

- **Background (#F9F7F2):** A warm, unbleached paper tone. Use this for all primary surfaces to reduce eye strain and provide an organic foundation.
- **Primary (#2D4739):** Deep Forest Green. Reserved for key actions, primary headings, and structural elements. It provides the necessary "anchor" for the lighter earth tones.
- **Secondary (#C66B44):** Terracotta. Used sparingly for highlights, calls to action, or indicating active states.
- **Tertiary (#A3B18A):** Sage. Ideal for secondary backgrounds, success states, or subtle environmental icons.
- **Accent (#E6D5B8):** Sand. Used for dividers, subtle borders, and soft UI backgrounds to separate content sections without using harsh lines.

## Typography
The typography strategy creates an editorial rhythm. **Libre Caslon Text** is used for headlines to evoke a sense of history and academic prestige. **Source Sans 3** provides a high-legibility counterpart for body text, ensuring that educational content is accessible across all devices.

For the bilingual implementation, ensure that the Greek glyphs in Libre Caslon are monitored for optical weight consistency. Line heights are purposefully generous (1.6 for body) to maintain the airy, calm tone of the brand. Use "Label-caps" for small metadata or categories to create a clear visual hierarchy between the serif storytelling and the functional interface.

## Layout & Spacing
The layout follows a **fluid grid** model with a mobile-first philosophy. On mobile, we use a 4-column grid with 24px side margins to allow the content "room to breathe." On desktop, this scales to a 12-column grid with significant horizontal inset (max-width: 1280px) to mimic the margins of a high-end magazine.

Spacing is used as a functional tool to group ideas. Section gaps are intentionally large to encourage a slow, deliberate scrolling experience. Use the `section-gap` units between different types of content (e.g., between an article and a sign-up form) to prevent visual clutter.

## Elevation & Depth
This design system avoids traditional drop shadows and skeuomorphic depth. Instead, it utilizes **Tonal Layering** and **Subtle Outlines**.

- **Depth through Color:** Elements that need to stand out (like cards) sit on a background of #E6D5B8 (Sand) or have a very fine 1px border in a slightly darker shade of the background.
- **Soft Transitions:** State changes (hover, focus) should use soft opacity fades (200ms ease-in-out) rather than sudden color jumps.
- **Glassmorphism (Minimal):** Use only for sticky navigation headers with a very light backdrop blur (4px) and 90% opacity of the background color (#F9F7F2) to maintain context while scrolling.

## Shapes
The shape language is "Soft." While the layout is structured, corner radii are used to remove the "sharpness" of digital interfaces, making them feel more like stone or hand-crafted paper. 

Standard components use `rounded-sm` (4px). Interactive elements like buttons and input fields use `rounded-md` (8px). Avoid fully circular "pill" shapes as they feel too corporate/tech-focused; the goal is an artisanal, geometric balance.

## Components
- **Buttons:** Primary buttons are solid Deep Forest Green with White text. Secondary buttons use a 1px Forest Green border with a transparent background. No shadows.
- **Cards:** Cards should have no borders or shadows. They are defined by a background color shift to #E6D5B8 (Sand) or by generous padding and a top-aligned thin rule (divider).
- **Inputs:** Text fields use a simple bottom-border (1px) in Sage or Sand, rather than a full box, to maintain the editorial feel. The label stays above the line in the "Label-caps" style.
- **Language Switcher:** A minimalist toggle in the top-right, using the serif font (ΕΛ | EN). The active language is underlined with a 2px Terracotta line.
- **Chips/Tags:** Used for "Nature," "Culture," or "History" categories. These are small, Sage-colored backgrounds with Forest Green text, using `rounded-sm`.
- **Image Treatment:** Photos should have slightly rounded corners (8px) and, where possible, use a "duotone" or warm-filtered aesthetic to match the earthy palette.